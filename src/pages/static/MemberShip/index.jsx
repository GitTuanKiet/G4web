
import { useState } from 'react'

// project imports
import Support from 'pages/static/MemberShip/Partials/Support'
import LoyaltyPoint from 'pages/static/MemberShip/Partials/LoyaltyPoint'
import CgvLevel from 'pages/static/MemberShip/Partials'
import Manage from 'pages/static/MemberShip/Partials/Manage'
import BirthdayGift from 'pages/static/MemberShip/Partials/BirthdayGift'


const Membership = () => {
  const [tab, setTab] = useState(0)

  const handleChangeTab = (event, newValue) => {
    setTab(newValue)
  }

  return (
    <>
      {/* Title */}
      <div className="w-full min-h-[30] py-10">
        <h1 className="text-primary text-6xl text-center font-semibold">CGV MEMBERSHIP</h1>
      </div>

      <div className="w-full h-[auto] flex justify-center space-x-10 py-10">
        {/* IMG */}
        <div className="w-[30%] h-auto">
          <img src="https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg" alt="banner" />
        </div>

        {/* Tabs */}
        <div className="w-[70%] flex flex-col space-y-10">
          <div className="flex justify-center space-x-10">
            <button
              className={tab === 1 ? 'text-primary' : 'text-gray-500'}
              onClick={(event) => handleChangeTab(event, 1)}
            >
          CHƯƠNG TRÌNH ĐIỂM THƯỞNG
            </button>
            <button
              className={tab === 2 ? 'text-primary' : 'text-gray-500'}
              onClick={(event) => handleChangeTab(event, 2)}
            >
          Quà tặng sinh nhật
            </button>
            <button
              className={tab === 0 ? 'text-primary' : 'text-gray-500'}
              onClick={(event) => handleChangeTab(event, 0)}
            >
          CẤP ĐỘ THÀNH VIÊN
            </button>
            <button
              className={tab === 3 ? 'text-primary' : 'text-gray-500'}
              onClick={(event) => handleChangeTab(event, 3)}
            >
          QUẢN LÝ TÀI KHOẢN
            </button>
            <button
              className={tab === 4 ? 'text-primary' : 'text-gray-500'}
              onClick={(event) => handleChangeTab(event, 4)}
            >
          BẠN CẦN HỖ TRỢ
            </button>
          </div>

          <div>
            {tab === 0 && <CgvLevel />}
            {tab === 1 && <LoyaltyPoint />}
            {tab === 2 && <BirthdayGift />}
            {tab === 3 && <Manage />}
            {tab === 4 && <Support />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Membership