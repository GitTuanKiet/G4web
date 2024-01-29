import { Link } from 'react-router-dom'

const Poster = ({ data }) => {
  return (
    <>
      <Link to={`/news-offer/${data.id}`}>
        <div className='relative w-full h-full flex flex-col justify-start items-center gap-y-2'>
          <img src={data.poster} alt={data.title} className='w-full h-full object-cover' />
          <h4 className='text-xl'>{data.time}</h4>
        </div>
      </Link>
    </>
  )
}

export default Poster