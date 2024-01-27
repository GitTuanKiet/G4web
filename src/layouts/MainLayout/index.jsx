import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-start">
      {/* header */}
      <div className="w-full">
        <Header />
      </div>
      {/* content */}
      <div className="w-full h-auto bg-red flex flex-col items-center justify-start">
        <Outlet />
      </div>
      {/* footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout