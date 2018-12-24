import { combineReducers } from "redux"
import authenticationReducer from './authentication_reducer'

export default combineReducers({
    authentication: authenticationReducer
})