import { lazy } from 'react'

// project imports
import MainLayout from './layouts/MainLayout'
import ProfileLayout from './layouts/ProfileLayout'
import ExtraInfoLayout from './layouts/ExtraInfoLayout'
import Loadable from 'components/Loadable'
import { Navigate } from 'react-router-dom'

// pages routing
const Home = Loadable(lazy(() => import('./pages/Home')))

// theater
const Theater = Loadable(lazy(() => import('./pages/Theater')))
const Special = Loadable(lazy(() => import('./pages/Theater/Special')))

// news-offer
const NewsOffer = Loadable(lazy(() => import('./pages/NewsOffer')))
const NewsOfferDetail = Loadable(lazy(() => import('./pages/NewsOffer/FormOffer')))

// movie
const Movie = Loadable(lazy(() => import('./pages/Movie')))
const MovieDetail = Loadable(lazy(() => import('./pages/Movie/MovieDetail')))

// voucher
const OnlineStore = Loadable(lazy(() => import('./pages/OnlineStore')))
const VoucherDetail = Loadable(lazy(() => import('./pages/OnlineStore/VoucherDetail')))

// ticket
const Ticket = Loadable(lazy(() => import('./pages/Ticket')))

// gift
const Gift = Loadable(lazy(() => import('./pages/Gift')))
const GiftList = Loadable(lazy(() => import('./pages/Gift/GiftList')))
const GiftDetail = Loadable(lazy(() => import('./pages/Gift/GiftDetail')))

// profile
const AccountDetail = Loadable(lazy(() => import('./pages/Profile/AccountDetail')))
const CommonInfo = Loadable(lazy(() => import('./pages/Profile/CommonInfo')))
const TransactionHistory = Loadable(lazy(() => import('./pages/Profile/TransactionHistory')))
const ChangePassword = Loadable(lazy(() => import('./pages/Profile/ChangePassword')))
const SetupPIN = Loadable(lazy(() => import('./pages/Profile/SetupPIN')))
const MemberCard = Loadable(lazy(() => import('./pages/Profile/MemberCard')))

// static
const MemberShip = Loadable(lazy(() => import('./views/Static/MemberShip')))
const CgvRules = Loadable(lazy(() => import('./views/Static/Other/CgvRules')))
const Cinemas = Loadable(lazy(() => import('./views/Static/Other/Cinemas')))
const Recruitment = Loadable(lazy(() => import('./views/Static/Other/Recruitment')))

// extra-info
const Partner = Loadable(lazy(() => import('./views/Static/ExtraInfo/Partner')))
const About = Loadable(lazy(() => import('./views/Static/ExtraInfo/About')))
const Contact = Loadable(lazy(() => import('./views/Static/ExtraInfo/Contact')))
const PolicyPrivacy = Loadable(lazy(() => import('./views/Static/ExtraInfo/Policy/Privacy')))
const PolicyPayment = Loadable(lazy(() => import('./views/Static/ExtraInfo/Policy/Payment')))
const TermConditions = Loadable(lazy(() => import('./views/Static/ExtraInfo/Terms/Conditions')))
const TermsOfUse = Loadable(lazy(() => import('./views/Static/ExtraInfo/Terms/OfUse')))
const FAQ = Loadable(lazy(() => import('./views/Static/ExtraInfo/FAQ')))

// booking
const BookTicket = Loadable(lazy(() => import('./pages/Book/Ticket')))
const BookVoucher = Loadable(lazy(() => import('./pages/Book/Voucher')))
const BookGift = Loadable(lazy(() => import('./pages/Book/Gift')))
const Congratulation = Loadable(lazy(() => import('./views/Congratulation')))

const ProfileRoutes = {
  path: '/profile',
  element: <ProfileLayout />,
  children: [
    { path: '', element: <CommonInfo /> },
    { path: 'account-detail', element: <AccountDetail /> },
    { path: 'common-info', element: <CommonInfo /> },
    { path: 'transaction-history', element: <TransactionHistory /> },
    { path: 'change-password', element: <ChangePassword /> },
    { path: 'member-card', element: <MemberCard /> },
    { path: 'setup-pin', element: <SetupPIN /> }
  ]
}

const ExtraInfoRoutes = {
  path: '/extra-info',
  element: <ExtraInfoLayout />,
  children: [
    { path: 'partners', element: <Partner /> },
    { path: 'about', element: <About /> },
    { path: 'contact', element: <Contact /> },
    { path: 'policy', element: <PolicyPrivacy /> },
    { path: 'payment-policy', element: <PolicyPayment /> },
    { path: 'rule-transaction', element: <TermConditions /> },
    { path: 'security-policy', element: <TermsOfUse /> },
    { path: 'faq', element: <FAQ /> }
  ]
}

const GuestRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '', element: <Home /> },
    { path: 'home', element: <Home /> },
    // theater
    { path: 'theaters',
      children: [
        { path: '', element: <Theater /> },
        { path: 'special', element: <Special /> },
        { path: 'special/:slug', element: <Special /> }
      ]
    },
    // movie
    { path: 'movie',
      children: [
        { path: '', element: <Movie /> },
        { path: ':status', element: <Movie /> },
        { path: 'detail/:slug', element: <MovieDetail /> }
      ]
    },
    // news-offer
    { path: 'news-offer',
      children: [
        { path: '', element: <NewsOffer /> },
        { path: ':id', element: <NewsOfferDetail /> }
      ]
    },
    // gift
    { path: 'gifts',
      children: [
        { path: '', element: <Gift /> },
        { path: ':slug', element: <GiftList /> },
        { path: 'detail/:slug', element: <GiftDetail /> }
      ]
    },
    // voucher
    { path: 'online-store', element: <OnlineStore /> },
    { path: 'vouchers/:voucher-slug', element: <VoucherDetail /> },
    // extra-info
    { ...ExtraInfoRoutes },
    // static
    { path: 'membership', element: <MemberShip /> },
    { path: 'rules', element: <CgvRules /> },
    { path: 'cinemas', element: <Cinemas /> },
    { path: 'recruitment', element: <Recruitment /> }
  ]
}

const AuthenticatedRoutes = (isAuthenticated) => {
  return {
    path: '/',
    element: isAuthenticated ? <MainLayout /> : <Navigate to="/auth" />,
    children: [
      // profile
      { ...ProfileRoutes },
      // ticket
      { path: 'ticket', element: <Ticket /> },
      // booking
      { path: 'booking-ticket', element: <BookTicket /> },
      { path: 'booking-voucher', element: <BookVoucher /> },
      { path: 'booking-gift', element: <BookGift /> },
      { path: 'payments/succeeded', element: <Congratulation /> }
    ]
  }
}

export { GuestRoutes, AuthenticatedRoutes }