import {combineReducers} from 'redux'
import modalReducer from './modalReducer'
import userReducer from './userReducer'

const combinedReducers = combineReducers({
    modal:modalReducer,
    user:userReducer
})

export default combinedReducers;