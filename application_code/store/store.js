import { createStore,applyMiddleware } from 'redux';
import allAppReducers from './reducers';
import thunkMiddleware from 'redux-thunk';
const store = createStore(allAppReducers, applyMiddleware(
        thunkMiddleware
    ));
export default store;