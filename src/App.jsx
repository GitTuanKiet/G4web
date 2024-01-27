import { useState } from 'react'
import Header from './layouts/MainLayout/header.jsx'
import Footer from './layouts/MainLayout/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
