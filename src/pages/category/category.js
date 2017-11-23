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
  TouchableOpacity
} from 'react-native';

import Loading from '../../components/loading'

export default class Zane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            refreshing: false,
            leftData:[],
            rightData:[]
        }
    }

    renderLeft(){
        let items=[]
        this.state.leftData.forEach((item,index)=>{
            items.push(
                <View key={index} style={styles.item}>
                    <TouchableOpacity onPress={this._onPressButton.bind(this)}>
                        <Text style={{ fontSize:16,textAlign:'center' }}> {item.categName} </Text>
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

    _onPressButton(){
        alert('Button has been pressed!');
    }

    renderRight(){
        return (
            <View>
                <Text> Left00 </Text>
            </View>
        )
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
        this._fetchData();
    }

    _fetchData(){
        util.ajax(baseApi+'native/category/getAllBigcategory',  (data)=> {
            if (data.code === 1000) {
                this.setState({
                    isShow: true,
                    leftData: data.data&&data.data.length?data.data:[],
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
});

