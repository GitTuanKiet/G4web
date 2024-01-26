// router
import Routes from 'routes'

// third-party imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// project imports
import NavigationScroll from 'layouts/NavigationScroll'

function App() {

  return (
    <NavigationScroll>
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </NavigationScroll>
  )
}

export default App
