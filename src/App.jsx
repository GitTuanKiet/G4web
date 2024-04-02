import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

// router
import Routes from 'routes'

// third-party imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// project imports
import NavigationScroll from 'layouts/NavigationScroll'
import { setInfo, fetchCards, fetchHistory, userClear, getMemberCard } from 'stores/user/slice'
import { logout } from 'stores/auth/slice'
import { fetchData } from 'stores/data/slice'
import { refreshToken } from 'stores/auth/slice'
import ErrorHandle from 'utils/errorHandle'

function App() {
  const navigate = useNavigate()
  const { accessToken } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    if (accessToken) {
      const decoded = jwtDecode(accessToken)
      if (!decoded) return
      const exp = new Date(decoded.exp * 1000)
      // set user to redux store
      dispatch(setInfo(decoded))

      // logout if token is expired
      if (exp < new Date()) {
        dispatch(logout({ navigate }))
      }

      // refresh token if token is about to expire
      if (exp < new Date(new Date().getTime() + 15 * 60000)) {
        dispatch(refreshToken())
      }

      dispatch(fetchHistory())
      dispatch(fetchCards())
      dispatch(getMemberCard())
    } else {
      dispatch(userClear())
    }
  }, [dispatch, accessToken, navigate])

  return (
    <>
      <NavigationScroll>
        <ErrorHandle />
        <Routes />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
      </NavigationScroll>
    </>
  )
}

export default App
