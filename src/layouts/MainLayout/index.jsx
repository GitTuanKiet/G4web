import { Outlet } from 'react-router-dom'
import Header from './Header'

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-start">
      {/* header */}
      <div className="w-full h-20 bg-white shadow-md flex items-center justify-center">
        <Header />
      </div>
      {/* content */}
      <div className="w-full h-{calc(100vh - 5rem)} bg-red flex flex-col items-center justify-start">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
