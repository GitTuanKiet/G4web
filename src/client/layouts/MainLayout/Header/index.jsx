import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

// assets
// import { CiUser } from 'react-icons/ci'
import { FaUser } from 'react-icons/fa'
import { PiNewspaperFill } from 'react-icons/pi'
import { BsFillTicketPerforatedFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

import { IconContext } from 'react-icons'

// project imports
import Menu from './Menu'
import LogoSection from '../LogoSection'
import Breadcrumb from 'shared/components/extended/Breadcrumb'
import { useSelector } from 'react-redux'
import Widget from 'client/views/Widget'

const LinkItem = ({ to, text, icon }) => {
  return (
    <div className="flex pb-1 items-center">
      <IconContext.Provider value={{ size: '14px' }}>{icon}</IconContext.Provider>
      <Link
        to={to}
        className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2  dark:hover:text-primary"
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
  const [open, setOpen] = useState(false)

  const subMenu = [
    {
      _id: 'news-offer',
      title: 'Tin mới & Ưu đãi',
      icon: <PiNewspaperFill />,
      to: '/news-offer'
    },
    {
      _id: 'ticket',
      title: 'Vé của tôi',
      icon: <BsFillTicketPerforatedFill />,
      to: '/ticket'
    },
    !accessToken
      ? {
        _id: 'auth',
        title: 'Đăng nhập / Đăng ký',
        icon: <FaUser />,
        to: '/auth'
      }
      : {
        _id: 'profile',
        title: 'Hello, ' + info?.name,
        icon: <FaUser />,
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
    <div className="page-container">
      <header className="  w-full pt-3 pb-6 mobile:pb-2 gap-5 text-slate-900 ">
        <div className="flex items-center   mobile:flex-col mobile:items-start">
          <div className="mobile:flex justify-between items-center mobile:w-full ">
            <div className="mobile:max-h-[40px] mobile:max-w-[100px] ">
              <LogoSection />
            </div>
            <div onClick={() => setOpen(!open)} className=" desktop:hidden tablet:hidden">
              <FaBars />
            </div>
          </div>
          <div className="w-full">
            <span
              className={`${
                open ? '' : 'hidden'
              } transform transition-all duration-500 ease-in-out desktop:block  tablet:block`}
            >
              <Menu />
            </span>
          </div>
        </div>
        <div className="w-full py-2 flex items-center justify-center mobile:hidden">
          <Widget />
        </div>
      </header>
      <div className="flex justify-between  uppercase font-mono text-xl py-1 mobile:flex-col-reverse">
        <Breadcrumb items={history} />
        <div className="flex gap-x-4  mobile:flex-col">
          {subMenu.map((item) => (
            <LinkItem key={item._id} to={item.to} text={item.title} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}
