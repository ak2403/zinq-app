import * as authTypes from '../types/authentication_types'
import * as postAPI from '../../api/postAPI'

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

export const resetSettings = () => {
    return {
        type: authTypes.RESET_SETTINGS
    }
}