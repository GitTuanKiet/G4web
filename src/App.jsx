// router
import Routes from 'routes'

// third-party imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// project imports
import NavigationScroll from 'layouts/NavigationScroll'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getToken } from 'utils/auth'
import { jwtDecode } from 'jwt-decode'
import { authUpdateUserInfo } from 'stores/auth/authSlice'

function App() {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const access_token = getToken()
    if (access_token) {
      if (!user) {
        var decoded = jwtDecode(access_token)
        console.log('🚀 ~ useEffect ~ decoded:', decoded)
        if (decoded) {
          dispatch(
            authUpdateUserInfo({
              user: { id: decoded.id, email: decoded.email, name: decoded.name },
              isLoggedIn: true
            })
          )
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

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
