import { useSelector } from 'react-redux'
import MovieItem from '../MovieItem'
import imagePaths from 'assets/images/imagePaths'
import { Swiper, SwiperSlide } from 'swiper/react'
import Heading from 'components/Heading'

function MovieList() {
  const { movies } = useSelector((state) => state.data)
  return (
    <div>
      <div className='pb-10 flex justify-center items-center'>
        <div className='border-y-2 border-black pt-1 flex-grow' ></div>
        <img src={imagePaths.movie_select} alt="" className='px-4' />
        <div className='border-y-2 border-black pt-1 flex-grow'></div>
      </div>
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
