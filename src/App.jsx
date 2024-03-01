// router
import Routes from 'routes'

// third-party imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// project imports
import NavigationScroll from 'layouts/NavigationScroll'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getToken, getRefreshToken } from 'utils/auth'
import { jwtDecode } from 'jwt-decode'
import { setUser, authRefreshToken } from 'stores/auth/authSlice'

function App() {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const access_token = getToken()
    const refreshToken = getRefreshToken()

    if (access_token) {
      const decoded = jwtDecode(access_token)
      if (!decoded) return
      if (!user) {
        dispatch(
          setUser({
            user: decoded,
            isLoggedIn: true
          })
        )
      }

      if (new Date(decoded.exp * 1000) < new Date(new Date().getTime() - 15 * 60000)) {
        dispatch(authRefreshToken({ refreshToken }))
      }
    } else if (refreshToken) {
      dispatch(authRefreshToken({ refreshToken }))
    } else {
      dispatch(setUser({ user: null, isLoggedIn: false }))
    }
  }, [dispatch, user])

  return (
    <>
      <NavigationScroll>
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
