import MovieItem from '../MovieItem'
import { Swiper, SwiperSlide } from 'swiper/react'

function MovieList() {
  const fakeList = new Array(10).fill(null)

  return (
    <div>
      <h1 className="text-primary text-3xl text-center my-6 font-semibold">Movie selection</h1>
      <div className="movie-list ">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={'auto'}>
          {fakeList.map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                <MovieItem movie={movie} />{' '}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
export default MovieList
