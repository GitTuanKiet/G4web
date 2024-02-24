import { axiosPublic } from 'apis/axiosConfig'
class AuthService {
  static register = async (data) => {
    // eslint-disable-next-line no-useless-catch
    // try {
      return await axiosPublic.post('auth/register', data)
    // } catch (error) {
    //   console.log('🚀 ~ AuthService ~ register= ~ error:', error)
    // }
  }

  static login = async (data) => {
    try {
      return axiosPublic.post('auth/login', data)
    } catch (error) {
      console.log('🚀 ~ AuthService ~ login= ~ error:', error)
    }
  }
}

export default AuthService
