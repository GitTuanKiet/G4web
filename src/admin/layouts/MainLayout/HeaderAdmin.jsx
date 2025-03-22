import { Link } from 'react-router-dom'
import fileImg from 'assets/images/file.png'
import Divider from 'shared/components/Divider'
import Button from 'shared/components/Button'

function HeaderAdmin() {
  return (
    <header>
      <nav className="flex justify-between items-center mt-4 px-20">
        <ul className="left flex items-center gap-x-3">
          <li>
            <Link to="/admin/home">Quản lí phim</Link>
          </li>
          <li>
            <Link to="/admin/home">Quản lí xuất chiếu</Link>
          </li>
        </ul>
        <ul className="right flex items-center gap-x-3">
          {' '}
          <li>
            <Link to="/admin/home" className="flex">
              <img src={fileImg} alt="" />
              Báo cáo doanh thu
            </Link>
          </li>
          <li>
            <Link to="/admin/home">Đăng xuất</Link>
          </li>
        </ul>
      </nav>
      <Divider />
    </header>
  )
}

export default HeaderAdmin
