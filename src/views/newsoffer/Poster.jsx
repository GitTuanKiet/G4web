import { Link } from 'react-router-dom'
import { FaCalendarAlt } from 'react-icons/fa'

const Poster = ({ data }) => {
  return (
    <>
      <Link to={`/news-offer/${data._id}`}>
        <div className='w-full h-full flex flex-col gap-2'>
          <img src={data.poster} alt={data.title} className='w-full h-full object-cover' />
          <div className='flex items-center justify-start gap-2 py-2 text-red-500 font-semibold'>
            <FaCalendarAlt />
            <h4>{data.time}</h4>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Poster