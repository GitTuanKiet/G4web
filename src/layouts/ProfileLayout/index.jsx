import Sidebar from 'components/Sidebar'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { getToken } from 'utils/auth'

function ProfileLayout() {
  const navigate = useNavigate()
  const access_token = getToken()

  useEffect(() => {
    if (!access_token) {
      toast.error('Vui lòng đăng nhập để tiếp tục')
      navigate('/auth')
    }
  }, [access_token, navigate])

  if (!access_token) return (
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
