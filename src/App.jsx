// router
import Routes from 'routes'

// third-party imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// project imports
import NavigationScroll from 'layouts/NavigationScroll'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getToken, getRefreshToken, logout } from 'utils/auth'
import { jwtDecode } from 'jwt-decode'
import { setUser, authRefreshToken, userHistory, userCards } from 'stores/auth/authSlice'
import { fetchData } from 'stores/data/slice'

function App() {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    const access_token = getToken()
    const refreshToken = getRefreshToken()

    if (access_token) {
      const decoded = jwtDecode(access_token)
      if (!decoded) return
      const exp = new Date(decoded.exp * 1000)
      if (!user) {
        // set user to redux store
        dispatch(
          setUser({
            user: decoded,
            isLoggedIn: true
          })
        )

        // logout if token is expired
        if (exp < new Date()) {
          dispatch(setUser({ user: null, isLoggedIn: false, history: null, cards: null }))
          logout()
        }
      }

      dispatch(userCards())
      dispatch(userHistory())
      if (exp < new Date(new Date().getTime() + 15 * 60000)) {
        dispatch(authRefreshToken({ refreshToken }))
      }
    } else if (refreshToken) {
      dispatch(authRefreshToken({ refreshToken }))
    } else {
      dispatch(setUser({ user: null, isLoggedIn: false, history: null, cards: null }))
      logout()
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
