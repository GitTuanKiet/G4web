import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// views components
import Banner from 'views/home/Banner'

// ==============================|| HOME ||============================== //

const Home = () => {
  return (
    <>
      <div className="w-full h-96 bg-yellow-50 flex items-center justify-center">
        {/* banner */}
        <Banner />
      </div>
    </>
  )
}

export default Home