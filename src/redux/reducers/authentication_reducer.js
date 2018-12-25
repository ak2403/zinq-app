import * as authTypes from '../types/authentication_types'

let initialState = {
    is_user_signed: false,
    is_user_logged: false,
    is_login_error: false,
    login_error: '',
    is_signup_error: false,
    signup_error: '',
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

        case authTypes.LOGIN_ERROR:
            return Object.assign({}, state, {
                is_login_error: true,
                login_error: action.payload
            })

        case authTypes.SIGNUP_ERROR:
            return Object.assign({}, state, {
                is_signup_error: true,
                signup_error: action.payload
            })

        case authTypes.RESET_SETTINGS:
            return Object.assign({}, state, {
                is_user_signed: false
            })

        default:
            return state
    }
}