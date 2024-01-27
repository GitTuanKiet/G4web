// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// views components
import EventList from 'components/Event/EventList'
import MovieList from 'components/Movie/MovieList'
import Banner from 'views/home/Banner'

// ==============================|| HOME ||============================== //

const Home = () => {
  return (
    <>
      {/* widget */}
      <div className="w-full h-24 bg-red-500 flex items-center justify-center">

      </div>
      {/* banner */}
      <div className="w-full h-96 bg-yellow-500 flex items-center justify-center px-20">
        <Banner />
      </div>

      {/* content */}
      <div className=" page-container ">
        <MovieList/>

        <EventList/>

      </div>
    </>
  )
}

export default Home