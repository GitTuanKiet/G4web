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
import { isMobile } from 'react-device-detect'

export default function TheaterSpecial({ data }) {
  return (
    <>
      <div className="my-10 border-y-4 border-gray-600">
        <Swiper
          slidesPerView={isMobile ? 2 : 7}
          spaceBetween={isMobile ? 5 : 30}
          pagination={{
            clickable: true
          }}
          navigation={isMobile ? false : true}
          modules={[Navigation]}
          centeredSlides={true}
          className="calendarSwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item._id}>
              <Link to={`/theaters/special/${item.slug}`}>
                <button
                  className="h-[100px] w-[100px] relative rounded-[50%] object-cover border-2 border-black bg-white filter grayscale hover:grayscale-0 active:grayscale-0 focus:outline-none focus:ring focus:border-transparent transition duration-300 "
                  style={{
                    backgroundImage:
                      'url("https://chocanh.vn/wp-content/uploads/hinh-anh-cho-cute-chibi-dep-nhat_101023548.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></button>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Partials />
    </>
  )
}
