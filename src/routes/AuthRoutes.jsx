import { lazy } from 'react'

// project imports
import Loadable from 'components/Loadable'
import VerifyEmail from 'pages/Congratulation/VerifiedEmail'

// auth routing
const Login = Loadable(lazy(() => import('views/auth/Login')))
const Register = Loadable(lazy(() => import('views/auth/Register')))
const ForgotPassword = Loadable(lazy(() => import('views/auth/ForgotPassword')))
const Congratulation = Loadable(lazy(() => import('pages/Congratulation')))

// ===========================|| AUTH ROUTING ||=========================== //

const AuthRoutes = {
  path: '/auth',
  children: [
    {
      path: '',
      element: <Login />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'register',
      element: <Register />
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword />
    },
    {
      path: 'verify-email/:token',
      element: <VerifyEmail />
    }
  ]
}

export default AuthRoutes
