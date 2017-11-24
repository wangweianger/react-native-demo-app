import React, { Component } from 'react';
import util from '../../common/util'
import { baseApi } from '../../common/config'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';

import Loading from '../../components/loading'

export default class Zane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            refreshing: false,
            leftData:[],
            rightData:[],
            activeIndex:0
        }
    }

    renderLeft(){
        let items=[]
        this.state.leftData.forEach((item,index)=>{
            items.push(
                <View key={index} style={styles.item}>
                    <TouchableOpacity onPress={this._onPressButton.bind(this,index)}>
                        <Text 
                            style={[this.state.activeIndex===index&&styles.active,{ fontSize:16,textAlign:'center' }]}> 
                            {item.categName} 
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        })
        return (
            <View style={{ flex:1 }}>
                {items}
            </View>
        )
    }

    _onPressButton(index){
        this.setState({
            activeIndex:index
        })
    }

    renderRight(){
        let items=[]
        this.state.rightData.forEach((item,index)=>{
            items.push(
                <View key={index} style={styles.rightitem}>
                    <TouchableOpacity onPress={this._onPressGoingButton.bind(this,item)}>
                        <Image 
                            source={{uri:item.logourl}} 
                            style={{width: 70, height: 70}}/>
                        <Text style={{ fontSize:12,textAlign:'center' }}> {item.categName} </Text>
                    </TouchableOpacity>
                </View>
            )
        })

        return (
            <View style={styles.rightMain}>
                <Image 
                    source={{uri:this.state.bannerImg}} 
                    style={{width: util.size.width-80, height: 100}}/>
                <View style={styles.rightList}>
                    {items}
                </View>
            </View>
        )
    }

    _onPressGoingButton(item){
        alert(item.scid)
    }

    render() {
        let left    = this.renderLeft()
        let right   = this.renderRight()

        return (
            <View style={styles.container}>
            {
                this.state.isShow ?
                <View style={styles.flex}>
                    <View style={styles.bottomBottm}><Text style={ styles.title }>分类</Text></View>
                    <View style={[styles.flex, styles.main]} >
                        <View style={styles.boxleft}>
                            {left}
                        </View>
                        <View style={styles.boxright}>
                            {right}
                        </View>
                    </View>
                </View>
                :
                <Loading />
            } 
            </View>
        );
    }

    componentDidMount() {
        this.getAllBigcategory();
    }

    getAllBigcategory(){
        util.ajax(baseApi+'native/category/getAllBigcategory',  (data)=> {
            if (data.code === 1000) {
                if(data.data&&data.data.length){
                    this.getOneCategory(data.data[0].cid)
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

    getOneCategory(parentCategId){
        util.ajax(baseApi+`native/category/getOneCategory?parentCategId=${parentCategId}`,  (data)=> {
            if (data.code === 1000) {
                this.setState({
                    isShow: true,
                    rightData:data.data&&data.data.length?data.data:[],
                });
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
    title:{
        backgroundColor:'#fff',
        height:50,
        lineHeight:50,
        fontSize:18,
        textAlign:'center',
        backgroundColor:'#868FD4',
        color:'#fff'
    },
    bottomBottm:{
        borderBottomColor:'#ddd',
        borderBottomWidth:util.pixel,
        borderStyle:'solid',
    },
    main:{
        flexDirection: 'row',
    },
    boxleft:{
        width:60
    },
    boxright:{
        width:util.size.width-60,
        backgroundColor:'#fff'
    },
    item:{
        height:50,
        justifyContent:'center'
    },
    active:{
        color:'red'
    },
    rightMain:{
        flex:1,
        padding:10,
    },
    rightList:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    rightitem:{
        width:(util.size.width-80)/3,
        height:120,
        alignItems:'center',
        justifyContent:'center'
    },
});