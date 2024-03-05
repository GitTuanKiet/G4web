import { lazy } from 'react'

// project imports
import Loadable from 'components/Loadable'
import ExtraInfoLayout from 'layouts/ExtraInfoLayout'

// profile
const Partner = Loadable(lazy(() => import('pages/static/ExtraInfo/Partner')))
const About = Loadable(lazy(() => import('pages/static/ExtraInfo/About')))
const Contact = Loadable(lazy(() => import('pages/static/ExtraInfo/Contact')))
const PolicyPrivacy = Loadable(lazy(() => import('pages/static/ExtraInfo/Policy/Privacy')))
const PolicyPayment = Loadable(lazy(() => import('pages/static/ExtraInfo/Policy/Payment')))
const TermConditions = Loadable(lazy(() => import('pages/static/ExtraInfo/Terms/Conditions')))
const TermsOfUse = Loadable(lazy(() => import('pages/static/ExtraInfo/Terms/OfUse')))

// ===========================|| PROFILE ROUTING ||=========================== //

const ExtraInfoRoutes = {
  path: '/extra-info',
  element: <ExtraInfoLayout />,
  children: [
    {
      path: 'partners',
      element: <Partner />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'policy',
      element: <PolicyPrivacy />
    },
    {
      path: 'payment-policy',
      element: <PolicyPayment />
    },
    {
      path: 'rule-transaction',
      element: <TermConditions />
    },
    {
      path: 'security-policy',
      element: <TermsOfUse />
    }
  ]
}

export default ExtraInfoRoutes
