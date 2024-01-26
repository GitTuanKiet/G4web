import { lazy } from 'react'

// project imports
import Loadable from 'components/Loadable'

// auth routing
const Login = Loadable(lazy(() => import('views/auth/Login')))
const Register = Loadable(lazy(() => import('views/auth/Register')))

// ===========================|| AUTH ROUTING ||=========================== //

const AuthRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }

  ]
}

export default AuthRoutes