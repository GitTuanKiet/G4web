import { useSelector } from 'react-redux'
import MovieItem from '../MovieItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import Heading from 'components/Heading'

function MovieList() {
  const { movies } = useSelector((state) => state.data)
  return (
    <div>
    <Heading>Movie selection</Heading>
      <div className="movie-list ">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={'auto'}>
          {movies.map((movie) => {
            return (
              <SwiperSlide key={movie._id}>
                <MovieItem movie={movie} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
export default MovieList
