import { lazy } from 'react'

// project imports
import Loadable from 'components/Loadable'
import ExtraInfoLayout from 'layouts/ExtraInfoLayout'

// profile
const Partner = Loadable(lazy(() => import('pages/ExtraInfo/Partner')))

// ===========================|| PROFILE ROUTING ||=========================== //

const ExtraInfoRoutes = {
  path: '/extra-info',
  element: <ExtraInfoLayout />,
  children: [
    {
      path: 'partners',
      element: <Partner />
    }
  ]
}

export default ExtraInfoRoutes
