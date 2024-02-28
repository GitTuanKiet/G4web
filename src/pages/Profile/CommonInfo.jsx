import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function CommonInfo() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  return (
    <div>
      <h1 className="uppercase bg-[#222222] text-white py-3 text-center">THÔNG TIN CHUNG</h1>
      <div className=" w-[200px] flex justify-center flex-col">
        <img
          src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/icon-profile-cgv.png"
          alt="avatar"
          className="border border-slate-800 p-2 rounded-full "
        />
        <button className="text-white bg-[#9d9b9b] py-2 px-3 max-w-[100px] block   mt-3">thay đổi</button>
      </div>
      <h2 className="font-semibold ">
        Xin chào <span className="text-primary ">{user.userInfo.name}</span>,
      </h2>
      <p>Với trang này, bạn sẽ quản lý được tất cả thông tin tài khoản của mình.</p>
      <div className="rounded-lg border-2 p-4 grid grid-cols-5 gap-x-6 text-center">
        <div className="border-r-2 border-black">
          <p>
            Cấp độ thẻ <span className="ml-4 font-bold"> 0đ</span>
          </p>
          <p>
            Tổng chi tiêu <span className="ml-4 font-bold"> 0đ</span>{' '}
          </p>
          <p>
            Điểm CGV <span className="ml-4 font-bold"> 0đ</span>
          </p>
        </div>
        <div className="border-r-2 border-black">
          <p>Thẻ quà tặng </p>
          <p className="font-bold">0đ</p>
          <button className="bg-blue-500 text-white py-1 px-2 rounded mt-1">Xem</button>
        </div>

        <div className="border-r-2 border-black">
          <p>Vouncher </p>
          <p className="font-bold">0</p>
          <button className="bg-blue-500 text-white py-1 px-2 rounded mt-1">Xem</button>
        </div>
        <div className="border-r-2 border-black">
          <p>Counpon </p>
          <p className="font-bold">0đ</p>
          <button className="bg-blue-500 text-white py-1 px-2 rounded mt-1">Xem</button>
        </div>
        <div className="">
          <p>Thẻ thành viên </p>
          <p className="font-bold">1</p>
          <button className="bg-blue-500 text-white py-1 px-2 rounded mt-1">Xem</button>
        </div>
      </div>

      <div className="mt-3">
        <h2 className="border-b-2 pb-2">Thông tin tài khoản</h2>
        <div className="mt-6">
          <div className="flex gap-x-14 ">
            <h2 className="uppercase">Liên hệ</h2>
            <button
              className="text-white bg-[#9d9b9b] py-1 px-3 max-w-[100px]"
              onClick={() => navigate('/me/account-detail')}
            >
              Thay đổi
            </button>
          </div>

          <div className="text-gray-400">
            <h2>Tên: {user.userInfo.name}</h2>
            <h2>Email: {user.userInfo.email}</h2>
            <h2>Diện thoại: {user.userInfo.phone || 'Chưa có số điên thoại'}</h2>
          </div>
        </div>
      </div>
      <button className="text-rose-500" onClick={() => navigate(-1)}>
        &lt;&lt; Quay lại
      </button>
    </div>
  )
}
export default CommonInfo
