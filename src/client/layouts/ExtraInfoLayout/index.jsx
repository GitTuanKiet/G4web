import Sidebar from 'components/extended/Sidebar'
import { Outlet } from 'react-router-dom'

const sidebarLinks = [
  {
    path: 'about ',
    title: 'Giới thiệu'
  },
  {
    path: 'contact',
    title: 'Liên hệ CGV'
  },
  {
    path: 'policy',
    title: 'Điều khoản chung'
  },
  {
    path: 'rule-transaction',
    title: 'Điều khoản giao dịch'
  },
  {
    path: 'payment-policy',
    title: 'Chính sách thanh toán'
  },
  {
    path: 'security-policy',
    title: 'Chính sách bảo mật'
  },
  {
    path: 'faq',
    title: 'Câu hỏi thường gặp'
  },
  {
    path: 'partners',
    title: 'Dành cho đối tác'
  }
]

function ExtraInfoLayout() {
  return (
    <div className="flex items-start gap-x-4 w-full ">
      <div className="mobile:absolute">
        <Sidebar sidebarLinks={sidebarLinks} />
      </div>

      <div className="w-full mt-10 bg-[##fdfcf0] text-[#636363] text-justify  ">
        <Outlet />
      </div>
    </div>
  )
}
export default ExtraInfoLayout
