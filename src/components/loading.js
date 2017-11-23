import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Image 
} from 'react-native';

export default class Entrys extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    host="scroll"
                    source={require('../common/img/loading.gif')} 
                    style={{width: 180, height: 180}}/>
            </View>
        )
    }
   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems:'center',
        marginTop:150
    },
    
   
});

