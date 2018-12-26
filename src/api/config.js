import jwt from 'jsonwebtoken'

const getToken = localStorage.getItem('authToken')

export const API_URL = 'https://fierce-springs-38062.herokuapp.com'

export const AuthorizatedHeader = {
    headers: {
        Authorization: `Bearer ${getToken}`
    }
}

export const retrieveToken = (getToken) => {
    AuthorizatedHeader.headers.Authorization = `Bearer ${getToken}`
    localStorage.setItem('authToken', getToken)
    let decodeToken = jwt.decode(getToken)
    return {
        data: decodeToken
    }
}