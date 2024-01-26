import { lazy } from 'react'

// project imports
import MainLayout from 'layouts/MainLayout'
import Loadable from 'components/Loadable'
import PageNotFound from 'pages/PageNotFound'

// home routing
const Home = Loadable(lazy(() => import('pages/Home')))

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/home',
      element: <Home />
    }
  ]
}
export const NotFound = {
  path: '*',
  element: <PageNotFound />
}

export default MainRoutes
