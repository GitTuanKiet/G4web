
// assets
import logo2 from 'assets/images/menu/kenhcine.gif'
import logo3 from 'assets/images/menu/mua-ve_ngay.png'


// project imports
import Dropdown from 'components/extended/Dropdown'

const movies = {
  id: 'movies',
  title: 'Phim',
  icon: '',
  items: [
    {
      id: 'now',
      text: 'Phim Đang Chiếu',
      to: '/movie/now-showing'
    },
    {
      id: 'soon',
      text: 'Phim Sắp Chiếu',
      to: '/movie/coming-soon'
    }
  ]
}

const theaters = {
  id: 'theaters',
  title: 'Rạp CGV',
  icon: '',
  items: [
    {
      id: 'all',
      text: 'Tất Cả Các Rạp',
      to: '/theaters'
    },
    {
      id: 'special',
      text: 'Rạp Đặc Biệt',
      to: '/theaters/special'
    },
    {
      id: '3d',
      text: 'Rạp 3D',
      to: '/theaters/special/3d'
    }
  ]
}

const members = {
  id: 'members',
  title: 'Thành Viên',
  icon: '',
  items: [
    {
      id: 'auth',
      text: 'Tài Khoản CGV',
      to: '/profile'
    },
    {
      id: 'membership',
      text: 'Quyền Lợi',
      to: '/membership'
    }
  ]
}

const cultureplex = {
  id: 'cultureplex',
  title: 'Cultureplex',
  icon: '',
  items: [
    {
      id: 'online-store',
      text: 'Quầy Online',
      to: '/online-store'
    },
    {
      id: 'cinemas',
      text: 'Thu Rạp & Vé Nhóm',
      to: '/cinemas'
    },
    {
      id: 'cgv-online',
      text: 'E-CGV',
      to: '/cgv-online'
    },
    {
      id: 'gifts',
      text: 'CGV EGift',
      to: '/gifts'
    },
    {
      id: 'rules',
      text: 'CGV Rules',
      to: '/rules'
    }
  ]
}

const menuItems = [movies, theaters, members, cultureplex]

const Menu = () => {
  return (
    <>
      <div className='flex justify-between w-full h-full'>
        <ul className='flex font-semibold uppercase items-end gap-1'>
          {menuItems.map((item) => (
            <Dropdown key={item.id} title={item.title} items={item.items} icon={item.icon} />
          ))}
        </ul>
        <div className='flex items-center'>
          <img
            className="h-27 w-108 relative overflow-hidden shrink-0 object-cover"
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
