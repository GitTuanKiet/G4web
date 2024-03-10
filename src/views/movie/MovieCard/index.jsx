import Button from 'components/Button'

import { Link, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { initOrder } from 'stores/booking/slice'
import { useDispatch } from 'react-redux'


const MovieCard = ({ movie }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleBookingTicket = () => {
    dispatch(initOrder({ navigate, order: 'ticket', data: { movie } }))
  }

  return (
    <>
      <div className='movie-card flex flex-col justify-between'>
        <Link to={`/movie/detail/${movie.slug}`} >
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-[1/4] h-[500px] rounded-xl object-cover "
          />
        </Link>
        <div className="py-4 flex flex-col w-full bottom-0 ">
          <h2 className='text-xl'>{movie.title}</h2>
          <h3 className='text-sx'>Thể loại: {movie.genres.join(', ')}</h3>
          <h3 className='text-sx'>Thời lượng: {movie.duration} phút</h3>
          <h3 className='text-sx'>Khởi chiếu: {format(new Date(movie?.releaseDate), 'dd/MM/yyyy')}</h3>
          <div className="flex items-center justify-between my-2">
            <Button>Like</Button>
            <Button onClick={handleBookingTicket} primary>{movie.status === 'now showing' ? 'Mua vé' : 'Đặt vé'}</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard
