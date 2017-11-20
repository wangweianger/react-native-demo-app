import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';
import { FOOTER_ICON } from './common/config'

//所依赖的模块组件
import Home from './pages/home/home';
import Category from './pages/category/category';
import ShpoingCart from './pages/cart/shopingCart';
import UserCenter from './pages/user/userCenter';

export default class Main extends Component {

    //构造器
    constructor() {
        super();
        this.state = {
            selectedTab: 'homeTab',
            totalCart:5,
        }
    }

    //私有方法
    _renderContent(moduleName) {
        let view = <Home/>;
        switch (moduleName) {
            case 'homeTab':
                view = <Home/>;
                break;
            case 'categoryTab':
                view = <Category/>;
                break;
            case 'cartTab':
                view = <ShpoingCart/>;
                break;
            case 'userTab':
                view = <UserCenter/>;
                break;
            default :
                view = <Home/>;
                break;
        }
        return view;
    }

    //试图渲染
    render() {
        return (
            <TabBarIOS
                unselectedTintColor="#999"
                barTintColor="#fff"
                tintColor="red"
                >
                <TabBarIOS.Item
                    title="首页"
                    icon={{uri: FOOTER_ICON.HOME, scale: 2}}
                    selected={this.state.selectedTab === 'homeTab'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'homeTab'
                        });
                    }}>
                    {this._renderContent('homeTab')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="分类"
                    icon={{uri: FOOTER_ICON.CATEGORY, scale: 2}}
                    selected={this.state.selectedTab === 'categoryTab'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'categoryTab'
                        });
                    }}>
                    {this._renderContent('categoryTab')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="购物车"
                    icon={{uri: FOOTER_ICON.CART, scale: 2}}
                    selected={this.state.selectedTab === 'cartTab'}
                    badge={this.state.totalCart}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'cartTab'
                        });
                    }}>
                    {this._renderContent('cartTab')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="我的"
                    icon={{uri: FOOTER_ICON.USER, scale: 2}}
                    selected={this.state.selectedTab === 'userTab'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'userTab'
                        });
                    }}>
                    {this._renderContent('userTab')}
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

