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
            isShow: true,
            refreshing: false,
            leftData:[],
            rightData:[],
            activeIndex:0
        }
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
                    <View style={[styles.flex, styles.main]} >
                        
                    </View>
                </View>
                :
                <Loading />
            } 
            </View>
        );
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

    
});