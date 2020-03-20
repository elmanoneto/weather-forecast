import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://api.weatherstack.com/current?access_key=1ac2e6c27f3ccc0c22df00a6f2c0590b&&query=',
})