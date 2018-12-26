import { combineReducers } from "redux"
import authenticationReducer from './authentication_reducer'
import dashboardReducer from './dashboard_reducer'
import SettingsReducer from './settings_reducer'

export default combineReducers({
    authentication: authenticationReducer,
    dashboard: dashboardReducer,
    settings: SettingsReducer
})