import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { initOrder } from 'stores/booking/slice'
import { useDispatch } from 'react-redux'

function MovieItem({ movie }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <>
      <div className="bg-white flex flex-col rounded-lg h-full select-none relative">
        <img src={movie.poster} alt="" className="w-full h-full rounded-xl object-cover" />
        <div>
          <span className="absolute top-0 bg-secondary text-primary py-1 px-3 rounded-md ml-3 mt-3 font-semibold">T{movie.ageRestriction}</span>
        </div>
        <div className="py-4 flex flex-col  w-full absolute bottom-0 text-white text-center ">
          <h3 className="text-center text-2xl">{movie.title}</h3>
          <div className="flex items-center justify-between my-2 mx-8">
            <Button primary className="hover:opacity-100"
              onClick={() => dispatch(initOrder({ navigate, order: 'ticket', data: { movie } }))}>
              Mua ngay
            </Button>
            <Button onClick={() => navigate(`/movie/detail/${movie.slug}`)} primary className="hover:opacity-100">
              Chi tiết
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieItem
