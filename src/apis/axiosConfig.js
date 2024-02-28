import axios from 'axios'
import { CONSTANT } from 'utils/constant'
import { getToken } from 'utils/auth'

const axiosPublic = axios.create({
  baseURL: CONSTANT.baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const axiosPrivate = axios.create({
  baseURL: CONSTANT.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`
  }
})

export { axiosPublic, axiosPrivate }
