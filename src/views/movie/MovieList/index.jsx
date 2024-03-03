import MovieItem from '../MovieItem'
import { Swiper, SwiperSlide } from 'swiper/react'

const fake = {
  poster: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg',
  name: 'Movie 1',
  category: 'Action, Adventure, Fantasy',
  duration: '109 minutes',
  language: 'English',
  rated: '18+',
  slug: 'movie-1'
}

const fakeList = [
  {
    id: 1,
    ...fake
  },
  {
    id: 2,
    ...fake
  },
  {
    id: 3,
    ...fake
  },
  {
    id: 4,
    ...fake
  },
  {
    id: 5,
    ...fake
  },
  {
    id: 6,
    ...fake
  },
  {
    id: 7,
    ...fake
  },
  {
    id: 8,
    ...fake
  }
]

function MovieList() {
  return (
    <div>
      <h1 className="text-primary text-6xl text-center my-6 font-semibold">Movie selection</h1>
      <div className="movie-list ">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={'auto'}>
          {fakeList.map((movie) => {
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
