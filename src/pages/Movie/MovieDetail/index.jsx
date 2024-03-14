import { useState } from 'react'
import { format } from 'date-fns'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Heading from 'components/Heading'
import Button from 'components/Button'
import { initOrder } from 'stores/booking/slice'

function MovieDetail() {
  const { slug } = useParams()
  const { movies } = useSelector((state) => state.data)
  const movie = movies.find((item) => item.slug === slug)
  const [showTrailer, setShowTrailer] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return movie ? (
    <div className="">
      {/* <h1 className="text-center text-primary font-semibold text-3xl my-4">Chi tiết phim</h1> */}
      <Heading>Chi tiết phim</Heading>
      <div className="flex items-start justify-between gap-x-10  mobile:flex-col">
        <div className="max-w-[600px] ">
          <img src={movie?.poster} alt={movie?.title} className="w-full h-full  object-cover  rounded-lg" />
        </div>
        <div className="content mt-4 flex-1">
          <h2 className="text-3xl font-semibold mb-6 mobile:text-xl">{movie?.title}</h2>
          <ul className="list-disc text-xl mobile:ml-4 mobile:text-base ">
            <li>Đạo diễn: {movie?.directors.join(', ')}</li>
            <li>Diễn viên: {movie?.actors.join(', ')}</li>
            <li>Ngày phát hành: {format(new Date(movie?.releaseDate), 'dd/MM/yyyy')}</li>
            <li>Ngày kết thúc: {format(new Date(movie?.endDate), 'dd/MM/yyyy')}</li>
            <li>Thể loại: {movie?.genres.join(', ')}</li>
            <li>Thời lượng: {movie?.duration} phút</li>
            <li>Ngôn ngữ: {movie?.language}</li>
            <li className="mt-2">
              Độ tuổi:
              <span className=" bg-secondary text-primary py-1 px-3 rounded-md ml-3 mt-3 font-semibold">
                {movie.ageRestriction}
              </span>
              - phim được phổ biến đến người xem từ đủ {movie.ageRestriction} tuổi trở lên ({movie.ageRestriction}+)
            </li>
          </ul>

          <Button
            primary
            className="hover:opacity-100 float-right"
            onClick={() => dispatch(initOrder({ navigate, order: 'ticket', data: { movie } }))}
          >
            Mua ngay
          </Button>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center py-6 text-white rounded-b-none relative">
          <div className="triangle-left"></div>
          <div className="text-center bg-red-500 py-2 px-6 border-r-transparent inline-flex justify-center gap-x-4 text-lg relative z-10">
            <div className="triangle-left"></div>
            <h1
              className={`ml-3 cursor-pointer hover:opacity-90 hover:text-secondary ${
                !showTrailer ? 'text-secondary' : ''
              } `}
              onClick={() => setShowTrailer(false)}
            >
              Chi tiết
            </h1>
            <h1
              className={`mr-3 cursor-pointer hover:opacity-90 hover:text-secondary ${
                showTrailer ? 'text-secondary' : ''
              } `}
              onClick={() => setShowTrailer(true)}
            >
              Trailer
            </h1>
            <div className="triangle-right"></div>
          </div>
        </div>
      </div>
      {showTrailer ? (
        <div className="aspect-video">
          <Trailer src={movie?.trailer} />
        </div>
      ) : (
        <p className="text-sm">{movie.description}</p>
      )}
    </div>
  ) : (
    <div>
      <h1>Loading ...</h1>
    </div>
  )
}

export default MovieDetail

function Trailer({ src }) {
  return (
    <iframe
      className="w-full h-full object-cover"
      src={src || 'https://www.youtube.com/embed/VyHV0BRtdxo?si=HnfVXtPH3nly71Nl'}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  )
}
