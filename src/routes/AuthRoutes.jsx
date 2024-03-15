import { lazy } from 'react'

// project imports
import Loadable from 'components/Loadable'

// auth routing
const Login = Loadable(lazy(() => import('views/auth/Login')))
const Register = Loadable(lazy(() => import('views/auth/Register')))
const ForgotPassword = Loadable(lazy(() => import('views/auth/ForgotPassword')))
const VerifyEmail = Loadable(lazy(() => import('views/auth/VerifyEmail')))
const ResetPassword = Loadable(lazy(() => import('views/auth/ResetPassword')))

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
      path: 'verify-email/:verifyToken',
      element: <VerifyEmail />
    },
    {
      path: 'reset-password/:resetToken',
      element: <ResetPassword />
    }
  ]
}

export default AuthRoutes
