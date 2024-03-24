import { lazy } from 'react'

// project imports
import Loadable from 'components/Loadable'

// auth routing
const Login = Loadable(lazy(() => import('shared/Auth/Login')))
const Register = Loadable(lazy(() => import('shared/Auth/Register')))
const ForgotPassword = Loadable(lazy(() => import('shared/Auth/ForgotPassword')))
const VerifyEmail = Loadable(lazy(() => import('shared/Auth/VerifyEmail')))
const ResetPassword = Loadable(lazy(() => import('shared/Auth/ResetPassword')))

import PageNotFound from 'components/404'
import CgvOnline from 'client/views/Static/Other/CgvOnline'

// ===========================|| AUTH ROUTING ||=========================== //

const AuthRoutes = {
  path: '/auth',
  children: [
    { path: '', element: <Login /> },
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },
    { path: 'forgot-password', element: <ForgotPassword /> },
    { path: 'verify-email/:verifyToken', element: <VerifyEmail /> },
    { path: 'reset-password/:resetToken', element: <ResetPassword /> }
  ]
}

const NoLayoutRoutes = [{ path: 'cgv-online', element: <CgvOnline /> }, { path: '*', element: <PageNotFound /> }]

export { AuthRoutes, NoLayoutRoutes }
