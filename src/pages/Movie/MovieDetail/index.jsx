
import { useState } from 'react'
import { format } from 'date-fns'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function MovieDetail() {
  const { slug } = useParams()
  const { movies } = useSelector((state) => state.data)
  const movie = movies.find((item) => item.slug === slug)
  const [showTrailer, setShowTrailer] = useState(false)

  return (
    movie ?
      <div className="page-container">
        <h1 className="text-center text-primary font-semibold text-3xl my-4">Chi tiết phim</h1>
        <div className="flex gap-x-10 justify-start">
          <div>
            <img
              src={movie?.poster}
              alt={movie?.title}
              className="w-full h-auto object-cover  rounded-lg"
            />
          </div>
          <div className="content">
            <h2 className="text-6xl font-semibold">{movie?.title}</h2>
            <ul className="list-disc text-xl">
              <li>Đạo diễn: {movie?.directors.join(', ')}</li>
              <li>Diễn viên: {movie?.actors.join(', ')}</li>
              <li>Ngày phát hành: {format(new Date(movie?.releaseDate), 'dd/MM/yyyy')}</li>
              <li>Ngày kết thúc: {format(new Date(movie?.endDate), 'dd/MM/yyyy')}</li>
              <li>Thể loại: {movie?.genres.join(', ')}</li>
              <li>Thời lượng: {movie?.duration} phút</li>
              <li>Ngôn ngữ: {movie?.language}</li>
              <li>{movie?.ageRestriction}+</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center py-6 text-white rounded-b-none relative">
            <div className="triangle-left"></div>
            <div className="text-center bg-red-500 py-2 px-6 border-r-transparent inline-flex justify-center gap-x-4 text-lg relative z-10">
              <div className="triangle-left"></div>
              <h1 className={`ml-3 cursor-pointer hover:opacity-90 hover:text-secondary ${!showTrailer ? 'text-secondary': ''} `} onClick={() => setShowTrailer(false)}>Chi tiết</h1>
              <h1 className={`mr-3 cursor-pointer hover:opacity-90 hover:text-secondary ${showTrailer ? 'text-secondary': ''} `} onClick={() => setShowTrailer(true)}>Trailer</h1>
              <div className="triangle-right"></div>
            </div>
          </div>
        </div>
        {showTrailer ?
          <div className="aspect-video">
            <Trailer src={movie?.trailer}/>
          </div>
          : <p className="text-sm">{movie.description}</p>}
      </div> :
      <div>
        <h1>Loading ...</h1>
      </div>
  )
}

export default MovieDetail

function Trailer({ src }) {
  return (
    <iframe
      className='w-full h-full object-cover'
      src={src || 'https://www.youtube.com/embed/VyHV0BRtdxo?si=HnfVXtPH3nly71Nl'}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  )
}
