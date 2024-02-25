import Cookies from 'js-cookie'
import { CONSTANT } from './constant'
const access_token = 'CGV_access_token'

export const objCookie = {
  expires: 30,
  domain: CONSTANT.domain
}

const saveToken = (accessToken) => {
  if (accessToken) {
    console.log('🚀 ~ saveToken ~ accessToken:', accessToken)
    Cookies.set(access_token, accessToken, objCookie)
  } else {
    console.log('cookie not found')
    Cookies.remove(access_token)
  }
}

const getToken = () => Cookies.get(access_token)

const logout = () => {
  const rm_access_token = getToken()
  if (rm_access_token) {
    Cookies.remove(access_token, {
      ...objCookie,
      path: '/',
      domain: CONSTANT.domain
    })
    // Cookies.remove(refreshToken, {
    //     ...objCookie,
    //     path: '/',
    //     domain: CONSTANT.domain
    // });
  }
}

export { saveToken, getToken, logout }
