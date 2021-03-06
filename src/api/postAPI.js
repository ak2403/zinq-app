import axios from 'axios'
import * as config from './config'

export const onSignup = data => {
    delete data['confirm_password']
    return axios.post(`${config.API_URL}/users/add-user`, data)
        .then(response => {
            return {
                status: 200
            }
        })
        .catch(err => {
            return {
                status: 400,
                data: err.response ? err.response.data.message : 'Network Error'
            }
        })
}

export const onLogin = data => {
    return axios.post(`${config.API_URL}/users/login`, data)
        .then(response => {
            return {
                status: 200,
                data: response.data
            }
        })
        .catch(err => {
            return {
                status: 400,
                data: err.response ? err.response.data.message : 'Network Error'
            }
        })
}

export const onGoogleLogin = data => {
    return axios.post(`${config.API_URL}/users/google_login`, data)
        .then(response => {
            return {
                status: 200,
                data: response.data
            }
        })
        .catch(err => {
            return {
                status: 400,
                data: err.response ? err.response.data.message : 'Network Error'
            }
        })
}

export const editUser = data => {
    const userID = data['_id']
    return axios.post(`${config.API_URL}/users/${userID}`, data)
        .then(response => {
            return {
                status: 200,
                data: response.data
            }
        })
        .catch(err => {
            return {
                status: 400,
                data: err.response ? err.response.data.message : 'Network Error'
            }
        })
}