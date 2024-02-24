import axios from 'axios'

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL_API,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { axiosPublic }
