import { createStore , applyMiddleware , combineReducers,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import home from './home'
import cart from './cart'

const reducer = combineReducers({
    home,
    cart
});

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

export default store

