import { useRoutes } from 'react-router-dom'

// project imports
import MainRoutes from './MainRoutes'
import AuthRoutes from './AuthRoutes'

// ===========================|| ROUTING RENDER ||=========================== //

const Routes = () => useRoutes([AuthRoutes, MainRoutes])

export default Routes