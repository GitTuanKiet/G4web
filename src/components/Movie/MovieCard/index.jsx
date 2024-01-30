import Button from 'components/Button'


const MovieCard = ({ movie }) => {
  return (
    <>
      <div className='movie-card'>
        <img
          src="https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg"
          alt=""
          className="w-full h-[500px] rounded-xl object-cover "
        />
        <div className="py-4 flex flex-col  w-full bottom-0 ">
          <h2 className='text-xl'>{movie.name}</h2>
          <h3 className='text-sx'>Thể loại:</h3>
          <h3 className='text-sx'>Thời lượng:</h3>
          <h3 className='text-sx'>Khởi chiếu:</h3>
          <div className="flex items-center justify-between my-2 mx-8">
            <Button primary className="hover:opacity-100">Like</Button>
            <Button primary className="hover:opacity-100">Mua vé</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard
