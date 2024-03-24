import Sidebar from 'components/extended/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { logout } from 'stores/auth/slice'

function ProfileLayout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
      title: 'Đăng xuất',
      onClick: () => handleLogout()
    }
  ]

  return (
    <div className="flex items-start gap-x-4  h-full ">
      <div className="mobile:absolute">
        <Sidebar sidebarLinks={sidebarLinks} />
      </div>
      <div className="w-full h-fit mt-10 z-8 ">
        <Outlet />
      </div>
    </div>
  )
}
export default ProfileLayout
