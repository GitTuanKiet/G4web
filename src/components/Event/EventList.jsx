import { Swiper, SwiperSlide } from 'swiper/react'
function EventList() {
  const fakeList = new Array(10).fill(null)

  return (
    <div>
      <h1 className="text-primary text-3xl text-center my-6 font-semibold">EVENT</h1>

      <div className="flex items-center justify-center py-4 text-white rounded-b-none relative">
        <div className="triangle-left"></div>
        <div className="text-center bg-red-500 py-2 px-6 border-r-transparent inline-flex justify-center gap-x-4 text-lg relative z-10">
          <div className="triangle-left"></div>
          <h1 className='ml-3 cursor-pointer hover:opacity-90'>
              Thành Viên CGV
          </h1>
          <h1 className='mr-3 cursor-pointer hover:opacity-90'>Tin Mới & Ưu Đãi</h1>
          <div className="triangle-right"></div>
        </div>
      </div>

      <div className="event-list ">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={'auto'}>
          {fakeList.map((event, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <img
                    src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22-240x201-04.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
export default EventList
