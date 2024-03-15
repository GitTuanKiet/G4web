import { axiosPublic } from 'apis/axiosConfig'

class AuthApi {
  static instance = axiosPublic()

  static register = async (data) => await this.instance.post('auth/register', data)
  static login = async (data) => await this.instance.post('auth/login', data)
  static verifyEmail = async (verifyToken) => await this.instance.get(`auth/verify-email/${verifyToken}`)
  static resetPassword = async (resetToken) => await this.instance.get(`auth/reset-password/${resetToken}`)
  static refreshToken = async (refreshToken) => await this.instance.get(`auth/refresh-token/${refreshToken}`)
  static forgotPassword = async (email) => await this.instance.post('auth/forgot-password', email)
}

export default AuthApi
