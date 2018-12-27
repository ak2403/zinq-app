import * as settingsTypes from '../types/settings_types'

let initialState = {
    user_data: { _id: '' },
    is_user_updated: false
}

export default function SettingsReducer(state = initialState, action) {
    switch (action.type) {
        case settingsTypes.UPDATE_USER:
            return Object.assign({}, state, {
                user_data: action.payload
            })

        case settingsTypes.CHANGE_DETAILS:
            return Object.assign({}, state, {
                user_data: action.payload,
                is_user_updated: true
            })

        case settingsTypes.RESET_SETTINGS:
            return Object.assign({}, state, {
                is_user_updated: false
            })

        default:
            return state
    }
}