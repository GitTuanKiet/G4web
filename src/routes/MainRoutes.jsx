import { lazy } from 'react'

// project imports
import MainLayout from 'layouts/MainLayout'
import Loadable from 'components/Loadable'
import ProfileLayout from 'layouts/ProfileLayout'
import CinemaByMovie from 'pages/CinemaByMovie'

// pages routing
const Home = Loadable(lazy(() => import('pages/Home')))
const Theater = Loadable(lazy(() => import('pages/Theater')))
const ListMovie = Loadable(lazy(() => import('pages/Movie')))
const Special = Loadable(lazy(() => import('pages/Theater/Special')))
const NewsOffer = Loadable(lazy(() => import('pages/NewsOffer')))
const NewsOfferDetail = Loadable(lazy(() => import('pages/NewsOffer/Partials')))
const MovieDetail = Loadable(lazy(() => import('pages/Movie/MovieDetail')))
const MemberShip = Loadable(lazy(() => import('pages/static/MemberShip')))
const CgvRules = Loadable(lazy(() => import('pages/static/CgvRules')))
const Cinemas = Loadable(lazy(() => import('pages/static/Cinemas')))
const Gift = Loadable(lazy(() => import('pages/Gift')))
const ListGift = Loadable(lazy(() => import('pages/Gift/ListGift')))
const GiftDetail = Loadable(lazy(() => import('pages/Gift/GiftDetail')))
const OnlineStore = Loadable(lazy(() => import('pages/OnlineStore')))
const VoucherDetail = Loadable(lazy(() => import('pages/VoucherDetail')))

// profile
const AccountDetail = Loadable(lazy(() => import('pages/Profile/AccountDetail')))
const CommonInfo = Loadable(lazy(() => import('pages/Profile/CommonInfo')))
const TransactionHistory = Loadable(lazy(() => import('pages/Profile/TransactionHistory')))
const ChangePassword = Loadable(lazy(() => import('pages/Profile/ChangePassword')))

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
    // voucher
    {
      path: 'vouchers/:voucher-slug',
      element: <VoucherDetail />
    },
    // profile (me)
    {
      path: '/me',
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
          path: 'change-password',
          element: <ChangePassword />
        },
        {
          path: 'transaction-history',
          element: <TransactionHistory />
        }
        // {
        //   path:'logout'
        // }
      ]
    }
  ]
}

export default MainRoutes
