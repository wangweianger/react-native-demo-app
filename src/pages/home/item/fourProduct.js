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
    constructor(props) {
        super(props);
        this.state = {
            datas:props.datas?props.datas:[]
        }
    }

    render() {
        let items = []
        this.state.datas.forEach((item,index)=>{
            items.push(
                <View key={index} style={styles.items}>
                    <Image
                        source={{uri: item.pLogo}} 
                        style={styles.itemimg}/> 
                    <View>      
                        <Text
                            style={styles.title} >
                            {item.pName}
                        </Text>
                        <Text
                            style={styles.price} >
                            ￥{item.actPrice.toFixed(2)}
                        </Text>
                    </View>          
                </View>
            )
        })

        return (
            <View style={styles.container}>
                {items}  
            </View>
        )
    }
   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        marginTop:8,
        flexDirection: 'row',
        flexWrap:'wrap',
        padding:5,
        position:'relative',
    },
    items:{
        width:util.size.width/2-10,
        justifyContent:'center',
        flexDirection: 'row',
    },
    itemimg:{
        width:80,
        height:80
    },
    title:{
        fontSize:12,
        color:'#333',
        marginTop:15,
        paddingBottom:10,
        paddingLeft:10,
        width:100,
        height:30,
    },
    price:{
        fontSize:12,
        color:'red',
        marginTop:8
    },
});

