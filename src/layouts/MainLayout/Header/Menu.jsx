// assets
import logo2 from 'assets/images/menu/kenhcine.gif'
import logo3 from 'assets/images/menu/mua-ve_ngay.png'

// project imports
import Dropdown from 'components/extended/Dropdown'
import { useState } from 'react'

const movies = {
  _id: 'movies',
  title: 'Phim',
  icon: '',
  items: [
    {
      _id: 'now',
      text: 'Phim Đang Chiếu',
      to: '/movie/now-showing'
    },
    {
      _id: 'soon',
      text: 'Phim Sắp Chiếu',
      to: '/movie/coming-soon'
    }
  ]
}

const theaters = {
  _id: 'theaters',
  title: 'Rạp CGV',
  icon: '',
  items: [
    {
      _id: 'all',
      text: 'Tất Cả Các Rạp',
      to: '/theaters'
    },
    {
      _id: 'special',
      text: 'Rạp Đặc Biệt',
      to: '/theaters/special'
    },
    {
      _id: '3d',
      text: 'Rạp 3D',
      to: '/theaters/special/3d'
    }
  ]
}

const members = {
  _id: 'members',
  title: 'Thành Viên',
  icon: '',
  items: [
    {
      _id: 'auth',
      text: 'Tài Khoản CGV',
      to: '/profile'
    },
    {
      _id: 'membership',
      text: 'Quyền Lợi',
      to: '/membership'
    }
  ]
}

const cultureplex = {
  _id: 'cultureplex',
  title: 'Cultureplex',
  icon: '',
  items: [
    {
      _id: 'online-store',
      text: 'Quầy Online',
      to: '/online-store'
    },
    {
      _id: 'cinemas',
      text: 'Thu Rạp & Vé Nhóm',
      to: '/cinemas'
    },
    {
      _id: 'cgv-online',
      text: 'E-CGV',
      to: '/cgv-online'
    },
    {
      _id: 'gifts',
      text: 'CGV EGift',
      to: '/gifts'
    },
    {
      _id: 'rules',
      text: 'CGV Rules',
      to: '/rules'
    }
  ]
}

const menuItems = [movies, theaters, members, cultureplex]

const Menu = () => {
  return (
    <>
      <div className="flex justify-between w-full h-full ml-auto transform transition-all duration-500 ease-in-out ">
        <ul className="flex desktop:ml-6 tablet:ml-6 laptop-6 font-semibold uppercase items-center   gap-1 mobile:flex-col mobile:items-start">
          {menuItems.map((item) => (
            <Dropdown key={item._id} title={item.title} items={item.items} icon={item.icon} />
          ))}
        </ul>
        <div className="flex items-center  mobile:hidden ">
          <img
            className="h-27 w-[100px] relative overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt="https://kenhcine.cgv.vn"
            src={logo2}
          />
          <img
            className="h-79 w-97 relative overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt="/movie/now"
            src={logo3}
          />
        </div>
      </div>
    </>
  )
}

export default Menu
