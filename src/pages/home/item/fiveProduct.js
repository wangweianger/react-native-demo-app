import React, { Component } from 'react';
import util from '../../../common/util'
import { LazyloadView , LazyloadImage } from 'react-native-lazyload';
import { 
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Entrys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgMsg:props.bigImg?props.bigImg:{},
            datas:props.datas?props.datas:[]
        }
    }

    render() {
        let items = []
        this.state.datas.forEach((item,index)=>{
            items.push(
                <LazyloadView host="scroll" key={index} style={styles.items}>
                    <LazyloadImage
                        host="scroll"
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
                </LazyloadView>
            )
            
        })

        return (
            <View style={styles.container}>
                <LazyloadImage
                    host="scroll"
                    source={{uri: this.state.imgMsg.bannerImg}} 
                    style={styles.bigImg}/> 
                <View style={styles.main}>
                    {items} 
                </View> 
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
    },
    bigImg:{
        width:120,
        height:250
    },
    main:{
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        width:util.size.width-120,
        overflow:'hidden'
    },
    items:{
        width:(util.size.width-120)/2,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    itemimg:{
        width:80,
        height:80
    },
    title:{
        fontSize:12,
        color:'#333',
        width:(util.size.width-120)/2-30,
        height:20,
        lineHeight:20
    },
    price:{
        fontSize:12,
        color:'red',
        textAlign:'center'
    },
});

