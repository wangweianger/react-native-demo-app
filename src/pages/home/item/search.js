import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    AlertIOS,
    Image
} from 'react-native';
/*第三方组件*/

//公共组件
import Uitls from '../../../common/util';
//list组件
import List from '../list';

//搜索组件
export default class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigator: props.navigator
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={require('../img/msg.png')}/>
                <TextInput
                    style={styles.search_input}
                    placeholder="搜索"
                    onSubmitEditing={(event) => {
                        this._search(event.nativeEvent.text);
                    }}
                    placeholderTextColor="#aaa"/>
            </View>
        );
    }

    //数据搜索
    _search(text) {
        //判断数据是否为空
        if (!text) {
            AlertIOS.alert('提示', '你尚未输入搜索的信息');
            return;
        }
        let url = 'http://123.57.39.116:3000/data/read?type=it';
        //路由跳转
        this.state.navigator.push({
            component: List,
            barTintColor: "#fff",
            title: "搜索",
            passProps: {url: url}//路由传递数据
        });
    }

}

//样式表
const styles = StyleSheet.create({
    search_input: {
        height: 35,
        borderWidth: Uitls.pixel,
        borderColor: "#EEE",
        borderRadius: 3,
        fontSize: 15,
        width: Uitls.size.width - 60,
        marginTop:8,
        paddingLeft:13,
    },
    container: {
        height:50,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
        justifyContent:"flex-start",
        alignItems:"center",
        display:"flex",
        flexDirection: "row",
        backgroundColor:"#fff", 
        borderBottomColor:"#ddd",
        borderBottomWidth:1 * Uitls.pixel,
        borderStyle:'solid'
    },
    icon:{
        width:28,
        height:28,
        marginRight:10,
    }
});

