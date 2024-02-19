import { useRoutes } from 'react-router-dom'

// project imports
import MainRoutes from './MainRoutes'
import AuthRoutes from './AuthRoutes'
import OthersRoutes from './OtherRoutes'
import CgvOnlineRoutes from './CgvOnlineRoutes'
import NotFoundRoutes from './404'
// import MeRoutes from './MeRoutes'

// ===========================|| ROUTING RENDER ||=========================== //

const Routes = () => useRoutes([AuthRoutes, MainRoutes, OthersRoutes, CgvOnlineRoutes, NotFoundRoutes])

export default Routes
