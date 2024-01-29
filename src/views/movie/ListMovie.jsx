

import MovieCard from 'components/Movie/MovieCard'

export default function ListMovie({ movies }) {
  return (
    <>
      <div className="w-full h-auto grid grid-cols-4 gap-4">
        {
          movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        }
      </div>
    </>
  )
}