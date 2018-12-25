import * as authTypes from '../types/authentication_types'
import * as postAPI from '../../api/postAPI'
import * as config from '../../api/config'

export const onSignup = data => {
    return async dispatch => {
        let getResponse = await postAPI.onSignup(data)
        if(getResponse.status === 200){
            dispatch({
                type: authTypes.ADDED_USER,
                response: getResponse
            })
        }else{

        }
    }
}

export const onLogin = data => {
    return async dispatch => {
        let getResponse = await postAPI.onLogin(data)
        if(getResponse.status === 200){
            let user_data = await config.retrieveToken(getResponse.data.token)
            dispatch({
                type: authTypes.LOGIN_USER,
                payload: user_data
            })
        }else{
            dispatch({
                type: authTypes.LOGIN_ERROR,
                payload: getResponse.data
            })
        }
    }
}

export const onLogout = () => {
    localStorage.removeItem('authToken')
    return {
        type: authTypes.LOGOUT
    }
}

export const resetSettings = () => {
    return {
        type: authTypes.RESET_SETTINGS
    }
}