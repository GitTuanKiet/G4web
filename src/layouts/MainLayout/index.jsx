import { Outlet } from 'react-router-dom'

// project imports
import Header from './Header'
import Footer from './Footer'

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {

  return (
    <div className="w-full h-screen">
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