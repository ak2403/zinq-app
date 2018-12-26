import * as settingsTypes from '../types/settings_types'
import * as postAPI from '../../api/postAPI'
import * as getAPI from '../../api/getAPI'

export const getUser = userID => {
    return async dispatch => {
        let getResponse = await getAPI.getUser(userID)
        if(getResponse.status === 200){
            dispatch({
                type: settingsTypes.UPDATE_USER,
                payload: getResponse.data
            })
        }else{
            debugger
            // dispatch({
            //     type: authTypes.SIGNUP_ERROR,
            //     payload: getResponse.data
            // })
        }
    }
}