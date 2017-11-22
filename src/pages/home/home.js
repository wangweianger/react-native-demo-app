import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  View,
  Image
} from 'react-native';
import util from '../../common/util'

import Search from './item/search'
import Swiper from './item/swiper'
import Entrys from './item/entrys'
import BigImg from './item/bigImg'
import MoreGoods from './item/moreGoods'
import OneProduct from './item/oneProduct'
import FourProduct from './item/fourProduct'
import FiveProduct from './item/fiveProduct'

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
                <View style={styles.scrollView}>
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
                    <Swiper />
                    <Entrys />
                    <BigImg />
                    <MoreGoods />
                    <OneProduct />
                    <BigImg />
                    <FourProduct />
                    <BigImg />
                    <FiveProduct />
                </ScrollView>
                </View>
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
        backgroundColor: '#f4f4f4',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    scrollView: {
        flex: 1,
    },
});

