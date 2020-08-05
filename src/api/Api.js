import axios from 'axios'
const API = 'https://5e9ec500fb467500166c4658.mockapi.io/todos'

const todoAPI = axios.create({
    baseURL: API
})


export default todoAPI


