import { Link } from 'react-router-dom'

// assets
import { CiUser } from 'react-icons/ci'
import { FaRegNewspaper } from 'react-icons/fa'
import { IoTicketOutline } from 'react-icons/io5'

// project imports
import Menu from './Menu'
import LogoSection from '../LogoSection'
import Breadcrumb from 'components/extended/Breadcrumb'
import { useSelector } from 'react-redux'

const LinkItem = ({ to, text, icon }) => {
  return (
    <div className="flex py-1">
      {icon}
      <Link
        to={to}
        className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
      >
        {text}
      </Link>
    </div>
  )
}

export default function Header() {
  const { user } = useSelector((state) => state.auth)

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
    !user
      ? {
        id: 'auth',
        title: 'Đăng nhập / Đăng ký',
        icon: <CiUser />,
        to: '/auth'
      }
      : {
        id: 'me',
        title: 'Hello, ' + user.name,
        icon: <CiUser />,
        to: '/profile'
      }
  ]

  return (
    <>
      <header className="flex items-end w-full py-2 gap-5">
        <LogoSection />
        <Menu />
      </header>
      <div className="flex justify-between uppercase font-mono text-xl">
        <Breadcrumb items={[{ text: '1' }, { text: '2' }]} />
        <div className="flex gap-4">
          {subMenu.map((item) => (
            <LinkItem key={item.id} to={item.to} text={item.title} icon={item.icon} />
          ))}
          {/* {user && <p>hello, {user.name}</p>} */}
        </div>
      </div>
      <div></div>
    </>
  )
}
