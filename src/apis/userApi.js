import { axiosPrivate } from 'apis/axiosConfig'
import { toast } from 'react-toastify'
class UserApi {
  static instance = axiosPrivate()
  constructor(accessToken) {
    if (!accessToken) {
      toast.error('Bạn chưa đăng nhập')
      return
    }
    if (!this.instance)
      this.instance = axiosPrivate(accessToken)
  }

  updateProfile = async (data) => await this.instance.put('user/update-profile', data)
  changePassword = async (password) => await this.instance.put('user/change-password', password)
  uploadAvatar = async (avatar) => await this.instance.post('user/avatar', avatar)
  setupPIN = async (pin) => await this.instance.put('user/setup-pin', pin)
  getHistory = async () => await this.instance.get('user/history')
  getCards = async () => await this.instance.get('user/fetch-card')
  getMemberCard = async () => await this.instance.get('user/get-member-card')
  registerMemberCard = async (data) => await this.instance.post('user/register-member-card', data)
  lostMemberCard = async () => await this.instance.delete('user/lost-member-card')
}

export default UserApi