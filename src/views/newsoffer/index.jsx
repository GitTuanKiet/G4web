

const FormOffer = ({ title, img, content }) => {
  return (
    <>
      <div className="w-full flex items-center justify-start">
        <h2 className="text-primary text-3xl my-6 font-semibold">{title || 'Khuyến mãi 100%'}</h2>
      </div>

      <div className="flex items-start justify-start py-4 gap-10 ">
        <div>
          <img
            src={img || 'https://www.cgv.vn/media/wysiwyg/2024/012024/350x495.png'}
            alt=""
            className="w-auto h-auto object-cover " />
        </div>
        <div>
          {content.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-start gap-y-2">
              {item.title && <h1 className='text-3xl'>{item.title}</h1>}
              {item.content && <h1 className='text-xl'>{item.content}</h1>}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FormOffer
