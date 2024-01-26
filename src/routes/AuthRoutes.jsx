import { lazy } from 'react'

// project imports
import Loadable from 'components/Loadable'
import ForgotPassword from 'views/auth/ForgotPassword'

// auth routing
const Login = Loadable(lazy(() => import('views/auth/Login')))
const Register = Loadable(lazy(() => import('views/auth/Register')))

// ===========================|| AUTH ROUTING ||=========================== //

const AuthRoutes = {
  path: '/auth',
  children: [
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

export default AuthRoutes;
