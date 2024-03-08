const getBaseURL = () => {
  if (import.meta.env.MODE === 'development') {
    return 'http://localhost:3000/v1'
  }

  return import.meta.env.VITE_REACT_APP_BASE_URL_API
}

const getDomain = () => {
  if (import.meta.env.MODE === 'development') {
    return 'localhost'
  }

  return import.meta.env.VITE_REACT_APP_COOKIE_DOMAIN
}

const getReturnURL = () => {
  const path = import.meta.env.VITE_RETURN_URL
  const url = import.meta.url
  return url.split('src')[0] + path
}

export const CONSTANT = {
  baseURL: getBaseURL(),
  domain: getDomain(),
  return_url: getReturnURL()
}


