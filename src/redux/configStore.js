

import { combineReducers, createStore } from 'redux';
import { QuanLyReducer } from './reducer/QuanLyReducer';


const rootReducer = combineReducers({
    QuanLyReducer,
})


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())