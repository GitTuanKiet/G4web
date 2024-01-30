import logo2 from 'assets/images/menu/kenhcine.gif'
import logo3 from 'assets/images/menu/mua-ve_ngay.png'

export default function Menu() {
  return (
    <>
      <div >
        <ul className='flex gap-[40px] pt-[36px] mr-80 font-medium '>
          <li className='relative group'>
            <a href="#" className=''>PHIM
              <ul className='submenu bg-gray-600 p-3 border rounded-md text-white hidden absolute left-0 w-[200px] z-10 group-hover:block group-focus:block'>
                <li><a href="/movie/now" className='transition-colors duration-300 hover:text-red-500'>Phim Đang Chiếu</a></li>
                <li><a href="/movie/soon" className='transition-colors duration-300 hover:text-red-500'>Phim Sắp Chiếu</a></li>
              </ul>
            </a>
          </li>
          <li className='relative group'>
            <a href="#">RẠP CGV
              <ul className='submenu bg-gray-600 p-3 border rounded-md text-white hidden absolute left-0  w-[200px] z-10 group-hover:block group-focus:block'>
                <li><a href="/theater" className='transition-colors duration-300 hover:text-red-500'>Tất Cả Các Rạp</a></li>
                <li><a href="/theater/special" className='transition-colors duration-300 hover:text-red-500'>Rạp Đặc Biệt</a></li>
                <li><a href="/theater/special/3d" className='transition-colors duration-300 hover:text-red-500'>Rạp 3D</a></li>
              </ul>
            </a>
          </li>
          <li className='relative group'>
            <a href="#">THÀNH VIÊN
              <ul className='submenu bg-gray-600 p-3 border rounded-md text-white hidden absolute left-0  w-[200px] z-10 group-hover:block group-focus:block'>
                <li><a href="/membership" className='transition-colors duration-300 hover:text-red-500'>Tài Khoản CGV</a></li>
                <li><a href="/benefit" className='transition-colors duration-300 hover:text-red-500'>Quyền Lợi</a></li>
              </ul>
            </a>
          </li>
          <li className='relative group'>
            <a href="#">CULTUREPLEX
              <ul className="submenu bg-gray-600 p-3 border rounded-md text-white hidden absolute left-0  w-[200px] z-10 group-hover:block group-focus:block">
                <li><a href="#" className="transition-colors duration-300 hover:text-red-500">Quầy Online</a></li>
                <li><a href="#" className="transition-colors duration-300 hover:text-red-500">Thu Rạp & Vé Nhóm</a></li>
                <li><a href="#" className="transition-colors duration-300 hover:text-red-500">E-CGV</a></li>
                <li><a href="#" className="transition-colors duration-300 hover:text-red-500">CGV EGift</a></li>
                <li><a href="#" className="transition-colors duration-300 hover:text-red-500">CGV Rules</a></li>
              </ul>
            </a>
          </li>
        </ul>
      </div>
      <img
        className="h-[27px] w-[108px] relative overflow-hidden shrink-0 object-cover"
        loading="eager"
        alt=""
        src={logo2}
      />
      <img
        className="h-[79px] w-[97px] relative overflow-hidden shrink-0 object-cover"
        loading="eager"
        alt=""
        src={logo3}
      />
    </>
  )
}

