// project imports
import Banner from 'client/views/Banner'
import EventList from './EventList'
import MovieList from './MovieList'

import { slides } from 'apis/mockData'
// ==============================|| HOME ||============================== //

const Home = () => {
  return (
    <>
      {/* banner */}
      <div className="w-full h-[auto] my-12 max-w-[830px] mx-auto mobile:hidden ">
        <Banner slides={slides} />
      </div>

      {/* content */}
      <div className="w-full">
        <MovieList />

        <EventList />
      </div>
    </>
  )
}

export default Home
