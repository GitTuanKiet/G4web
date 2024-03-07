import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link, Navigate } from 'react-router-dom'

import MovieCard from 'views/movie/MovieCard'
import Button from 'components/Button'

const Movie = () => {
  const { status } = useParams()
  const { movies } = useSelector((state) => state.data)

  const [filters, setFilters] = useState(movies)
  const [str, setStr] = useState(['Đang chiếu', 'Sắp ra mắt'])
  const slug = status === 'coming-soon' ? 'now-showing' : 'coming-soon'
  useEffect(() => {
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
      <div className='w-full flex items-center justify-between py-3 border-b-2 border-gray-500'>
        <Button className='text-6xl font-semibold' >{str[0]}</Button>
        <Link to={`/movie/${slug}`} >
          <Button primary>{str[1]}</Button>
        </Link>
      </div>
      <hr />
      <div className="w-full h-auto my-5">
        <div className="w-full h-auto grid grid-cols-4 gap-4">
          { filters.length ?
            filters.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            )) : <div>Không có dữ liệu</div>
          }
        </div>
      </div>
    </>
  )
}

export default Movie