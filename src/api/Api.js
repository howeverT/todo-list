import axios from 'axios'
import store from '../redux/store'
const API = 'https://5e9ec500fb467500166c4658.mockapi.io/todos'

const todoAPI = axios.create({
    baseURL: API
})

todoAPI.interceptors.request.use(req =>{
    store.dispatch({ type: 'LOADING' });
    return req
}, error => error)

todoAPI.interceptors.response.use(req =>{
    store.dispatch({ type: 'LOADINGEND' });
    return req
}, error => error)

export default todoAPI


