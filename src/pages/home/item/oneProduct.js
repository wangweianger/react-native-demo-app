import React, { Component } from 'react';
import util from '../../../common/util'
import { LazyloadView , LazyloadImage } from 'react-native-lazyload';
import { 
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export default class Entrys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:props.datas&&props.datas.length?props.datas[0]:[],
        }
    }

    render() {
        return (
            <LazyloadView host="scroll" style={styles.container}>
                <LazyloadImage
                    host="scroll"
                    source={{uri: this.state.datas.pLogo}} 
                    style={{width: 100, height: 100}}/>
                <View>    
                    <Text
                        style={styles.title} >
                        {this.state.datas.pName}
                    </Text> 
                    <Text
                        style={styles.price} >
                        ￥{this.state.datas.actPrice.toFixed(2)}
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
            </LazyloadView>
        )
    }

    _onPressButton(){
        alert('Button has been pressed!');
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

