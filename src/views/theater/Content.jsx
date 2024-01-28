
import React, { useState } from 'react'


import Banner from 'views/home/Banner'
import EventList from 'components/Event/EventList'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


// import required modules
import { Navigation } from 'swiper/modules'


const Content = ({ item }) => {
  const currentDate = new Date()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const dates = Array.from({ length: 366 }, (_, index) => new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + index))
    .filter(date => !isNaN(date.getTime()) && date.getTime() >= currentDate.getTime())

  return (
    <>
      <h1 className="text-primary text-4xl text-center font-semibold py-10">THEATER</h1>
      <h2 className="text-primary text-2xl text-center font-semibold py-10">{item.name}</h2>

      <div className="w-full h-96 bg-green-500 flex items-center justify-center px-20">
        <Banner />
      </div>

      {/* date */}
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
          {dates.map((date) => (
            <SwiperSlide key={date.getTime()}>
              <button onClick={() => setSelectedDate(date)} className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full'>
                {date.toLocaleDateString()}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="page-container ">
        <EventList />
      </div>

    </>
  )
}

export default Content