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
const Gift = Loadable(lazy(() => import('pages/Gift')))
const ListGift = Loadable(lazy(() => import('pages/Gift/ListGift')))
const GiftDetail = Loadable(lazy(() => import('pages/Gift/GiftDetail')))
const OnlineStore = Loadable(lazy(() => import('pages/OnlineStore')))
const VoucherDetail = Loadable(lazy(() => import('pages/VoucherDetail')))
const CinemaByMovie = Loadable(lazy(() => import('pages/CinemaByMovie')))

import ProfileRoutes from './ProfileRoutes'

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
      path: 'theaters',
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
        },
        {
          path: ':slug/cinema',
          element: <CinemaByMovie />
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
      path: 'gifts',
      children: [
        {
          path: '',
          element: <Gift />
        },
        {
          path: ':slug',
          element: <ListGift />
        },
        {
          path: 'detail/:slug',
          element: <GiftDetail />
        }
      ]
    },
    {
      path: 'online-store',
      element: <OnlineStore />
    },
    {
      path: 'vouchers/:voucher-slug',
      element: <VoucherDetail />
    },
    {
      ...ProfileRoutes
    }
  ]
}

export default MainRoutes
