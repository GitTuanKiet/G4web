import Button from 'components/Button'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className='movie-card'>
        <Link to={`/movie/detail/${movie.slug}`} >
          <img
            src={movie.poster}
            alt=""
            className="w-full h-auto rounded-xl object-cover "
          />
        </Link>
        <div className="py-4 flex flex-col w-full bottom-0 ">
          <h2 className='text-xl'>{movie.name}</h2>
          <h3 className='text-sx'>Thể loại:{movie.genre}</h3>
          <h3 className='text-sx'>Thời lượng:{movie.duration}</h3>
          <h3 className='text-sx'>Khởi chiếu:{movie.releaseDate}</h3>
          <div className="flex items-center justify-between my-2">
            <Button>Like</Button>
            <Link to={`/booking-ticket/${movie.slug}`}>
              <Button primary>Mua vé</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard
