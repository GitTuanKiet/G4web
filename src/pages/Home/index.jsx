// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// project imports
import Banner from 'views/home/Banner'
import Widget from 'views/home/Widget'
import Content from 'views/home/Content'

// ==============================|| HOME ||============================== //

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

const Home = () => {
  return (
    <>
      {/* widget */}
      <div className="w-full py-2 flex items-center justify-center">
        <Widget />
      </div>
      {/* banner */}
      <div className="w-full h-[auto] flex items-center justify-center bg-green-500">
        <Banner slides={slides} />
      </div>

      {/* content */}
      <div className="page-container">
        <Content />
      </div>
    </>
  )
}

export default Home
