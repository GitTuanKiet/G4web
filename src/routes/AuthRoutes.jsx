import { lazy } from 'react'

// project imports
import Loadable from 'components/Loadable'

// auth routing
const Login = Loadable(lazy(() => import('views/auth/Login')))
const Register = Loadable(lazy(() => import('views/auth/Register')))
const ForgotPassword = Loadable(lazy(() => import('views/auth/ForgotPassword')))

// ===========================|| AUTH ROUTING ||=========================== //

const AuthRoutes = {
  path: '/auth',
  children: [
    {
      path: '',
      element: <Login />
    },
    {
      path: 'login', // không bắt đầu bằng '/'
      element: <Login />
    },
    {
      path: 'register', // không bắt đầu bằng '/'
      element: <Register />
    },
    {
      path: 'forgot-password', // không bắt đầu bằng '/'
      element: <ForgotPassword />
    }
  ]
}

export default AuthRoutes
