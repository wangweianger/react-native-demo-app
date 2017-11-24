import React, { Component } from 'react';
import util from '../common/util'
import { 
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Hr extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <Text style={styles.hr}></Text>
            </View>
        )
    }
}

//样式表
const styles = StyleSheet.create({
    hr: {
        borderColor: "#EEE",
        borderWidth: util.pixel,
        height: util.pixel
    }
});
