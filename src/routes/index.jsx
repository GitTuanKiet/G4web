import { useRoutes } from 'react-router-dom'

// project imports
import MainRoutes from './MainRoutes'
import AuthRoutes from './AuthRoutes'
import { NotFound } from './MainRoutes'

// ===========================|| ROUTING RENDER ||=========================== //

const Routes = () => useRoutes([AuthRoutes, MainRoutes, NotFound])

export default Routes
