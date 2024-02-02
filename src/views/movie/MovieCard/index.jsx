import Button from 'components/Button'


const MovieCard = ({ movie }) => {
  return (
    <>
      <div className='movie-card'>
        <img
          src={movie.poster}
          alt=""
          className="w-full h-[500px] rounded-xl object-cover "
        />
        <div className="py-4 flex flex-col  w-full bottom-0 ">
          <h2 className='text-xl'>{movie.name}</h2>
          <h3 className='text-sx'>Thể loại:{movie.genre}</h3>
          <h3 className='text-sx'>Thời lượng:{movie.duration}</h3>
          <h3 className='text-sx'>Khởi chiếu:{movie.releaseDate}</h3>
          <div className="flex items-center justify-between my-2">
            <Button primary className="hover:opacity-100">Like</Button>
            <Button primary className="hover:opacity-100">Mua vé</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard
