import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from 'components/Button'
import { useState } from 'react'
import { uploadAvatar } from 'stores/user/slice'
import { CONSTANT } from 'utils/constant'

function CommonInfo() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { info, cards, history, loading, memberCard } = useSelector((state) => state.user)

  const historyLength = history?.ticket.length + history?.voucher.length + history?.gift.length
  const inputId = Math.random().toString(32).substring(2)

  const [image, setImage] = useState(null)

  const handleUploadAvatar = () => {
    const fileInput = document.getElementById(inputId)
    fileInput.click()
  }

  const handleOnAddImage = (e) => {
    if (!e.target.files) return

    const avatar = e.target.files[0]
    setImage(avatar)
    e.target.value = ''
    dispatch(uploadAvatar(avatar))
  }

  return (
    <div>
      <h1 className="uppercase bg-[#222222] text-white py-3 text-center">THÔNG TIN CHUNG</h1>
      <div className="w-full flex justify-center items-center flex-col py-3">
        <img
          src={
            image
              ? URL.createObjectURL(image)
              : info?.avatar
                ? CONSTANT.baseURL + info?.avatar
                : 'https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/icon-profile-cgv.png'
          }
          alt="avatar"
          className="border border-slate-300 p-2 rounded-full w-40 h-40 object-cover mb-3"
        />
        <label htmlFor={inputId}>
          <input
            id={inputId}
            type="file"
            accept="image/*,.png,.jpg,.jpeg,.gif"
            onChange={(e) => handleOnAddImage(e)}
            hidden
          />
          <Button onClick={() => handleUploadAvatar()} primary loading={loading}>
            Thay đổi
          </Button>
        </label>
      </div>
      <h2 className="font-semibold ">
        Xin chào <span className="text-primary ">{info?.name}</span>,
      </h2>
      <p>Với trang này, bạn sẽ quản lý được tất cả thông tin tài khoản của mình.</p>
      <div className="rounded-lg border-2 p-2 grid grid-cols-6 text-center mobile:grid-cols-none tablet:grid-cols-3 gap-y-3">
        <div className="desktop:border-r-2 pr-2 text-left border-black flex flex-col justify-between">
          <p className="flex justify-between ">
            Cấp độ thẻ <span className="font-bold">{memberCard?.level || 'Chưa có'}</span>
          </p>

          <p className="flex justify-between ">
            Điểm <span className="font-bold">{Math.floor(memberCard?.point || 0)}</span>
          </p>

          <p className="flex justify-between ">
            Mã PIN <span className="font-bold">{info?.PIN || 'Chưa có'}</span>
          </p>
        </div>
        <div className="desktop:border-r-2 border-black  flex flex-col mobile:border-b mobile:border-b-gray-100 mobile:pb-2 justify-between items-center">
          <p>Thẻ quà tặng</p>
          <p className="font-bold">{cards?.gifts.length || 0}</p>
          <Button to="/gifts" small>
            Xem
          </Button>
        </div>

        <div className="desktop:border-r-2 border-black  flex flex-col mobile:border-b mobile:border-b-gray-100 mobile:pb-2 justify-between items-center">
          <p>Mã giảm giá</p>
          <p className="font-bold">{cards?.vouchers.length || 0}</p>
          <Button to="/online-store" small>
            Xem
          </Button>
        </div>
        <div className="desktop:border-r-2 border-black  flex flex-col mobile:border-b mobile:border-b-gray-100 mobile:pb-2 justify-between items-center">
          <p>Ưu đãi</p>
          <p className="font-bold">{cards?.coupons.length || 0}</p>
          <Button to="/cinemas" small>
            Xem
          </Button>
        </div>
        <div className="desktop:border-r-2 border-black  flex flex-col mobile:border-b mobile:border-b-gray-100 mobile:pb-2 justify-between items-center">
          <p>Vé xem phim</p>
          <p className="font-bold">{cards?.tickets.length || 0}</p>
          <Button to="/ticket" small>
            Xem
          </Button>
        </div>
        <div className="flex flex-col justify-between items-center">
          <p>Giao dịch</p>
          <p className="font-bold">{historyLength || 0}</p>
          <Button to="/profile/transaction-history" small>
            Xem
          </Button>
        </div>
      </div>

      <h1 className="border-b-2 p-2 uppercase">Thông tin tài khoản</h1>
      <div className="flex justify-between  mobile:flex-col">
        <div className="text-gray-400 px-6 py-3">
          <h2>Tên: {info?.name}</h2>
          <h2>Email: {info?.email}</h2>
          <h2>Điện thoại: {info?.phone || 'Chưa có số điên thoại'}</h2>
          <h2>Thẻ thành viên: {memberCard?.number || 'Chưa có thẻ thành viên'}</h2>
        </div>
        <div className="flex gap-4 justify-end items-center">
          <Button onClick={() => navigate(-1)}>&lt;&lt; Quay lại</Button>
          <Button primary onClick={() => navigate('/profile/account-detail')}>
            Chi Tiết
          </Button>
        </div>
      </div>
    </div>
  )
}
export default CommonInfo
