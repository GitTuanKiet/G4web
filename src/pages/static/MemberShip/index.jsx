import { useState } from 'react'

// project imports
import Support from 'pages/static/MemberShip/Partials/Support'
import LoyaltyPoint from 'pages/static/MemberShip/Partials/LoyaltyPoint'
import CgvLevel from 'pages/static/MemberShip/Partials'
import Manage from 'pages/static/MemberShip/Partials/Manage'
import BirthdayGift from 'pages/static/MemberShip/Partials/BirthdayGift'
import Heading from 'components/Heading'

const Membership = () => {
  const [tab, setTab] = useState(0)

  const handleChangeTab = (event, newValue) => {
    setTab(newValue)
  }

  return (
    <>
      {/* Title */}
      <div className="w-full min-h-[30] py-10">
        <Heading>CGV MEMBERSHIP</Heading>
      </div>

      <div className="w-full h-[auto] flex justify-center   mobile:flex-col ">
        {/* IMG */}
        <div className="w-[30%] h-auto mobile:w-full ">
          <img
            src="https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg"
            alt="banner"
            className="rounded-xl"
          />
        </div>

        {/* Tabs */}
        <div className="w-[68%] mobile:w-full flex flex-col ">
          <div className="flex justify-center mobile:justify-start gap-x-6  mobile:flex-col">
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
              QÙA TẶNG SINH NHẬT
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

          <div className="text-justify">
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
