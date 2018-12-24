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
            debugger
        })
}