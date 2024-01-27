import logo from 'assets/images/menu/cgvlogo.png'
import { CiUser } from 'react-icons/ci'
import { FaRegNewspaper } from 'react-icons/fa'
import { IoTicketOutline } from 'react-icons/io5'
import Menu from './Menu'

export default function Header() {
  return (
    <>
      <header className="flex flex-row items-center justify-center py-[30px]  text-[#D2001A] bg-[#FFDE00] font-urbanist"
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
        <Menu />
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
      <div>
      </div>
    </>
  )
}

