import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddlware from 'redux-promise-middleware'
import reducer from './reducer'

const rootReducer = combineReducers({
    reducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddlware))