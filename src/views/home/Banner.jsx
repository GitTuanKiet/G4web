import { useRef } from 'react'
import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function App() {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }

  const slides = [
    {
      id: 1,
      src: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_272.jpg',
      alt: 'Slide 1',
      link: 'https://www.cgv.vn/default/newsoffer/cgv-giftcard-tet24/'
    },
    {
      id: 2,
      src: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/r/o/rolling_banner_22.jpg',
      alt: 'Slide 2',
      link: 'https://www.cgv.vn/default/afag.html'
    },
    {
      id: 3,
      src: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/d/h/dhd_rolling_banner.jpg',
      alt: 'Slide 3',
      link: 'https://www.cgv.vn/default/newsoffer/cgv-giftcard-tet2024/'
    },
    {
      id: 4,
      src: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/i/m/imgpsh_fullsize_anim_2.png',
      alt: 'Slide 4',
      link: 'https://www.cgv.vn/default/newsoffer/cgv-dragon-combo/'
    },
    {
      id: 5,
      src: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_269.jpg',
      alt: 'Slide 5',
      link: 'https://www.cgv.vn/default/newsoffer/cgv-nhan-lich/'
    }
  ]

  return (
    <>
      <div className='w-full h-full '>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link to={slide.link}>
                <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover " />
              </Link>
            </SwiperSlide>
          ))}
          <div className="autoplay-progress hidden" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  )
}
