import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import Button from 'components/Button'
import { initOrder } from 'stores/booking/slice'
import imagePaths from 'assets/images/imagePaths'


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

function MovieItem({ movie }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <>
      <div className="bg-white flex flex-col rounded-lg h-full select-none relative">
        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)]  rounded-xl"></div>

        <img src={movie.poster} alt="" className="w-full h-full rounded-xl object-cover" />
        <div>
          <span className="absolute top-0 bg-secondary text-primary py-1 px-3 rounded-md ml-3 mt-3 font-semibold">
            T{movie.ageRestriction}
          </span>
        </div>
        <div className="py-4 flex flex-col  w-full absolute bottom-0 text-white text-center ">
          <h3 className="text-center text-xl shadow-sm">
            {movie.title.length > 30 ? `${movie.title.slice(0, 30)}...` : movie.title}
          </h3>
          <div className="flex items-center mobile:flex-col gap-4 justify-between my-2 mx-8">
            <Button
              primary
              className="hover:opacity-100"
              onClick={() => dispatch(initOrder({ navigate, order: 'ticket', data: { movie } }))}
            >
              Mua ngay
            </Button>
            <Button onClick={() => navigate(`/movie/detail/${movie.slug}`)} primary className="hover:opacity-100">
              Chi tiết
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieList
