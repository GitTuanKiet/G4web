import Cookies from 'js-cookie'

const access_token = 'CGV_access_token'

console.log('domain cookie: ', import.meta.env.VITE_REACT_APP_COOKIE_DOMAIN)

export const objCookie = {
  expires: 30,
  domain: import.meta.env.VITE_REACT_APP_COOKIE_DOMAIN
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
      domain: import.meta.env.VITE_REACT_APP_COOKIE_DOMAIN
    })
    // Cookies.remove(refreshToken, {
    //     ...objCookie,
    //     path: '/',
    //     domain: import.meta.env.VITE_REACT_APP_COOKIE_DOMAIN,
    // });
  }
}

export { saveToken, getToken,logout }
