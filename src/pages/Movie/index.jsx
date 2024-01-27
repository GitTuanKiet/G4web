

import CardMovie from 'views/movie/Card'

const Movie = () => {
  const movies = ['Movie 1', 'Movie 2', 'Movie 3']
  return (
    <>
      <h1>Movie</h1>

      <div className="grid grid-cols-3 gap-4">
        {
          movies.map((movie, index) => (
            <CardMovie key={index} movies={movie} />
          ))
        }
      </div>
    </>
  )
}

export default Movie