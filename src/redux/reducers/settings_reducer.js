import * as settingsTypes from '../types/settings_types'

let initialState = {
    user_data: {_id: ''}
}

export default function SettingsReducer(state = initialState, action) {
    switch (action.type) {
        case settingsTypes.UPDATE_USER:
            return Object.assign({}, state, {
                user_data: action.payload
            })

        default:
            return state
    }
}