import * as dashboardTypes from '../types/dashboard_types'

let initialState = {
    current_page: 'select',
    type: '',
    income: {},
    property: {}
}

export default function DashboardReducer(state = initialState, action) {
    switch (action.type) {
        case dashboardTypes.UPDATE_CURRENT:
            return Object.assign({}, state, {

            })

        case dashboardTypes.UPDATE_TYPE:
            return Object.assign({}, state, {
                type: action.payload,
                current_page: 'income'
            })

        case dashboardTypes.UPDATE_INCOME:
            return Object.assign({}, state, {
                income: action.payload,
                current_page: 'property'
            })

        case dashboardTypes.UPDATE_PROPERTY:
            return Object.assign({}, state, {
                property: action.payload,
                current_page: 'success'
            })

        case dashboardTypes.TOGGLE_PAGE:
            return Object.assign({}, state, {
                current_page: action.payload
            })

        default:
            return state
    }
}