import axios from 'axios'
import { CONSTANT } from 'utils/constant'
const axiosPublic = axios.create({
  baseURL: CONSTANT.baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { axiosPublic }
