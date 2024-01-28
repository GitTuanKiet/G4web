import { lazy } from 'react'

// project imports
import MainLayout from 'layouts/MainLayout'
import Loadable from 'components/Loadable'

// pages routing
const Home = Loadable(lazy(() => import('pages/Home')))
const Theater = Loadable(lazy(() => import('pages/Theater')))
const Movie = Loadable(lazy(() => import('pages/Movie')))
const GoldClass = Loadable(lazy(() => import('pages/Theater/Special/GoldClass')))
const _3D = Loadable(lazy(() => import('pages/Theater/Special/3D')))

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
      children: [
        {
          path: '',
          element: <Theater />
        },
        {
          path: 'special',
          element: <Theater />
        },
        {
          path: 'special/gold-class',
          element: <GoldClass />
        },
        {
          path: 'special/3D',
          element: <_3D />
        }
      ]
    },
    {
      path: 'movie',
      element: <Movie />
    }
  ]
}

export default MainRoutes
