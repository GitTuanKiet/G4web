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
      <div className="w-full h-auto flex items-center justify-center my-10 border-t-2 border-b-2 border-gray-500 ">
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
                  className='h-[100px] w-[100px] relative rounded-[50%] object-cover border-2 border-black bg-white filter grayscale hover:grayscale-0 active:grayscale-0 focus:outline-none focus:ring focus:border-transparent transition duration-300 '
                  style={{
                    backgroundImage: 'url("https://chocanh.vn/wp-content/uploads/hinh-anh-cho-cute-chibi-dep-nhat_101023548.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* <img src="https://chocanh.vn/wp-content/uploads/hinh-anh-cho-cute-chibi-dep-nhat_101023548.png" alt={item.name} srcset="" /> */}
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

