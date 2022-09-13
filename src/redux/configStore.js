

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { QuanLyReducer } from './reducer/QuanLyReducer';
import reduxThunk from 'redux-thunk'
import { QuanLyZodiac } from './reducer/QuanLyZodiac';

const rootReducer = combineReducers({
    QuanLyReducer,
    QuanLyZodiac,
})

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, composeCustom);