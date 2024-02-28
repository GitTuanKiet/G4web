import { axiosPublic } from 'apis/axiosConfig'

class AuthApi {
  static register = async (data) => {
    return await axiosPublic.post('auth/register', data)
  }

  static login = async (data) => {
    return await axiosPublic.post('auth/login', data)
  }

  static refreshToken = async (data) => {
    return await axiosPublic.post('auth/refresh-token', data)
  }

  static forgotPassword = async (data) => {
    return await axiosPublic.post('auth/forgot-password', data)
  }
}

export default AuthApi