import Banner from 'client/views/Banner'
import EventList from 'client/pages/Home/EventList'
import MovieList from 'client/pages/Home/MovieList'

import { slides } from 'apis/mockData'

const Home = () => {
  return (
    <>
      <div className="w-full h-[auto] my-12 max-w-[830px] mx-auto mobile:hidden ">
        <Banner slides={slides} />
      </div>

      <div className="w-full">
        <MovieList />
        <EventList />
      </div>
    </>
  )
}

export default Home
