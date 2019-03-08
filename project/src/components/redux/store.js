import { createStore, applyMiddleware } from 'redux'
import combinedReducers from './reducers/combinedReducers'
import { loadState } from './localstorage/'
import thunk from 'redux-thunk'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

export default applyMiddleware(thunk)(createStore)(combinedReducers, loadState(), devTools)