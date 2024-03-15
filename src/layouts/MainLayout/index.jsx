import { Outlet } from 'react-router-dom'

// project imports
import Header from './Header'
import Footer from './Footer'

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {

  return (
    <div className="w-full h-screen">
      {/* header */}
      <div className="w-full bg-yellow-500 flex justify-center">
        <div className="w-[70%]">
          <Header />
        </div>
      </div>
      {/* content */}
      <div className="w-full flex justify-center">
        <div className="w-[70%] h-auto flex flex-col z-0 pb-10">
          <Outlet />
        </div>
      </div>
      {/* footer */}
      <div className="w-full flex justify-center">
        <div className="w-[70%]">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MainLayout