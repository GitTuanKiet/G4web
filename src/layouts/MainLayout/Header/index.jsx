import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
  const location = useLocation()
  const { accessToken } = useSelector((state) => state.auth)
  const { info } = useSelector((state) => state.user)
  const [history, setHistory] = useState([])

  const subMenu = [
    {
      _id: 'news-offer',
      title: 'Tin mới & Ưu đãi',
      icon: <FaRegNewspaper />,
      to: '/news-offer'
    },
    {
      _id: 'ticket',
      title: 'Vé của tôi',
      icon: <IoTicketOutline />,
      to: '/ticket'
    },
    !accessToken
      ? {
          _id: 'auth',
          title: 'Đăng nhập / Đăng ký',
          icon: <CiUser />,
          to: '/auth'
        }
      : {
          _id: 'profile',
          title: 'Hello, ' + info?.name,
          icon: <CiUser />,
          to: '/profile/common-info'
        }
  ]

  useEffect(() => {
    const path = location.pathname.split('/')
    const items = path.map((item, index) => {
      return {
        to: '/' + path.slice(1, index + 1).join('/'),
        text: item
      }
    })
    setHistory(items)
  }, [location])

  return (
    <>
      <header className="flex items-end w-full py-2 gap-5">
        <LogoSection />
        <Menu />
      </header>
      <div className="flex justify-between uppercase font-mono text-xl">
        <Breadcrumb items={history} />
        <div className="flex gap-4">
          {subMenu.map((item) => (
            <LinkItem key={item._id} to={item.to} text={item.title} icon={item.icon} />
          ))}
        </div>
      </div>
      <div></div>
    </>
  )
}
