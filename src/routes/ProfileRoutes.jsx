import { lazy } from 'react'

// project imports
import Loadable from 'components/Loadable'
import ProfileLayout from 'layouts/ProfileLayout'

// profile
const AccountDetail = Loadable(lazy(() => import('pages/Profile/AccountDetail')))
const CommonInfo = Loadable(lazy(() => import('pages/Profile/CommonInfo')))
const TransactionHistory = Loadable(lazy(() => import('pages/Profile/TransactionHistory')))
const ChangePassword = Loadable(lazy(() => import('pages/Profile/ChangePassword')))
const SetupPIN = Loadable(lazy(() => import('pages/Profile/SetupPIN')))

// ===========================|| PROFILE ROUTING ||=========================== //

const ProfileRoutes = {
  path: '/profile',
  element: <ProfileLayout />,
  children: [
    {
      path: '',
      element: <CommonInfo />
    },
    {
      path: 'account-detail',
      element: <AccountDetail />
    },
    {
      path: 'common-info',
      element: <CommonInfo />
    },
    {
      path: 'transaction-history',
      element: <TransactionHistory />
    },
    {
      path: 'change-password',
      element: <ChangePassword />
    },
    {
      path: 'setup-pin',
      element: <SetupPIN />
    }
  ]
}

export default ProfileRoutes