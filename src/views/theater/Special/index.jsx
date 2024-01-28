import { useState } from 'react'
import { Link } from 'react-router-dom'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


// import required modules
import { Navigation } from 'swiper/modules'
import Partials from './Partials'

export default function TheaterSpecial({ data }) {

  return (
    <>
      <div className="w-full h-auto flex items-center justify-center my-10 border-t-2 border-b-2 border-gray-500">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          navigation={true}

          modules={[Navigation]}
          centeredSlides={true}
          className="calenderSwiper w-full h-full gap-1"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`/theater/special/${item.slug}`}>
                <button
                  className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full'
                >
                  {item.name}
                </button>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Partials data={data} />
    </>
  )
}

