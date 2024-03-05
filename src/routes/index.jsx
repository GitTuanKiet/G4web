import { useRoutes } from 'react-router-dom'

// project imports
import MainRoutes from './MainRoutes'
import AuthRoutes from './AuthRoutes'
import { CgvOnlineRoutes, StaticRoutes, NotFoundRoutes } from './StaticRoutes'
import PaymentRoutes from './PaymentRoutes'

// ===========================|| ROUTING RENDER ||=========================== //

const Routes = () => useRoutes([AuthRoutes, MainRoutes, PaymentRoutes, StaticRoutes, CgvOnlineRoutes, NotFoundRoutes])

export default Routes
