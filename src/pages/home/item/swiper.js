import React, { Component } from 'react';
import util from '../../../common/util'
import Swiper from 'react-native-swiper';
import { 
    StyleSheet,
    View,
    Image 
} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            refreshing: false,
            datas:props.datas?props.datas:[]
        }
    }

    render() {
        let items = []
        this.state.datas.forEach((item,index)=>{
            items.push(
                <View key={index}>
                    <Image
                        source={{uri:item.bannerImg}} 
                        style={{width: util.size.width, height: 200}}/>
                </View>
            )
        })

        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} showsButtons={false} loop={true} autoplay={true} autoplayTimeout={5} showsPagination={true}
                dotStyle={{marginBottom:-20}} activeDotStyle={{marginBottom:-20}}>
                    {items}
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

