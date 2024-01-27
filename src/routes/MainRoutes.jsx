import { lazy } from 'react'

// project imports
import MainLayout from 'layouts/MainLayout'
import Loadable from 'components/Loadable'

// home routing
const Home = Loadable(lazy(() => import('pages/Home')))
const Theater = Loadable(lazy(() => import('pages/Theater')))
const Movie = Loadable(lazy(() => import('pages/Movie')))

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <Home />
    },
    {
      path: 'home',
      element: <Home />
    },
    {
      path: 'theater',
      element: <Theater />
    },
    {
      path: 'movie',
      element: <Movie />
    }
  ]
}

export default MainRoutes
