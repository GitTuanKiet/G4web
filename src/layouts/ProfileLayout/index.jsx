import Sidebar from 'components/Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

function ProfileLayout() {
  const isLoggedIn = useSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error('Vui lòng đăng nhập để tiếp tục')
      navigate('/auth')
    }
  }, [isLoggedIn, navigate])

  if (!isLoggedIn) return (
    <div className="w-full h-screen flex items-center justify-center">
      <p>Vui lòng đăng nhập để tiếp tục</p>
    </div>
  )

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
