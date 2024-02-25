import { axiosPublic } from 'apis/axiosConfig'

class AuthApi {
  static register = async (data) => {
    return await axiosPublic.post('auth/register', data)
  }

  static login = async (data) => {
    return axiosPublic.post('auth/login', data)
  }
}

export default AuthApi