import Sidebar from 'components/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { logout } from 'stores/auth/slice'

function ProfileLayout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [openSidebar, setOpenSidebar] = useState(false)
  const { accessToken } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout({ navigate }))
  }

  const sidebarLinks = [
    {
      path: 'common-info',
      title: 'Thông tin tài khoản'
    },
    {
      path: 'member-card',
      title: 'Thẻ thành viên'
    },
    {
      path: 'account-detail',
      title: 'Chi tiết tài khoản'
    },
    {
      path: 'change-password',
      title: 'Thay đổi mật khẩu'
    },
    {
      path: 'setup-pin',
      title: 'Thay đổi mã PIN'
    },
    {
      path: 'transaction-history',
      title: 'Lịch sử giao dịch'
    },
    {
      path: '',
      title: 'Đăng xuất',
      onClick: handleLogout
    }
  ]

  useEffect(() => {
    if (!accessToken) {
      navigate('/auth')
    }
  }, [accessToken, navigate])

  return (
    <div className="flex items-start gap-x-4  h-full ">
      {/* <Sidebar sidebarLinks={sidebarLinks} /> */}
      <div className="w-full h-fit mt-10 z-8 ">
        {/* absolute */}
        <Outlet />
      </div>
    </div>
  )
}
export default ProfileLayout
