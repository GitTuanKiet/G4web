import { useRoutes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setInfo, fetchCards, fetchHistory, getMemberCard } from 'stores/user/slice'
import { logout, refreshToken } from 'stores/auth/slice'
import { parseJwt } from 'helpers/auth'

import NavigationScroll from 'helpers/NavigationScroll'

import { AuthRoutes, NoLayoutRoutes } from './AuthRoutes'
import { GuestRoutes, AuthenticatedRoutes } from 'client/ClientRoutes'
import AdminRoutes from 'admin/AdminRoutes'
import { toast } from 'react-toastify'

const Router = () => {
  const { accessToken } = useSelector((state) => state.auth)
  const isAuthenticated = !!accessToken
  // const role = useSelector((state) => state.user.role)

  const role = 'admin'

  return useRoutes([AuthRoutes, GuestRoutes, ...NoLayoutRoutes, AuthenticatedRoutes(isAuthenticated), AdminRoutes(isAuthenticated, role)])
}

function WebRouter() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { accessToken } = useSelector((state) => state.auth)


  useEffect(() => {
    let intervalId = undefined
    if (typeof accessToken === 'string') {
      const accessTokenDecoded = parseJwt(accessToken)
      if (!accessTokenDecoded) return

      const accessExp = new Date(accessTokenDecoded.exp * 1000)
      const now = new Date()
      const exp = accessExp - now

      if (exp < 1000) {
        toast.info('Phiên đăng nhập hết hạn')
        dispatch(logout({ navigate }))
        return
      }

      // check if token is expiring in 15 minutes
      const _15Minutes = 15 * 60000
      const isExpiring = exp < _15Minutes
      if (isExpiring)
        dispatch(refreshToken())

      // set user to redux store
      dispatch(setInfo(accessTokenDecoded))
      dispatch(fetchCards())
      dispatch(fetchHistory())
      dispatch(getMemberCard())

      // refresh token every 15 minutes
      intervalId = setInterval(() => {
        dispatch(refreshToken())
      }, _15Minutes)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [accessToken, dispatch, navigate])

  return (
    <NavigationScroll>
      <Router />
    </NavigationScroll>
  )
}

export default WebRouter
