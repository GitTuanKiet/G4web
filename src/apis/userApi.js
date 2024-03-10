import { axiosPrivate } from 'apis/axiosConfig'
class UserApi {
  static instance = axiosPrivate()
  constructor(accessToken) {
    if (!accessToken) throw new Error('Bạn cần phải đăng nhập')
    if (!this.instance)
      this.instance = axiosPrivate(accessToken)
  }

  updateProfile = async (data) => await this.instance.put('user/update-profile', data)
  changePassword = async (password) => await this.instance.put('user/change-password', password)
  uploadAvatar = async (avatar) => await this.instance.post('user/avatar', avatar)
  setupPIN = async (pin) => await this.instance.put('user/setup-pin', pin)
  getHistory = async () => await this.instance.get('user/history')
  getCards = async () => await this.instance.get('user/fetch-card')
}

export default UserApi