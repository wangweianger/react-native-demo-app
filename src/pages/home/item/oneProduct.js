import React, { Component } from 'react';
import util from '../../../common/util'
import { 
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert 
} from 'react-native';

export default class Entrys extends Component {
    constructor() {
        super();
        this.state = {
            datas:{
                icon:'https://img.allpyra.com/46151b2b-a054-430b-b747-22b8f67d9ed0.jpg?imageslim',
                title:'Michael Kors迈克·科尔斯 MK女士M系列大号格纹手提斜跨包 30F7SZ4T3U 黑色',
                price:2999
            },
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: this.state.datas.icon}} 
                    style={{width: 100, height: 100}}/>
                <View>    
                    <Text
                        style={styles.title} >
                        {this.state.datas.title}
                    </Text> 
                    <Text
                        style={styles.price} >
                        ￥{this.state.datas.price.toFixed(2)}
                    </Text> 
                </View> 
                <TouchableOpacity onPress={this._onPressButton.bind(this)}>
                    <View
                        style={styles.cart} >
                        <Image
                            style={{width:20,height:20}}
                            source={require('../img/cart.png')}/>
                    </View> 
                </TouchableOpacity>   
            </View>
        )
    }

    _onPressButton(){
        Alert.alert('Button has been pressed!');
    }
   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        marginTop:8,
        flexDirection: 'row',
        padding:5,
        position:'relative'
    },
    title:{
        fontSize:14,
        color:'#333',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        width:util.size.width-120,
    },
    price:{
        fontSize:14,
        color:'red',
    },
    cart:{
        position:'absolute',
        right:10,
        bottom:10,
        width:40,
        height:40,
        backgroundColor:'#FF9B50',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    }
   
});

