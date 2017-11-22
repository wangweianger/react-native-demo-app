import React, { Component } from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';
import util from '../../../common/util'


export default class Entrys extends Component {
    constructor() {
        super();
        this.state = {
            datas:{
                icon:'https://img.allpyra.com/5e5ee553-def2-4659-8225-38d5f87d8c62.png?imageslim',
                title:'美女精选'
            },
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.head} >
                    {this.state.datas.title}
                </Text>  
                <Image
                    source={{uri: this.state.datas.icon}} 
                    style={{width: util.size.width, height: 200}}/>
            </View>
        )
    }
   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        marginTop:8,
    },
    head:{
        fontSize:14,
        color:'#333',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        fontWeight:'bold'
    },
    item:{
        
    },
   
});

