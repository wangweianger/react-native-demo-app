import React, { Component } from 'react';
import util from '../../common/util'
import { baseApi } from '../../common/config'
import { connect } from 'react-redux'
import { getCartNumber,updateCartNumber } from '../../redux/actions'
import {
    LazyloadScrollView,
} from 'react-native-lazyload';
import {
  StyleSheet,
  Text,
  RefreshControl,
  View
} from 'react-native';

import Loading from '../../components/loading'
import Search from './item/search'
import Swiper from './item/swiper'
import Entrys from './item/entrys'
import BigImg from './item/bigImg'
import MoreGoods from './item/moreGoods'
import OneProduct from './item/oneProduct'
import FourProduct from './item/fourProduct'
import FiveProduct from './item/fiveProduct'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            refreshing: false,
            datas:[]
        }
    }

    render() {
        let items = []
        this.state.datas.forEach((item,index)=>{
            if(item.styleCode === 'banner_list'){ items.push( <Swiper key={index} datas={ item.list }/> ) };
            if(item.styleCode === 'entrys_list'){ items.push( <Entrys key={index} datas={ item.list }/> ) };
            if(item.styleCode === 'vertical_acts'){ items.push( <BigImg key={index} datas={ item.list }/> ) };
            if(item.styleCode === 'moregoods_list'){ items.push( <MoreGoods key={index} title={item.styleTitle} datas={ item.list }/> ) };
            if(item.styleCode === 'one_product'){ items.push( <OneProduct key={index} datas={ item.list }/> ) };
            if(item.styleCode === 'four_product'){ items.push( <FourProduct key={index} datas={ item.list }/> ) };
            if(item.styleCode === 'five_product'){ items.push( <FiveProduct key={index} bigImg={item.bigImg} datas={ item.list }/> ) };
        })

        return (
            <View style={styles.flex}>
            {
                this.state.isShow ?
                <View style={styles.container}>
                    <Search navigator={this.props.navigator}/>
                    <View style={styles.flex}>
                        <LazyloadScrollView 
                            style={styles.flex}
                            name="scroll"
                            automaticallyAdjustContentInsets={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    title="数据在加载中..."
                                    onRefresh={this._onRefresh.bind(this)}
                                    tintColor="#aaa"
                                    titleColor="#999"
                                    progressBackgroundColor="#ffff00"
                                />
                            }>
                            {items}
                        </LazyloadScrollView>
                    </View>
                </View>
                :
                <Loading />
            }    
            </View>
        );
    }

    //下拉刷新
    _onRefresh() {
        var that = this;
        that.setState({refreshing: true});
        setTimeout(function () {
            that._fetchData();
        }, 1000)
    }

    _fetchData(callback) {
        var that = this;
        util.ajax(baseApi+'native/home/getHomeDatas', function (data) {
            if (data.code === 1000) {
                that.setState({
                    isShow: true,
                    datas: data.data&&data.data.length?data.data:[],
                    refreshing: false
                });
            }
        })
    }

    // 获得购物车总数量
    _getCartTotalNum(){
        const { dispatch } = this.props
        dispatch(getCartNumber())
    }

    componentDidMount() {
        this._fetchData()
        this._getCartTotalNum()
    }
}

export default connect()(Home)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    flex: {
        flex: 1,
    },
});

