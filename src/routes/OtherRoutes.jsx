import { lazy } from 'react'

// project imports
import MainLayout from 'layouts/MainLayout'
import Loadable from 'components/Loadable'

// pages routing
const About = Loadable(lazy(() => import('pages/Others/About')))
const Contact = Loadable(lazy(() => import('pages/Others/Contact')))
const FAQ = Loadable(lazy(() => import('pages/Others/Faq')))
const PolicyPrivacy = Loadable(lazy(() => import('pages/Others/Policy/Privacy')))
const PolicyPayment = Loadable(lazy(() => import('pages/Others/Policy/Payment')))
const TermConditions = Loadable(lazy(() => import('pages/Others/Terms/Conditions')))
const TermsOfUse = Loadable(lazy(() => import('pages/Others/Terms/OfUse')))
const ForPartners = Loadable(lazy(() => import('pages/Others/ForPartners')))
const Career = Loadable(lazy(() => import('pages/Others/Career')))

// ===========================|| OTHER ROUTING ||=========================== //

const OthersRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
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

export default OthersRoutes
