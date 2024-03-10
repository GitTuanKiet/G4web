import axios from 'axios'
import { CONSTANT } from 'utils/constant'

const axiosPublic = () => axios.create({
  baseURL: CONSTANT.baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const axiosPrivate = (accessToken) => axios.create({
  baseURL: CONSTANT.baseURL,
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
})

export { axiosPublic, axiosPrivate }
