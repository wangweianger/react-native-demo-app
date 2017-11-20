import React, { Component } from 'react';
import util from '../../../common/util'
import { 
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView 
} from 'react-native';

export default class MoreGoods extends Component {
    constructor() {
        super();
        this.state = {
            datas:[
                {
                    icon:'https://img.allpyra.com/10ec4447-d7b3-4a05-85a0-aa2e12b26c41.jpg?imageslim',
                    desc:'Olay法国巴黎进口',
                    price:'199.00'
                },{
                    icon:'https://img.allpyra.com/10ec4447-d7b3-4a05-85a0-aa2e12b26c41.jpg?imageslim',
                    desc:'Olay法国巴黎进口',
                    price:'199.00'
                },{
                    icon:'https://img.allpyra.com/10ec4447-d7b3-4a05-85a0-aa2e12b26c41.jpg?imageslim',
                    desc:'Olay法国巴黎进口',
                    price:'199.00'
                },{
                    icon:'https://img.allpyra.com/10ec4447-d7b3-4a05-85a0-aa2e12b26c41.jpg?imageslim',
                    desc:'Olay法国巴黎进口',
                    price:'199.00'
                },{
                    icon:'https://img.allpyra.com/10ec4447-d7b3-4a05-85a0-aa2e12b26c41.jpg?imageslim',
                    desc:'Olay法国巴黎进口',
                    price:'199.00'
                },{
                    icon:'https://img.allpyra.com/10ec4447-d7b3-4a05-85a0-aa2e12b26c41.jpg?imageslim',
                    desc:'Olay法国巴黎进口',
                    price:'199.00'
                }
            ]
        }
    }

    render() {
        let items = []
        this.state.datas.forEach((item,index)=>{
            items.push(
                <View key={index} style={styles.scrollitem}>
                    <Image
                        source={{uri: item.icon}} 
                        style={{width: util.size.width/3, height: 150}}/>
                    <Text style={styles.desc} >
                        {item.desc}
                    </Text> 
                    <Text style={styles.title} >
                        ￥{item.price}
                    </Text>  
                </View>
            )
        })

        return (
            <View style={styles.container} >
                <ScrollView horizontal={true} style={styles.main}>
                    {items} 
                </ScrollView>
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
    main: {
        flex: 1,
        backgroundColor:'#fff',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        paddingTop:10,
        paddingBottom:10,

    },
    scrollitem:{
        width:util.size.width/3+30,
        justifyContent:'center',
        alignItems:'center',
    },
    desc:{
        fontSize:10,
        color:'#aaa',
    },
    title:{
        marginTop:5,
        fontSize:16,
        color:'red',
    }
});

