import * as request from './requester';


const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3030'
    : 'http://localhost:3031'; // TODO: Add server url when deployed
const url = `${baseUrl}/users`;

export const login = (data) => request.post(`${url}/login`, data)

export const register = (data) => request.post(`${url}/register`, data)

export const logout = () => request.get(`${url}/logout`)
