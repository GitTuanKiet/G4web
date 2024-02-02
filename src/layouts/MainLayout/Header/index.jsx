
// assets
import { CiUser } from 'react-icons/ci'
import { FaRegNewspaper } from 'react-icons/fa'
import { IoTicketOutline } from 'react-icons/io5'

// project imports
import Menu from './Menu'
import LogoSection from '../LogoSection'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header className="flex flex-row items-center justify-center py-[30px]  text-primary bg-secondary font-urbanist"
      // style={{ backgroundImage: `url(${background})` }}
      >
        <LogoSection />
        <Menu />
      </header>
      <div className=' flex gap-10 justify-end pr-5 text-[16px] uppercase text-gray-500'>
        <div className='flex gap-1'>
          <FaRegNewspaper className='my-auto' />
          <a href='/news-offer' className=''> Tin mới & Ưu đãi </a>
        </div>
        <div className='flex gap-1'>
          <IoTicketOutline className='my-auto' />
          <a href='#' className=''> Vé của tôi </a>
        </div>
        <div className='flex gap-1'>
          <CiUser className='my-auto' />
          <div>
          <Link to='/auth/login' className=''> Đăng nhập  </Link>
          <Link to='/auth/register' className=''> / Đăng ký  </Link>

          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

