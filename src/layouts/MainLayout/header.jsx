import React from 'react'
import logo from '../../img/menu/cgvlogo.png'
import logo2 from '../../img/menu/kenhcine.gif'
import logo3 from '../../img/menu/mua-ve_ngay.png'
import background from '../../img/film/vung_vay_ca_map.png'
import { CiUser } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";

export default function Header() {
  return (
    <>
      <header className="flex flex-row items-center justify-center py-[30px]  text-base text-black font-verdana"
      // style={{ backgroundImage: `url(${background})` }}
      >
        <div className="h-[53px] w-[159px] flex flex-col items-start justify-start  pr-[37px] ">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="eager"
            alt=""
            src={logo}
          />
        </div>
        <div >
          <ul className='flex gap-[40px] pt-[36px] mr-80 font-bold '>
            <li className='relative group'>
              <a href="#" className=''>PHIM
                <ul className='submenu bg-gray-500 p-3 border rounded-md text-white hidden absolute left-0 w-[200px] z-10 group-hover:block group-focus:block'>
                  <li><a href="" className='transition-colors duration-300 hover:text-red-500'>Phim Đang Chiếu</a></li>
                  <li><a href="" className='transition-colors duration-300 hover:text-red-500'>Phim Sắp Chiếu</a></li>
                </ul>
              </a>
            </li>
            <li className='relative group'>
              <a href="#">RẠP CGV
                <ul className=' submenu bg-gray-500 p-3 border rounded-md text-white hidden absolute left-0  w-[200px] z-10 group-hover:block group-focus:block'>
                  <li><a href="" className='transition-colors duration-300 hover:text-red-500'>Tất Cả Các Rạp</a></li>
                  <li><a href="" className='transition-colors duration-300 hover:text-red-500'>Rạp Đặc Biệt</a></li>
                  <li><a href="" className='transition-colors duration-300 hover:text-red-500'>Rạp 3D</a></li>
                </ul>
              </a>
            </li>
            <li className='relative group'>
              <a href="#">THÀNH VIÊN
                <ul className=' submenu bg-gray-500 p-3 border rounded-md text-white hidden absolute left-0  w-[200px] z-10 group-hover:block group-focus:block'>
                  <li><a href="" className='transition-colors duration-300 hover:text-red-500'>Tài Khoản CGV</a></li>
                  <li><a href="" className='transition-colors duration-300 hover:text-red-500'>Quyền Lợi</a></li>
                </ul>
              </a>
            </li>
            <li className='relative group'>
              <a href="#">CULTUREPLEX
                <ul class="submenu bg-gray-500 p-3 border rounded-md text-white hidden absolute left-0  w-[200px] z-10 group-hover:block group-focus:block">
                  <li><a href="" class="transition-colors duration-300 hover:text-red-500">Quầy Online</a></li>
                  <li><a href="" class="transition-colors duration-300 hover:text-red-500">Thu Rạp & Vé Nhóm</a></li>
                  <li><a href="" class="transition-colors duration-300 hover:text-red-500">E-CGV</a></li>
                  <li><a href="" class="transition-colors duration-300 hover:text-red-500">CGV EGift</a></li>
                  <li><a href="" class="transition-colors duration-300 hover:text-red-500">CGV Rules</a></li>
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
      </header>
      <div className=' flex gap-10 justify-end pr-5 text-[16px] uppercase text-gray-500'>
        <div className='flex gap-1'>
          <FaRegNewspaper className='my-auto' />
          <a href='' className=''> Tin mới & Ưu đãi </a>
        </div>
        <div className='flex gap-1'>
          <IoTicketOutline className='my-auto' />
          <a href='' className=''> Vé của tôi </a>
        </div>
        <div className='flex gap-1'>
          <CiUser className='my-auto' />
          <a href='' className=''> Đăng nhập / Đăng ký </a>
        </div>
      </div>
    </>
  )
}

