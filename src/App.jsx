
import { useState } from 'react'
import Header from './layouts/MainLayout/header.jsx'
import Footer from './layouts/MainLayout/footer.jsx'

// router
import Routes from 'routes'

// third-party imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// project imports
import NavigationScroll from 'layouts/NavigationScroll'


function App() {

  return (

    <><>
      <Header />
      <Footer />
    </>
    <NavigationScroll>
        <Routes />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover />
      </NavigationScroll></>

  )
}

export default App
