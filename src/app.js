import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/reducers'
import Main from './main'

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render (){
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }

}

