import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { initOrder } from 'stores/booking/slice'

import Button from 'components/Button'

const Movie = () => {
  const { status } = useParams()
  const { movies } = useSelector((state) => state.data)

  const [filters, setFilters] = useState(movies)
  const [str, setStr] = useState(['Đang chiếu', 'Sắp ra mắt'])
  const slug = status === 'coming-soon' ? 'now-showing' : 'coming-soon'
  useEffect(() => {
    if (!status) return
    if (status === 'coming-soon') {
      setStr(['Sắp ra mắt', 'Đang chiếu'])
    } else {
      setStr(['Đang chiếu', 'Sắp ra mắt'])
    }

    const filters = movies.filter((item) => item.status === status.replace('-', ' '))
    setFilters(filters)
  }, [status, movies])

  if (!movies) {
    return <Navigate to="/movie/now-showing" />
  }

  return (
    <>
      <div className="w-full flex items-center justify-between py-3 border-b-2 border-gray-500">
        <Button className="text-6xl font-semibold mobile:text-xl " primary>
          {str[0]}
        </Button>
        <Link to={`/movie/${slug}`}>
          <Button>{str[1]}</Button>
        </Link>
      </div>
      <hr />
      <div className="w-full h-auto my-5">
        <div className="w-full h-auto grid grid-cols-4 gap-4 tablet:grid-cols-2 mobile:grid-cols-none ">
          {filters.length ? (
            filters.map((movie, index) => <MovieCard key={index} movie={movie} />)
          ) : (
            <div>Không có dữ liệu</div>
          )}
        </div>
      </div>
    </>
  )
}

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleBookingTicket = () => {
    dispatch(initOrder({ navigate, order: 'ticket', data: { movie } }))
  }

  return (
    <>
      <div className="movie-card flex flex-col justify-between shadow-sm">
        <Link to={`/movie/detail/${movie.slug}`}>
          <img src={movie.poster} alt={movie.title} className="w-[400px] h-[500px] rounded-xl object-cover " />
        </Link>
        <div className="py-4 flex flex-col w-full bottom-0 ">
          <h2 className="text-xl">{movie.title}</h2>
          <h3 className="text-sx">Thể loại: {movie.genres.join(', ')}</h3>
          <h3 className="text-sx">Thời lượng: {movie.duration} phút</h3>
          <h3 className="text-sx">Khởi chiếu: {format(new Date(movie?.releaseDate), 'dd/MM/yyyy')}</h3>
          <div className="flex items-center justify-between my-2">
            <Button>Like</Button>
            <Button onClick={handleBookingTicket} primary>
              {movie.status === 'now showing' ? 'Mua vé' : 'Đặt vé'}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie
