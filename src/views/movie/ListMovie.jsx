import { Link } from 'react-router-dom'

import MovieCard from 'components/Movie/MovieCard'

export default function ListMovie({ movies }) {
  return (
    <>
      <div className="w-full h-auto grid grid-cols-4 gap-4">
        { movies &&
          movies.map((movie, index) => (
            <Link to={`/movie/detail/${movie.slug}`} key={index}>
              <MovieCard movie={movie} />
            </Link>
          ))
        }
      </div>
    </>
  )
}