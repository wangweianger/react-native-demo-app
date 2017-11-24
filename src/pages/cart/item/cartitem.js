import React, { Component } from 'react';
import util from '../../../common/util'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

import Hr from '../../../components/Hr'

export default class Cartitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:props.items?props.items:[],
            cartCount:props.cartCount
        }
    }

    render() {
        let itemlist=[]
        this.state.items.forEach((item,index)=>{
            itemlist.push(
                <View key={index} style={styles.itemsMain}>
                    <View style={styles.items}>
                        <TouchableOpacity onPress={this._checkItem.bind(this,item)}>
                        {
                            item.isChecked?
                            <Image 
                                source={require('../img/yes.png')} 
                                style={{width: 20, height: 20}}/>
                            :
                            <Image 
                                source={require('../img/no.png')} 
                                style={{width: 20, height: 20}}/>   
                        } 
                        </TouchableOpacity>
                        <Image 
                            source={{ uri: item.mainIcon}} 
                            style={{width: 50, height: 50,marginLeft:10 }}/>  
                        <View style={styles.textMsg}>       
                            <Text style={styles.item_title}> { util.limitTo(item.itemTitle,30) } </Text>
                            <Text style={styles.item_price}> ¥{ item.salePrice.toFixed(2) } </Text>
                        </View>
                        <View style={styles.item_right}> 
                            {
                                this.props.isEdit?
                                <View style={styles.flex}>
                                    <View style={styles.caozuo}>
                                        <TouchableOpacity onPress={this._reduceItemNum.bind(this,item)}>
                                            <Image 
                                                source={require('../img/reduce.png')} 
                                                style={{width: 20, height: 20}}/> 
                                        </TouchableOpacity>    
                                        <Text style={styles.caozuo_num}> { item.num } </Text> 
                                        <TouchableOpacity onPress={this._addItemNum.bind(this,item)}> 
                                            <Image 
                                                source={require('../img/add.png')} 
                                                style={{width: 20, height: 20}}/>  
                                        </TouchableOpacity>      
                                    </View>
                                    <TouchableOpacity onPress={this._deleteItemNum.bind(this,item)}> 
                                        <Image 
                                            source={require('../img/delete.png')} 
                                            style={styles.caozuo_delete}/> 
                                    </TouchableOpacity>     
                                </View>
                                :
                                <Text style={styles.item_number}> x{ item.num } </Text>    
                            }
                        </View>
                    </View>
                    <Hr/>
                </View>
            )
        })
        return (
            <View style={styles.container}>
                {itemlist}
            </View>
        );
    }

    // 删除单个商品
    _deleteItemNum(item){
        Alert.alert(
            '删除',
            '确认删除此商品吗？',
            [
                {text: '取消', style: 'cancel'},
                {text: '确定', onPress: () => alert(`删除了cid为${item.cid}的商品，此功能不做!`)},
            ],
            { cancelable: false }
        )
    }

    // 单个是否选择
    _checkItem(item){
        item.isChecked=!item.isChecked
        this.setState({
            items:this.state.items
        })
        this.getTotalPrice()
    }

    // 减少商品
    _reduceItemNum(item){
        if(item.num<=1){ alert('最少购买一个商品额！'); return }
        item.num-=1
        this.setState({
            cartCount:this.state.cartCount-=1,
            items:this.state.items
        })
        this.getTotalPrice()
    }

    // 增加商品
    _addItemNum(item){
        item.num+=1
        this.setState({
            cartCount:this.state.cartCount+=1,
            items:this.state.items
        })
        this.getTotalPrice()
    }

    // 根据是否全选状态更改 item 是是否选中
    componentWillReceiveProps(nextProps) {
        if(this.props.isCheckAll !== nextProps.isCheckAll){
            this.state.items.forEach(item=> {
                item.isChecked = nextProps.isCheckAll?true:false
            })
            this.getTotalPrice()
        }
    }

    // 获得总价格
    getTotalPrice(){
        let totalPrice = 0
        this.state.items.forEach(item=> {
            if(item.isChecked){
                totalPrice += item.salePrice*item.num
            }
        })
        this.props.getPayTotalPrice(totalPrice,this.state.cartCount)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemsMain:{
        marginLeft:15,
        marginRight:15,
        position:'relative',
    },
    items:{
        flexDirection: 'row',
        flexWrap:'nowrap',
        alignItems:'center',
        paddingTop:15,
        paddingBottom:15,
        height:80,
    },
    textMsg:{
        width:200,
    },
    item_title:{
        fontSize:12,
        marginBottom:5,
    },
    item_price:{
        fontSize:14,
        color:'red'
    },
    item_right:{
        position:'absolute',
        right:0,
        top:0,
        width:60,
        height:80,
        // backgroundColor:'#ccc',
    },
    item_number:{
        fontSize:16,
        color:'#999',
        position:'absolute',
        right:10,
        bottom:10,
    },
    caozuo:{
        flexDirection: 'row',
        flexWrap:'nowrap',
        marginTop:10,
    },
    caozuo_num:{
        fontSize:16,
        width:20,
        textAlign:'center',
        marginRight:3
    },
    caozuo_delete:{
        width:20,
        height:20,
        marginLeft:20,
        marginTop:15
    },
    
});



