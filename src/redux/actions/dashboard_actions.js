import * as dashboardTypes from '../types/dashboard_types'

export const selectType = data => {
    return {
        type: dashboardTypes.UPDATE_TYPE,
        payload: data
    }
}

export const submitIncome = data => {
    return {
        type: dashboardTypes.UPDATE_INCOME,
        payload: data
    }
}

export const submitProperty = data => {
    return {
        type: dashboardTypes.UPDATE_PROPERTY,
        payload: data
    }
}

export const goback = data =>{
    return {
        type: dashboardTypes.TOGGLE_PAGE,
        payload: data
    }
}