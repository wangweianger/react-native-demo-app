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
    constructor(props) {
        super(props);
        this.state = {
            entrys:props.datas?props.datas:[]
        }
    }

    render() {
        let items = []
        this.state.entrys.forEach((item,index)=>{
            items.push(
                <View key={index} style={styles.item}>
                    <TouchableOpacity onPress={this._onPressButton.bind(this)}>
                        <Image
                            source={{uri:item.bannerImg}} 
                            style={{width:50 , height:50}}/>
                        <Text
                            style={{fontSize:10,marginTop:5,color:'#333',textAlign:'center'}} >
                            {item.activityName}
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

