
import { useState } from 'react'


// router
import Routes from 'routes'

// third-party imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Index from '../src/layouts/MainLayout/index.jsx'
// project imports
import NavigationScroll from 'layouts/NavigationScroll'


function App() {

  return (

    <>
      <Index/>
    </>
    // <NavigationScroll>
    //     <Routes />
    //     <ToastContainer
    //       position="top-right"
    //       autoClose={5000}
    //       hideProgressBar={false}
    //       newestOnTop={false}
    //       closeOnClick
    //       pauseOnHover />
    //   </NavigationScroll></>

  )
}

export default App
