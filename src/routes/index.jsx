import { useRoutes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setInfo, fetchCards, fetchHistory, userClear, getMemberCard } from 'stores/user/slice'
import { refreshToken } from 'stores/auth/slice'

import NavigationScroll from 'helpers/NavigationScroll'

import { AuthRoutes, NoLayoutRoutes } from './AuthRoutes'
import { GuestRoutes, AuthenticatedRoutes } from 'client/ClientRoutes'
import AdminRoutes from 'admin/AdminRoutes'

const Router = () => {
  const { accessToken } = useSelector((state) => state.auth)
  const isAuthenticated = !!accessToken
  
  // const role = useSelector((state) => state.user.role)

  const role = 'admin'

  return useRoutes([AuthRoutes, GuestRoutes, ...NoLayoutRoutes, AuthenticatedRoutes(isAuthenticated), AdminRoutes(isAuthenticated, role)])
}

const fetchDataUser = (dispatch) => {
  dispatch(fetchHistory())
  dispatch(fetchCards())
  dispatch(getMemberCard())
}


function WebRouter() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)

  const [role, setRole] = useState('user')

  useEffect(() => {
    let intervalId = undefined

    if (accessToken) {
      const decoded = parseJwt(accessToken)
      if (!decoded) return
      // set user to redux store
      dispatch(setInfo(decoded))
      setRole(decoded.role)

      // refresh token every 15 minutes
      intervalId = setInterval(() => {
        dispatch(refreshToken())
      }, 1000 * 60 * 15)

      fetchDataUser(dispatch)
    } else {
      dispatch(userClear())
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [dispatch, accessToken])

  return (
    <NavigationScroll>
      <Router />
    </NavigationScroll>
  )
}

// https://stackoverflow.com/a/38552302
const parseJwt = (token) => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}

export default WebRouter
