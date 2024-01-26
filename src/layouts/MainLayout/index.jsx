import { Outlet } from 'react-router-dom'
import Header from './Header'

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {

  return (
    <div className="flex">
      {/* header */}
      <div
        className = "flex-shrink-0 w-full"
      >
        <Header />
      </div>

      {/* main content */}
      <div
        className = "flex-grow"
      >
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
