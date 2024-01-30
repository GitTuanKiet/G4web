import { lazy } from 'react'

// project imports
import MainLayout from 'layouts/MainLayout'
import Loadable from 'components/Loadable'
import MovieDetail from 'pages/MovieDetail'

// pages routing
const Home = Loadable(lazy(() => import('pages/Home')))
const Theater = Loadable(lazy(() => import('pages/Theater')))
const Movie = Loadable(lazy(() => import('pages/Movie')))
const Special = Loadable(lazy(() => import('pages/Theater/Special')))
const NewsOffer = Loadable(lazy(() => import('pages/NewsOffer')))
const NewsOfferDetail = Loadable(lazy(() => import('pages/NewsOffer/Partials')))

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
          element: <Special />
        },
        {
          path: 'special/:slug',
          element: <Special />
        }
      ]
    },
    {
      path: 'movie',
       
      element: <Movie />
     
    },
    {
      path: 'movie/:slug',
      element: <MovieDetail />
      children: [
        {
          path: '',
          element: <Movie />
        },
        {
          path: ':slug',
          element: <Movie />
        }
      ]
    },
    {
      path: 'news-offer',
      children: [
        {
          path: '',
          element: <NewsOffer />
        },
        {
          path: ':id',
          element: <NewsOfferDetail />
        }
      ]
    }
  ]
}

export default MainRoutes
