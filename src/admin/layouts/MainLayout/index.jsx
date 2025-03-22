import { Outlet } from 'react-router-dom'
import FooterAdmin from './FooterAdmin'
import HeaderAdmin from './HeaderAdmin'

function MainLayout() {
  return (
    <div className="px-4">
      <HeaderAdmin />
      <main className="container mx-auto mb-[100px]">
        <Outlet />
      </main>
      <FooterAdmin />
    </div>
  )
}

export default MainLayout
