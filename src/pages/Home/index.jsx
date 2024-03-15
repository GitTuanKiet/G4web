// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// project imports
import Banner from 'views/home/Banner'
import Widget from 'views/home/Widget'
import Content from 'views/home/Content'

import { slides } from 'apis/mockData'
// ==============================|| HOME ||============================== //

const Home = () => {
  return (
    <>
      {/* widget */}
      {/* <div className="w-full py-2 flex items-center justify-center">
        <Widget />
      </div> */}
      {/* banner */}
      <div className="w-full h-[auto] my-12 max-w-[830px] mx-auto ">
        <Banner slides={slides} />
      </div>

      {/* content */}
      <div className="">
        <Content />
      </div>
    </>
  )
}

export default Home
