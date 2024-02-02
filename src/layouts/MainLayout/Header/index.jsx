import { Link } from 'react-router-dom'

// assets
import { CiUser } from 'react-icons/ci'
import { FaRegNewspaper } from 'react-icons/fa'
import { IoTicketOutline } from 'react-icons/io5'

// project imports
import Menu from './Menu'
import LogoSection from '../LogoSection'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import Breadcrumb from 'components/extended/Breadcrumb'

const subMenu = [
  {
    id: 'news-offer',
    title: 'Tin mới & Ưu đãi',
    icon: <FaRegNewspaper />,
    to: '/news-offer'
  },
  {
    id: 'ticket',
    title: 'Vé của tôi',
    icon: <IoTicketOutline />,
    to: '/ticket'
  },
  {
    id: 'auth',
    title: 'Đăng nhập / Đăng ký',
    icon: <CiUser />,
    to: '/auth'
  }
]

const LinkItem = ({ to, text, icon }) => {
  return (
    <div className="flex py-1">
      {icon}
      <Link to={to} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
        {text}
      </Link>
    </div>
  )
}
>>>>>>> ac954ea0a9daa1f417bf5bdcc5293b04a8063264

export default function Header() {
  return (
    <>
      <header className="flex items-end w-full py-2 gap-5">
        <LogoSection />
        <Menu />
      </header>
<<<<<<< HEAD
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
=======
      <div className='flex justify-between uppercase font-mono text-xl'>
        <Breadcrumb items={[{ text: '1' }, { text: '2' }]} />
        <div className='flex gap-4'>
          {subMenu.map((item) => (
            <LinkItem key={item.id} to={item.to} text={item.title} icon={item.icon} />
          ))}
>>>>>>> ac954ea0a9daa1f417bf5bdcc5293b04a8063264
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

