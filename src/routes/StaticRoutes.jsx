import { lazy } from 'react'

// project imports
import Loadable from 'components/Loadable'
import MainLayout from 'layouts/MainLayout'

// pages routing

// 404
const PageNotFound = Loadable(lazy(() => import('pages/static/other/404')))

// static
const CgvOnline = Loadable(lazy(() => import('pages/static/other/CgvOnline')))
const MemberShip = Loadable(lazy(() => import('pages/static/MemberShip')))
const CgvRules = Loadable(lazy(() => import('pages/static/other/CgvRules')))
const Cinemas = Loadable(lazy(() => import('pages/static/other/Cinemas')))

// others
const FAQ = Loadable(lazy(() => import('pages/static/other/Faq')))
const Recruitment = Loadable(lazy(() => import('pages/static/other/Recruitment')))

// ===========================|| STATIC PAGE ROUTING ||=========================== //

const NotFoundRoutes = {
  path: '*',
  element: <PageNotFound />
}

const CgvOnlineRoutes = {
  path: '/cgv-online',
  element: <CgvOnline />
}

const StaticRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
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
      path: 'faq',
      element: <FAQ />
    },
    {
      path: '/recruitment',
      element: <Recruitment />
    }
  ]
}

export { CgvOnlineRoutes, StaticRoutes, NotFoundRoutes }