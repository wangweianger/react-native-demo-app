import React, { Component } from 'react';
import { StyleSheet,View,Image } from 'react-native';
import util from '../../../common/util'
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    wrapper: {
        height:200,
    },
});

