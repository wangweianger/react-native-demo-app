import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  View,
  Image
} from 'react-native';
import Search from './item/search';
import util from '../../common/util'
import Swiper from 'react-native-swiper';


export default class Home extends Component {
    constructor() {
        super();
        //默认不显示 ScrollView
        this.state = {
            isShow: false,
            refreshing: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Search navigator={this.props.navigator}/>
                <ScrollView
                    style={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            title="数据在加载中..."
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor="#aaa"
                            titleColor="#999"
                            progressBackgroundColor="#ffff00"
                        />
                    }>
                    <Swiper style={styles.wrapper} showsButtons={false} loop={true} autoplay={true} autoplayTimeout={5} showsPagination={true}
                    dotStyle={{marginBottom:-20}} activeDotStyle={{marginBottom:-20}}>
                        <View>
                            <Image
                                source={{uri:'https://img.allpyra.com/9bf51117-ded5-49e4-bb04-3c8c8268a3cd.png?imageslim'}} 
                                style={{width: util.size.width, height: 200}}/>
                        </View>
                        <View>
                            <Image
                                source={{uri:'https://img.allpyra.com/b5faa181-39a9-4ff8-92ea-8ad0e2087118.png?imageslim'}} 
                                style={{width: util.size.width, height: 200}}/>
                        </View>
                        <View>
                            <Image
                                source={{uri:'https://img.allpyra.com/09d76250-98be-4a1f-964b-7d090d8440ef.png?imageslim'}} 
                                style={{width: util.size.width, height: 200}}/>
                        </View>
                    </Swiper>
                    <Text style={styles.welcome}>
                        home!
                    </Text>
                </ScrollView >
            </View>
        );
    }

    //下拉刷新
    _onRefresh() {
        var that = this;
        that.setState({refreshing: true});
        setTimeout(function () {
            that._fetchData();
        }, 3000)

    }

    _fetchData(callback) {
        var that = this;
        var url = "http://123.57.39.116:3000/data/read?type=config";
        util.ajax(url, function (data) {
            if (data.status === 1) {
                let obj = data.data;
                that.setState({
                    isShow: true,
                    recommendTopic: obj.recommendTopic,
                    hotTopic: obj.hotTopic,
                    category: obj.category,
                    other: obj.other,
                    refreshing: false
                });
            } else {
                alert('服务异常,正在紧急修复,请耐心等待1');
            }
        }, function (err) {
            alert('服务异常,正在紧急修复,请耐心等待2');
        })
    }

    //组件加载完毕时候调用 TODO fatch数据
    componentDidMount() {
        // this._fetchData();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    scrollView: {
        flex: 1
    },
    wrapper: {
        height:200,
    },
});

