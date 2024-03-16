import { Outlet } from 'react-router-dom'

// project imports
import Header from './Header'
import Footer from './Footer'

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  return (
    <div className="w-full h-screen">
      {/* /overflow-x-hidden  */}
      {/* header */}
      <div className="w-full bg-pinkThin  flex justify-center">
        <Header />
      </div>
      {/* content */}
      <div className="w-full flex justify-center">
        <div className=" page-container h-auto flex flex-col z-0 pb-10">
          <Outlet />
        </div>
      </div>
      {/* footer */}
      <div className="page-container ">
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
