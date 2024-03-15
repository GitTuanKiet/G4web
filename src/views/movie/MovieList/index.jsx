import { useSelector } from 'react-redux'
import MovieItem from '../MovieItem'
import imagePaths from 'assets/images/imagePaths';
import { Swiper, SwiperSlide } from 'swiper/react'
import Heading from 'components/Heading'

function MovieList() {
  const { movies } = useSelector((state) => state.data)
  return (
    <div>
    <Heading>Movie selection</Heading>
// =======
//       <div className='my-10'>
//         <hr className='border-t-2 border-black mb-[-18px]' />
//         <img src={imagePaths.movie_select} alt="" className='mx-auto ' />
//         <hr className='border-t-2 border-black mt-[-18px]' />
//       </div>
// >>>>>>> main
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
