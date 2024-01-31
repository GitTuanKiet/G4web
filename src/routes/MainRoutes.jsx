import { lazy } from 'react'

// project imports
import MainLayout from 'layouts/MainLayout'
import Loadable from 'components/Loadable'

// pages routing
const Home = Loadable(lazy(() => import('pages/Home')))
const Theater = Loadable(lazy(() => import('pages/Theater')))
const ListMovie = Loadable(lazy(() => import('pages/Movie')))
const Special = Loadable(lazy(() => import('pages/Theater/Special')))
const NewsOffer = Loadable(lazy(() => import('pages/NewsOffer')))
const NewsOfferDetail = Loadable(lazy(() => import('pages/NewsOffer/Partials')))
const MovieDetail = Loadable(lazy(() => import('pages/Movie/MovieDetail')))
const MemberShip = Loadable(lazy(() => import('pages/MemberShip')))
const CgvRules = Loadable(lazy(() => import('pages/CgvRules')))
const Cinemas = Loadable(lazy(() => import('pages/Cinemas')))
const Gift = Loadable(lazy(() => import('pages/Gift')))
const OnlineStore = Loadable(lazy(() => import('pages/OnlineStore')))

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
      children: [
        {
          path: '',
          element: <ListMovie />
        },
        {
          path: ':type',
          element: <ListMovie />
        },
        {
          path: 'detail/:slug',
          element: <MovieDetail />
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
    },
    {
      path: 'membership',
      element: <MemberShip />
    },
    {
      path: 'rules',
      element: <CgvRules />
    },
    {
      path: 'cinemas',
      element: <Cinemas />
    },
    {
      path: 'gifts',
      element: <Gift />
    },
    {
      path: 'online-store',
      element: <OnlineStore />
    }
    , {
      path: 'cultureplex',
      children: [
        {
          path: 'gift',
          element: <Gift />,
          children : [
            {
              path : 'detail/:index' ,
              element : <Detail />
            }
          ]
        },
        // Còn vài mục con nhưng chưa thêm 
      ]
    }
  ]
}

export default MainRoutes
