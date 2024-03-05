

const Info = ({ image, title, data }) => {
  return (
    data && <div className="flex w-full h-40 gap-2">
      <img src={image} alt={title} className="rounded-xl aspect-auto" />
      <div className='flex flex-col justify-evenly'>
        <span className="uppercase text-center font-semibold">{title}</span>
        <div>
          {data.map((item, index) => (
            <p key={index} className='text-left'>{item}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Info