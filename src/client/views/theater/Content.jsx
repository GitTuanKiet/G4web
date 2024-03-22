import { useState } from 'react'
import { useSelector } from 'react-redux'
import { isMobile } from 'react-device-detect'

import Banner from 'views/home/Banner'
import CardShowtime from './CardShowtime'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'
import Button from 'components/Button'

import { format } from 'date-fns'
import { slides } from 'apis/mockData'

const Content = ({ cinema }) => {
  const { dates, movies } = useSelector((state) => state.data)
  const [selectedDate, setSelectedDate] = useState(dates[0])
  const [show, setShow] = useState(true)

  return (
    <>
      <h1 className="text-primary text-6xl text-center py-10">THEATER</h1>
      <h2 className="text-primary text-3xl text-center py-10">{cinema.name}</h2>

      <div className="w-full h-auto">
        <Banner slides={slides} />
      </div>

      <div className="flex items-center justify-center text-white rounded-b-none relative my-10 ">
        <div className="triangle-left"></div>
        <div className="text-center bg-red-500 py-2 px-6 border-r-transparent inline-flex justify-center gap-x-4 text-lg relative z-10">
          <div className="triangle-left"></div>
          <h1
            className={`ml-3 cursor-pointer hover:opacity-90 hover:text-secondary ${show ? 'text-secondary' : ''}`}
            onClick={() => setShow(true)}
          >
            Lịch Chiếu
          </h1>
          <h1
            className={`mr-3 cursor-pointer hover:opacity-90 hover:text-secondary ${!show ? 'text-secondary' : ''}`}
            onClick={() => setShow(false)}
          >
            Giá vé
          </h1>
          <div className="triangle-right"></div>
        </div>
      </div>

      {show ? (
        <>
          {/* date */}
          <div className="py-2 px-20 border-y-4 border-gray-600  mobile:px-0">
            <Swiper
              slidesPerView={isMobile ? 2 : 7} // Modify slidesPerView based on screen size
              spaceBetween={30}
              navigation={isMobile ? false : true}
              modules={[Navigation]}
              className="calendar-list "
            >
              {dates.map((item) => {
                const check = item._id === selectedDate?._id
                return (
                  <SwiperSlide key={item._id}>
                    <Button
                      onClick={() => setSelectedDate(item)}
                      className="w-20 h-16 mobile:h-12"
                      primary={check}
                      disabled={check}
                    >
                      <div className="flex items-center justify-evenly grid-cols-1">
                        <div className="text-xs">
                          <p>{format(item.value, 'LL')}</p>
                          <p>{format(item.value, 'E')}</p>
                        </div>
                        <span className="text-2xl font-medium">{format(item.value, 'd')}</span>
                      </div>
                    </Button>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>

          {/* filter showtime */}
          <div className="w-full h-auto">
            {movies.map((movie) => (
              <CardShowtime key={movie._id} movie={movie} cinema={cinema} date={selectedDate} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center text-3xl text-primary">Giá vé</div>
      )}
    </>
  )
}

export default Content
