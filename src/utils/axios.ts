import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://tea-shop-project.herokuapp.com/api',
})
