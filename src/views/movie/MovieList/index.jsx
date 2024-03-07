import { useSelector } from 'react-redux'
import MovieItem from '../MovieItem'
import { Swiper, SwiperSlide } from 'swiper/react'

function MovieList() {
  const { movies } = useSelector((state) => state.data)
  return (
    <div>
      <h1 className="text-primary text-6xl text-center my-6 font-semibold">Movie selection</h1>
      <div className="movie-list ">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={'auto'}>
          {movies.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
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
