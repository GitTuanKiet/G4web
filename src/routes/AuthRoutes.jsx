import { lazy } from 'react'

// project imports
import Loadable from 'components/Loadable'

// auth routing
const Login = Loadable(lazy(() => import('views/auth/Login')))

// ===========================|| AUTH ROUTING ||=========================== //

const AuthRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <Login />
    }
  ]
}

export default AuthRoutes