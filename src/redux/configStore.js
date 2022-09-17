

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { QuanLyReducer } from './reducer/QuanLyReducer';
import reduxThunk from 'redux-thunk'
import { QuanLyZodiac } from './reducer/QuanLyZodiac';
import { ConsultantsReducer } from './reducer/ConsultantsReducer';

const rootReducer = combineReducers({
    QuanLyReducer,
    QuanLyZodiac,
    ConsultantsReducer,
})

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);

export const store = createStore(rootReducer, composeCustom);