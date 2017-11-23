import React, { Component } from 'react';
import { 
    View,
    StatusBar,
    Platform 
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default class MyStatusBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[{height: STATUSBAR_HEIGHT}, { backgroundColor:this.props.backgroundColor }]}>
                <StatusBar translucent {...this.props} />
            </View>
        )
    }
}


