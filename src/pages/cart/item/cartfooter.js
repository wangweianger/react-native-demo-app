import React, { Component } from 'react';
import util from '../../../common/util'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

export default class Cartfooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckAll:props.isCheckAll,
        }
    }

    render() {
        return (
            <View style={styles.footer} >
                <View>
                    <TouchableOpacity style={styles.footer_left} onPress={this._checkItem.bind(this)}>
                    {
                        this.state.isCheckAll?
                        <Image 
                            source={require('../img/yes.png')} 
                            style={{width: 20, height: 20}}/>
                        :
                        <Image 
                            source={require('../img/no.png')} 
                            style={{width: 20, height: 20}}/>   
                    }
                    <Text style={styles.checkAll}>全选</Text>
                    </TouchableOpacity>   
                </View>
                <Text style={styles.totalPrice}>合计:¥{this.props.totalPrice.toFixed(2)}</Text>  
                <View style={styles.footer_right} >  
                    <Text style={styles.submit}>提交</Text>   
                </View>
            </View> 
        );
    }

    _checkItem(){
        let isCheckedAll = !this.state.isCheckAll
        this.setState({ isCheckAll:isCheckedAll })
        this.props.handleIsCheckAll(isCheckedAll)
    }
}

const styles = StyleSheet.create({
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
        marginLeft:15,
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


