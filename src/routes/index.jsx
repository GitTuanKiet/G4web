import { useRoutes } from 'react-router-dom'

// project imports
import MainRoutes from './MainRoutes'
import AuthRoutes from './AuthRoutes'
import { CgvOnlineRoutes, StaticRoutes, NotFoundRoutes } from './StaticRoutes'
import testView from './testView'

// ===========================|| ROUTING RENDER ||=========================== //

const Routes = () => useRoutes([AuthRoutes, MainRoutes, StaticRoutes, CgvOnlineRoutes, NotFoundRoutes, testView])

export default Routes
