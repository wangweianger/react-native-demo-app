import React, { Component } from 'react';
import util from '../../common/util'
import { baseApi } from '../../common/config'
import { connect } from 'react-redux'
import { updateCartNumber } from '../../redux/actions'
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
  RefreshControl
} from 'react-native';

import Loading from '../../components/loading'

import Cartfooter from './item/cartfooter'
import Cartitem from './item/cartitem'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            isCheckAll:true,
            refreshing:false,
            cartCount:0,
            isEdit:false,
            totalPrice:0,
            datas:[]            
        }
    }

    render() {
        return (
            <View style={styles.container}>
            {
                this.state.isShow ?
                <View style={styles.flex}>
                    <View style={styles.bottomBottm}>
                        <Text style={ styles.title }>购物车({this.state.cartCount})</Text>
                        <TouchableOpacity style={ styles.parentedit } onPress={this._editGoods.bind(this)}>
                            <Text style={ styles.edit }>{ this.state.isEdit?'完成':'编辑' } </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.main}>
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
                            <Cartitem 
                                cartCount={this.state.cartCount}
                                getPayTotalPrice={this.getPayTotalPrice.bind(this)}
                                items={this.state.datas} 
                                isEdit={this.state.isEdit} 
                                isCheckAll={this.state.isCheckAll} />
                        </ScrollView>
                    </View>
                    <Cartfooter 
                        totalPrice={this.state.totalPrice}
                        isCheckAll={this.state.isCheckAll} 
                        handleIsCheckAll={this.handleIsCheckAll.bind(this)}  />
                </View>
                :
                <Loading />
            } 
            </View>
        );
    }

    // 编辑商品
    _editGoods(){
        this.setState({
            isEdit:!this.state.isEdit
        })
    }

    _onRefresh(){
        this.setState({refreshing: true});
        this.getAllBigcategory()
    }

    componentDidMount() {
        this.getAllBigcategory()
    }

    getAllBigcategory(){
        util.ajax(baseApi+'native/cart/getTotalCartList',  (data)=> {
            if (data.code === 1000) {
                let totalPrice = 0;
                data.data.list.forEach((item)=>{
                    item.isChecked=true
                    totalPrice += item.salePrice
                })
                this.setState({
                    refreshing:false,
                    isShow: true,
                    totalPrice:totalPrice,
                    cartCount:data.data.cartCount,
                    datas: data.data.list
                });
            }
        }) 
    }

    // 是否全选
    handleIsCheckAll(isCheckAll){
        this.setState({
            isCheckAll:isCheckAll
        })
    }

    // 获得结算总价格
    getPayTotalPrice(totalPrice,cartCount){
        this.setState({
            totalPrice:totalPrice,
        })
        if(cartCount+''){
            this.setState({
                cartCount:cartCount
            }) 
            this.props.dispatch(updateCartNumber(cartCount));
        }
    }
}

export default connect()(Cart);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    flex:{
        flex:1,
    },
    bottomBottm:{
        position:'relative',
    },
    title:{
        backgroundColor:'#fff',
        height:50,
        lineHeight:50,
        fontSize:18,
        textAlign:'center',
        backgroundColor:'#868FD4',
        color:'#fff'
    },
    parentedit:{
        position:'absolute',
        right:10,
        top:20,
    },
    edit:{
        fontSize:14,
        backgroundColor:'#868FD4',
        color:'#fff'
    },
    main:{
        height:util.size.height-170,
    },
});


