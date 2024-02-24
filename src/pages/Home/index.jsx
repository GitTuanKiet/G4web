// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// project imports
import Banner from 'views/home/Banner'
import Widget from 'views/home/Widget'
import Content from 'views/home/Content'

// ==============================|| HOME ||============================== //

const Home = () => {
  console.log('api url: ' + import.meta.env.VITE_REACT_APP_BASE_URL_API)
  return (
    <>
      {/* widget */}
      <div className="w-full py-2 flex items-center justify-center">
        <Widget />
      </div>
      {/* banner */}
      <div className="w-full h-[auto] flex items-center justify-center bg-green-500">
        <Banner />
      </div>

      {/* content */}
      <div className="page-container">
        <Content />
      </div>
    </>
  )
}

export default Home