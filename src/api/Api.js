import axios from 'axios'
import store from '../redux/store'
import { LOADING , LOADING_END} from '../constant/Constant'
//const API = 'https://5e9ec500fb467500166c4658.mockapi.io/todos'
const API = 'http://localhost:8081/todoItems'

const todoAPI = axios.create({
    baseURL: API
})

todoAPI.interceptors.request.use(req =>{
    store.dispatch({ type: LOADING });
    return req
}, error => error)

todoAPI.interceptors.response.use(req =>{
    store.dispatch({ type: LOADING_END });
    return req
}, error => error)

export default todoAPI


