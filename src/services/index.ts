import axios from 'axios'
import { exceptionHandler } from '../core'
import { APP_CONFIGS } from '../utilities/constants'

axios.defaults.baseURL = APP_CONFIGS.API_BASE
//axios.defaults.baseURL = APP_CONFIGS.API_BASEP

export const axiosPublicInstance = axios.create()
export const axiosPrivateInstance = axios.create()

const API_BASE_URL = 'http://localhost:5000'; // Update with your Flask API URL

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to manage authorization & headers
axiosPrivateInstance.interceptors.request.use(async (request) => {
  // const token = await Auth.currentSession()
  // if (token !== undefined) {
  //   // @ts-ignore
  //   request.headers.Authorization = `Bearer ${token.idToken.jwtToken}`
  // }
  return request
}, (error) => {
  console.log('Req interceptor Error', error)
})

// Response interceptor to manage responses & errors
axiosPrivateInstance.interceptors.response.use(async (response) => {
  return response
}, async (error) => {
  return Promise.reject(await exceptionHandler(error.response))
})

axiosPublicInstance.interceptors.response.use(async (response) => {
  return response
}, async (error) => {
  return Promise.reject(await exceptionHandler(error.response))
})

export * from './registration.service'
export * from './login.service'
export * from './prediction.service'

