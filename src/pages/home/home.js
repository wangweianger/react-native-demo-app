import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  View,
  Image
} from 'react-native';
import util from '../../common/util'
import {baseApi} from '../../common/config'

import Search from './item/search'
import Swiper from './item/swiper'
import Entrys from './item/entrys'
import BigImg from './item/bigImg'
import MoreGoods from './item/moreGoods'
import OneProduct from './item/oneProduct'
import FourProduct from './item/fourProduct'
import FiveProduct from './item/fiveProduct'

export default class Home extends Component {
    constructor() {
        super();
        //默认不显示 ScrollView
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
            <View style={styles.container}>
                <Search navigator={this.props.navigator}/>
                <View style={styles.flex}>
                    <ScrollView 
                        style={styles.flex}
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
                    </ScrollView>
                </View>
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
            } else {
                alert('服务异常,正在紧急修复,请耐心等待1');
            }
        }, function (err) {
            alert('服务异常,正在紧急修复,请耐心等待2');
        })
    }

    //组件加载完毕时候调用 TODO fatch数据
    componentDidMount() {
        this._fetchData();
    }
}

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

