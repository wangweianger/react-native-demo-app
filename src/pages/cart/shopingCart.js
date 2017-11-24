import React, { Component } from 'react';
import util from '../../common/util'
import { baseApi } from '../../common/config'
import {
  AppRegistry,
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

export default class Zane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            isCheckAll:true,
            refreshing:false,            
        }
    }

    // 底部
    renderFooter(){
        return (
            <View style={styles.footer} >
                <View style={styles.footer_left} >
                    {
                        this.state.isCheckAll?
                        <Image 
                            source={require('./img/yes.png')} 
                            style={{width: 20, height: 20}}/>
                        :
                        <Image 
                            source={require('./img/no.png')} 
                            style={{width: 22, height: 22}}/>   
                    }
                    <Text style={styles.checkAll}>全选</Text>    
                </View>
                <Text style={styles.totalPrice}>合计:¥143.56</Text>  
                <View style={styles.footer_right} >  
                    <Text style={styles.submit}>提交</Text>   
                </View>
            </View> 
        )
    }

    render() {
        return (
            <View style={styles.container}>
            {
                this.state.isShow ?
                <View style={styles.flex}>
                    <View style={styles.bottomBottm}>
                        <Text style={ styles.title }>购物车(5)</Text>
                        <Text style={ styles.edit }>编辑</Text>
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
                            <Text style={styles.checkAll}>全选</Text>    
                        </ScrollView>
                    </View>
                    { this.renderFooter() }
                </View>
                :
                <Loading />
            } 
            </View>
        );
    }

    _onRefresh(){

    }

    onPressLearnMore(){
        alert('alert')
    }

    componentDidMount() {
        
    }

    getAllBigcategory(){
        util.ajax(baseApi+'native/category/getAllBigcategory',  (data)=> {
            if (data.code === 1000) {
                if(data.data&&data.data.length){
                    this.setState({
                        bannerImg:data.data[0].banner1,
                        leftData: data.data
                    });
                }else{
                    this.setState({ isShow: true });
                }
            }
        }) 
    }
}

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
    edit:{
        position:'absolute',
        right:10,
        top:20,
        fontSize:14,
        backgroundColor:'#868FD4',
        color:'#fff'
    },
    main:{
        height:util.size.height-170,
    },



    footer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:50,
        backgroundColor:'#fff',
        borderTopColor:'#ddd',
        borderTopWidth:util.pixel,
        borderStyle:'solid',

    },
    footer_left:{
        flexDirection: 'row',
        alignItems:'center',
        marginLeft:10,
    },
    checkAll:{
        fontSize:16,
    },
    totalPrice:{
        color:'red',
        fontSize:14,
    },
    footer_right:{
        width:100,
        height:50,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
    },
    submit:{
        color:'#fff',
        fontSize:16,
        textAlign:'center',
    },

});


