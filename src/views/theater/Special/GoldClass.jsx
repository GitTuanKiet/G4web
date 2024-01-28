
import { useState } from 'react'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


// import required modules
import { Navigation } from 'swiper/modules'

const data = [
  {
    id: 1,
    name: '3D',
    cinemas: []
  },
  {
    id: 2,
    name: 'Gold Class',
    cinemas: [
      {
        id: 1,
        name: 'CGV Hùng Vương Plaza',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-hung-vuong-plaza/'
      },
      {
        id: 2,
        name: 'CGV Liberty Citypoint',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-liberty-citypoint/'
      },
      {
        id: 3,
        name: 'CGV Vincom Đồng Khởi',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-dong-khoi/'
      },
      {
        id: 4,
        name: 'CGV Indochina Plaza Hà Nội',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-iph-ha-noi/'
      },
      {
        id: 5,
        name: 'CGV Vincom Nguyễn Chí Thanh',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-nguyen-chi-thanh/'
      },
      {
        id: 6,
        name: 'CGV Vincom Xuân Khánh',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-xuan-khanh/'
      },
      {
        id: 7,
        name: 'CGV Vincom Long Biên',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-long-bien/'
      },
      {
        id: 8,
        name: 'CGV Vincom Royal City',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-royal-city/'
      },
      {
        id: 9,
        name: 'CGV Vincom Center Landmark 81',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-landmark-81/'
      },
      {
        id: 10,
        name: 'CGV Tràng Tiền Plaza',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-trang-tien-plaza/'
      },
      {
        id: 11,
        name: 'CGV Vincom Hải Phòng',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-hai-phong/'
      },
      {
        id: 12,
        name: 'CGV Aeon Hà Đông',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-aeon-ha-dong/'
      }
    ]
  }
]

export default function TheaterGoldClass() {

  const [showTheater, setShowTheater] = useState(2)

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
              <button onClick={() => (setShowTheater(item.id))} className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full'>
                {item.name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content */}
      {showTheater === 2 && (
        <>
          {/* Title */}
          <div className="w-full min-h-[30] py-10">
            <h1 className="text-primary text-6xl text-center font-semibold">GOLD CLASS</h1>
          </div>

          <div className="w-full py-10 px-20">
            <h3 className="px-4">
        Lấy cảm hứng từ ghế ngồi hạng thương gia trên máy bay, phòng chiếu GOLD CLASS ra đời mang đến một không gian xem phim sang trọng và đẳng cấp cho các tín đồ điện ảnh. GOLD CLASS còn là lựa chọn hoàn hảo cho các sự kiện đặc biệt để tạo nên những kỷ niệm tuyệt vời, khó quên.
            </h3>
            <p>
              <img
                alt=""
                src="https://www.cgv.vn/media/wysiwyg/special-cinemas/000.jpg"
                className="w-full"
              />
              <img
                alt=""
                src="https://www.cgv.vn/media/wysiwyg/special-cinemas/001.jpg"
                className="w-full"
              />
              <img
                alt=""
                src="https://www.cgv.vn/media/wysiwyg/special-cinemas/002.jpg"
                className="w-full"
              />
              <img
                alt=""
                src="https://www.cgv.vn/media/wysiwyg/special-cinemas/003.jpg"
                className="w-full"
              />
              <img
                alt=""
                src="https://www.cgv.vn/media/wysiwyg/special-cinemas/004.jpg"
                className="w-full"
              />
              <img
                alt=""
                src="https://www.cgv.vn/media/wysiwyg/special-cinemas/005.jpg"
                className="w-full"
              />
              <img
                alt=""
                src="https://www.cgv.vn/media/wysiwyg/special-cinemas/006.jpg"
                className="w-full"
              />
            </p>
            <br />
            <h2 className="px-4">
              <strong>
          Cùng trải nghiệm phòng chiếu GOLD CLASS tại các rạp:
              </strong>
            </h2>
          </div>

          {/* List */}
          <div className="w-full h-auto px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {data.find((item) => item.id === showTheater).cinemas.map((item, index) => (
              <div className="w-full h-auto flex items-center justify-center gap-2" key={item.id}>
                <span className="bg-slate-500 px-3 py-1 rounded-full">{index + 1}</span>
                <h4 className="text-xl cursor-pointer hover:text-red-500">{item.name}</h4>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}