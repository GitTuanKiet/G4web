import { axiosPrivate, axiosMultipart } from 'apis/axiosConfig'

class UserApi {
  static updateProfile = async (data) => {
    return await axiosPrivate.put('user/update-profile', data)
  }

  static changePassword = async (data) => {
    return await axiosPrivate.put('user/change-password', data)
  }

  static uploadAvatar = async (data) => {
    return await axiosMultipart.post('user/avatar', data)
  }

  static setupPIN = async (data) => {
    return await axiosPrivate.put('user/setup-pin', data)
  }

  static getHistory = async () => {
    return await axiosPrivate.get('user/history')
  }

  static getCards = async () => {
    return await axiosPrivate.get('user/fetch-card')
  }
}

export default UserApi