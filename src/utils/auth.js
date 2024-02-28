import Cookies from 'js-cookie'
import { CONSTANT } from './constant'
const access_token = 'CGV_access_token'
const refresh_token = 'CGV_refresh_token'

export const objCookie = {
  expires: 30,
  domain: CONSTANT.domain
}

const saveToken = (accessToken, refreshToken) => {
  if (accessToken) {
    Cookies.set(access_token, accessToken, objCookie)
    if (refreshToken)
      Cookies.set(refresh_token, refreshToken, objCookie)
  } else {
    Cookies.remove(access_token)
    Cookies.remove(refresh_token)
  }
}

const getToken = () => Cookies.get(access_token)
const getRefreshToken = () => Cookies.get(refresh_token)

const logout = () => {
  const rm_access_token = getToken()
  if (rm_access_token) {
    Cookies.remove(access_token, {
      ...objCookie,
      path: '/',
      domain: CONSTANT.domain
    })
    Cookies.remove(refresh_token, {
      ...objCookie,
      path: '/',
      domain: CONSTANT.domain
    })
  }
}

export { saveToken, getToken, getRefreshToken, logout }
