import React, { Component } from 'react';
import util from '../../../common/util'
import { LazyloadImage } from 'react-native-lazyload';
import { 
    StyleSheet,
    View,
    Text,
    Image 
} from 'react-native';

export default class Entrys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:props.datas?props.datas:[],
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.head} >
                    {this.state.datas[0].activityName}
                </Text>  
                <LazyloadImage
                    host="scroll"
                    source={{uri: this.state.datas[0].bannerImg}} 
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

