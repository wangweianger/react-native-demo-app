import React, { Component } from 'react';
import util from '../../../common/util'
import { LazyloadView , LazyloadImage } from 'react-native-lazyload';
import { 
    StyleSheet,
    View,
    Text,
    ScrollView 
} from 'react-native';

export default class MoreGoods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:props.title?props.title:'',
            datas:props.datas?props.datas:[],
        }
    }

    render() {
        let items = []
        this.state.datas.forEach((item,index)=>{
            items.push(
                <LazyloadView host="scroll" key={index} style={styles.scrollitem}>
                    <LazyloadImage
                        host="scroll"
                        source={{uri: item.pLogo}} 
                        style={{width: util.size.width/3, height: 150}}/>
                    <Text style={styles.desc} >
                        {item.pName}
                    </Text> 
                    <Text style={styles.title} >
                        ￥{item.actPrice}
                    </Text>  
                </LazyloadView>
            )
        })

        return (
            <View style={styles.container} >
                <Text
                    style={styles.head} >
                    {this.state.title}
                </Text>  
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
    head:{
        fontSize:14,
        color:'#333',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        fontWeight:'bold'
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

