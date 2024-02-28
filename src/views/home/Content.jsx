import EventList from 'views/home/Event/EventList'
import MovieList from 'views/movie/MovieList'

const Content = () => {
  return (
    <>
      <MovieList key={1} />

      <EventList key={2} />
    </>
  )
}

export default Content
