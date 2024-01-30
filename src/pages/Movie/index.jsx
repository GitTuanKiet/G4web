import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'

import ListMove from 'views/movie/ListMovie'

const data = [
  {
    type: 'now',
    movies: [
      {
        id: 1,
        name: 'Movie 1',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg',
        slug: 'movie-1'
      },
      {
        id: 2,
        name: 'Movie 2',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg',
        slug: 'movie-2'
      },
      {
        id: 3,
        name: 'Movie 3',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg',
        slug: 'movie-3'
      },
      {
        id: 4,
        name: 'Movie 4',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg',
        slug: 'movie-4'
      }
    ]
  },
  {
    type: 'soon',
    movies: [
      {
        id: 5,
        name: 'Movie 5',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg',
        slug: 'movie-5'
      },
      {
        id: 6,
        name: 'Movie 6',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg',
        slug: 'movie-6'
      },
      {
        id: 7,
        name: 'Movie 7',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg',
        slug: 'movie-7'
      },
      {
        id: 8,
        name: 'Movie 8',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg',
        slug: 'movie-8'
      }
    ]
  }
]


const Movie = () => {
  const { type } = useParams()


  const { movies } = data.filter((item) => item.type === type)[0]

  const d_type = type === 'soon' ? 'now' : 'soon'

  const [str, setStr] = useState(['Đang chiếu', 'Sắp ra mắt'])
  useEffect(() => {
    if (type === 'soon') setStr(['Sắp ra mắt', 'Đang chiếu'])
    else setStr(['Đang chiếu', 'Sắp ra mắt'])
  }, [type])

  if (!movies) {
    return <Navigate to="/movie/now" />
  }

  return (
    <>
      <div className='w-full flex items-center justify-between py-3 border-b-2 border-gray-500'>
        <button className='text-3xl font-semibold'>{str[0]}</button>
        <Link to={`/movie/${d_type}`} >
          <button>{str[1]}</button>
        </Link>
      </div>
      <hr />
      <div className="w-full h-auto my-5">
        <ListMove movies={movies} />
      </div>
    </>
  )
}

export default Movie