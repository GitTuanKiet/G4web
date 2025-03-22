import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'

// router
import Router from 'routes'

import ErrorHandle from 'shared/utils/errorHandle'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { fetchData } from 'stores/data/slice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <BrowserRouter>
      <ErrorHandle />
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </BrowserRouter>
  )
}

export default App
