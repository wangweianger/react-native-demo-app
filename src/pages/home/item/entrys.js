import React, { Component } from 'react';
import util from '../../../common/util'
import { 
    StyleSheet,
    View,
    Alert,
    Text,
    Image,
    TouchableOpacity 
} from 'react-native';



export default class Entrys extends Component {
    constructor() {
        super();
        this.state = {
            entrys:[
                {
                    icon:'https://img.allpyra.com/e79f9356-bb52-4364-8da2-3c1a9f4538a4.png?imageslim',
                    title:'母婴儿童'
                },
                {
                    icon:'https://img.allpyra.com/9754935c-930f-447a-8236-df8ba5657a2a.png?imageslim',
                    title:'美容彩状'
                },
                {
                    icon:'https://img.allpyra.com/338ef392-df5a-4f63-9d0c-527d781f1c16.png?imageslim',
                    title:'环球美食'
                },
                {
                    icon:'https://img.allpyra.com/3eb128d5-5904-4f4b-82a1-946b31848bde.png?imageslim',
                    title:'阿福到家'
                },
            ]
        }
    }

    render() {
        let items = []
        this.state.entrys.forEach((item,index)=>{
            items.push(
                <View key={index} style={styles.item}>
                    <TouchableOpacity onPress={this._onPressButton.bind(this)}>
                        <Image
                            source={{uri:item.icon}} 
                            style={{width:50 , height:50}}/>
                        <Text
                            style={{fontSize:10,marginTop:5,color:'#333'}} >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                </View>)
        })

        return (
            <View style={styles.container}>
                {items}
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-around',
        alignItems:'center',
        paddingTop:5,
        paddingBottom:10,
        backgroundColor:'#fff'
    },
    item:{
        alignItems:'center', 
        width:util.size.width/4,
        paddingTop:10,
    },
   
});

