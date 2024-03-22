import Cookies from 'js-cookie'
import { CONSTANT } from '../utils/constant'

const access_token = 'CGV_access_token'
const refresh_token = 'CGV_refresh_token'

export const objCookie = {
  expires: 30,
  domain: CONSTANT.domain
}

const saveToken = (accessToken, refreshToken) => {
  if (accessToken) Cookies.set(access_token, accessToken, objCookie)
  if (refreshToken) Cookies.set(refresh_token, refreshToken, objCookie)
}

const getToken = () => Cookies.get(access_token) || null
const getRefreshToken = () => Cookies.get(refresh_token) || null

const removeToken = () => {
  const rm_access_token = getToken()
  const rm_refresh_token = getRefreshToken()

  if (rm_access_token) Cookies.remove(access_token,
    { ...objCookie, path: '/', domain: CONSTANT.domain })

  if (rm_refresh_token) Cookies.remove(refresh_token,
    { ...objCookie, path: '/', domain: CONSTANT.domain })
}

export { saveToken, getToken, getRefreshToken, removeToken }
