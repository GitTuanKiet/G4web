import { lazy } from 'react'

// project imports
import MainLayout from 'layouts/MainLayout'
import Loadable from 'components/Loadable'

// home routing
// const Home = Loadable(lazy(() => import('pages/Home')))


// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />
  // children: [
  //   {
  //     path: '/',
  //     element: <Home />
  //   }
  // ]
}

export default MainRoutes