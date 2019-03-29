import { createStore, combineReducers } from 'redux'

import login from './reducers/login'

const combinedReducer = combineReducers({ login })
const store = createStore(combinedReducer)

export default store
