// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// project imports
import Banner from 'views/home/Banner'
import Widget from 'views/home/Widget'
import Content from 'views/home/Content'

// ==============================|| HOME ||============================== //

const Home = () => {
  return (
    <>
      {/* widget */}
      <div className="w-full h-24 bg-blue-400 flex items-center justify-center">
        <Widget />
      </div>
      {/* banner */}
      <div className="w-full h-96 bg-green-400 flex items-center justify-center px-20">
        <Banner />
      </div>

      {/* content */}
      <div className="page-container ">
        <Content />
      </div>
    </>
  )
}

export default Home