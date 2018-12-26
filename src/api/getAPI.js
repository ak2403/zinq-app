import axios from 'axios'
import * as config from './config'

export const getUser = userID => {
    return axios.get(`${config.API_URL}/users/${userID}`)
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