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
const About = Loadable(lazy(() => import('pages/static/other/About')))
const Contact = Loadable(lazy(() => import('pages/static/other/Contact')))
const FAQ = Loadable(lazy(() => import('pages/static/other/Faq')))
const PolicyPrivacy = Loadable(lazy(() => import('pages/static/Policy/Privacy')))
const PolicyPayment = Loadable(lazy(() => import('pages/static/Policy/Payment')))
const TermConditions = Loadable(lazy(() => import('pages/static/Terms/Conditions')))
const TermsOfUse = Loadable(lazy(() => import('pages/static/Terms/OfUse')))
const ForPartners = Loadable(lazy(() => import('pages/static/other/ForPartners')))
const Career = Loadable(lazy(() => import('pages/static/other/Career')))

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
      path: 'about',
      element: <About />
    },
    {
      path: 'contacts',
      element: <Contact />
    },
    {
      path: 'faq',
      element: <FAQ />
    },
    {
      path: 'policy',
      children: [
        {
          path: 'privacy',
          element: <PolicyPrivacy />
        },
        {
          path: 'payment',
          element: <PolicyPayment />
        }
      ]
    },
    {
      path: 'terms',
      children: [
        {
          path: 'conditions',
          element: <TermConditions />
        },
        {
          path: 'of-use',
          element: <TermsOfUse />
        }
      ]
    },
    {
      path: 'for-partners',
      element: <ForPartners />
    },
    {
      path: 'careers',
      element: <Career />
    }
  ]
}

export { CgvOnlineRoutes, StaticRoutes, NotFoundRoutes }