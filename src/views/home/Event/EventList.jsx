
import { Swiper, SwiperSlide } from 'swiper/react'
import imagePaths from 'assets/images/imagePaths'
const img = 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22-240x201-04.png'

const fakeList = [
  {
    _id: 1,
    img: img
  },
  {
    _id: 2,
    img: img
  },
  {
    _id: 3,
    img: img
  },
  {
    _id: 4,
    img: img
  },
  {
    _id: 5,
    img: img
  },
  {
    _id: 6,
    img: img
  },
  {
    _id: 7,
    img: img
  }
]

function EventList() {
  return (
    <div>
      <div className='py-10 flex justify-center items-center'>
        <div className='border-y-2 border-black pt-1 flex-grow'></div>
        <img src={imagePaths.event} alt="" className='px-4' />
        <div className='border-y-2 border-black pt-1 flex-grow'></div>
      </div>

      <div className="flex items-center justify-center pb-6 text-white rounded-b-none relative">
        <div className="triangle-left"></div>
        <div className="text-center bg-red-500 py-2 px-6 border-r-transparent inline-flex justify-center gap-x-4 text-lg relative z-10">
          <div className="triangle-left"></div>
          <h1 className="ml-3 cursor-pointer hover:opacity-90 hover:text-secondary mobile:text-base  ">
            Thành Viên CGV
          </h1>
          <h1 className="mr-3 cursor-pointer hover:opacity-90 hover:text-secondary  mobile:text-base ">
            Tin Mới & Ưu Đãi
          </h1>
          <div className="triangle-right"></div>
        </div>
      </div>

      <div className="event-list ">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={'auto'}>
          {fakeList.map((event) => (
            <SwiperSlide key={event._id}>
              <img src={event.img} className="w-full h-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
export default EventList
