import axios from 'axios'

const $axios = axios.create({
    withCredentials: true,
    baseURL: '/api'
})

export default $axios