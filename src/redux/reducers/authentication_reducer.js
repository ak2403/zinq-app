import * as authTypes from '../types/authentication_types'

let initialState = {
    is_user_signed: false,
    is_user_logged: false,
    user: ''
}

export default function AuthenticationReducer(state = initialState, action) {
    switch (action.type) {
        case authTypes.ADDED_USER:
            return Object.assign({}, state, {
                is_user_signed: true
            })

        case authTypes.LOGIN_USER:
            return Object.assign({}, state, {
                is_user_logged: true,
                user: action.payload.data
            })

        case authTypes.LOGOUT:
            return Object.assign({}, state, {
                is_user_signed: false,
                is_user_logged: false,
                user: ''
            })

        case authTypes.RESET_SETTINGS:
            return Object.assign({}, state, {
                is_user_signed: false
            })

        default:
            return state
    }
}