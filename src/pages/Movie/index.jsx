import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import ListMove from 'views/movie/ListMovie'

const data = [
  {
    slug: 'now',
    movies: [
      {
        id: 1,
        name: 'Movie 1',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg'
      },
      {
        id: 2,
        name: 'Movie 2',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg'
      },
      {
        id: 3,
        name: 'Movie 3',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg'
      },
      {
        id: 4,
        name: 'Movie 4',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg'
      }
    ]
  },
  {
    slug: 'soon',
    movies: [
      {
        id: 5,
        name: 'Movie 5',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg'
      },
      {
        id: 6,
        name: 'Movie 6',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg'
      },
      {
        id: 7,
        name: 'Movie 7',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg'
      },
      {
        id: 8,
        name: 'Movie 8',
        image: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg'
      }
    ]
  }
]


const Movie = () => {
  const { slug } = useParams()
  const { movies } = data.filter((item) => item.slug === slug)[0]

  const dslug = slug === 'soon' ? 'now' : 'soon'

  const [type, setType] = useState(['Đang chiếu', 'Sắp ra mắt'])
  useEffect(() => {
    if (slug === 'soon') setType(['Sắp ra mắt', 'Đang chiếu'])
    else setType(['Đang chiếu', 'Sắp ra mắt'])
  }, [slug])

  return (
    <>
      <div className='w-full flex items-center justify-between py-3 border-b-2 border-gray-500'>
        <button className='text-3xl font-semibold'>{type[0]}</button>
        <Link to={`/movie/${dslug}`} >
          <button>{type[1]}</button>
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