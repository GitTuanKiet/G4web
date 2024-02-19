import Sidebar from 'components/Sidebar'
import { Outlet } from 'react-router-dom'

function ProfileLayout() {
  return (
    <div className="flex items-start gap-x-4 w-full h-screen">
      <Sidebar />

      <div className="w-full mt-10 ">
        <Outlet />
      </div>
    </div>
  )
}
export default ProfileLayout
