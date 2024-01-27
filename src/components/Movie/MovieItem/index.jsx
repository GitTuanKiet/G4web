import Button from 'components/Button'

function MovieItem(movie) {
  return (
    <div className="bg-white flex flex-col rounded-lg  h-full select-none relative">
      <img
        src="https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg"
        alt=""
        className=" w-full h-[500px] rounded-xl object-cover "
      />
      <div>
        <span className='absolute top-0 bg-secondary text-primary py-1 px-3 rounded-md ml-3 mt-3'>18+</span>
      </div>
      <div className="py-4 flex flex-col  w-full absolute bottom-0 text-white text-center ">
        <h3 className='text-center text-2xl'>Harry porter</h3>
        <div className="flex items-center justify-between my-2 mx-8">
          <Button primary className="hover:opacity-100">Buy now</Button>
          <Button primary className="hover:opacity-100">Detail</Button>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
