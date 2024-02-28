import { axiosPrivate } from 'apis/axiosConfig'

class UserApi {
  static updateProfile = async (data) => {
    return await axiosPrivate.put('user/update-profile', data)
  }

  static changePassword = async (data) => {
    return await axiosPrivate.put('user/change-password', data)
  }
}

export default UserApi