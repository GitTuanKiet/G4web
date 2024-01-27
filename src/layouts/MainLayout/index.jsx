import { Outlet } from 'react-router-dom'

// project imports
import Header from './Header'
// import Container from 'containers'

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {

  return (
    <>
      {/* Container */}
      <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-start">
        {/* header */}
        <div className="w-full h-16 bg-white shadow-md flex items-center justify-center">
          <Header />
        </div>
        {/* content */}
        <div className="w-full h-auto bg-black">
          <Outlet />
        </div>
        {/* footer */}
        <div className="w-full h-32 bg-white shadow-md flex items-center justify-center">
          Footer
        </div>
      </div>
    </>
  )
}

export default MainLayout
