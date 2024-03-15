import { useSelector } from 'react-redux'

import NormalChair from './NormalChair'
import VipChair from './VipChair'
import CoupleChair from './CoupleChair'

import IcScreen from 'assets/images/film/ic-screen.png'

const RoomMap = () => {
  const { data } = useSelector((state) => state.booking)
  const roomMap = data?.cinema?.roomMap

  const normalChairs = roomMap?.filter((item) => item.type === 'normal')
  const coupleChairs = roomMap?.filter((item) => item.type === 'couple')
  const vipChairs = roomMap?.filter((item) => item.type === 'vip')

  return (
    <div className="min-w-[800px] mobile:min-w-fit">
      <div className="flex flex-col w-full h-auto justify-center  gap-y-2">
        <img src={IcScreen} alt="Màn hình chiếu" className="w-full h-full" />
        <div className="flex flex-col gap-6 justify-center items-center">
          {/* normal */}
          <div className="grid grid-cols-12 gap-4 mobile:grid-cols-6">
            {normalChairs?.map((item, index) => {
              return (
                <NormalChair
                  key={index}
                  chair={item.chair}
                  // className={index % 2 === 0 ? 'ml-8' : ''}
                />
              )
            })}
          </div>
          {/* vip */}
          <div className="grid grid-cols-12 gap-4 mobile:grid-cols-6">
            {vipChairs?.map((item, index) => {
              return (
                <VipChair
                  key={index}
                  chair={item.chair}
                  // className={index % 2 === 0 ? 'ml-8' : ''}
                />
              )
            })}
          </div>
          {/* couple */}
          <div className="grid grid-cols-7 gap-4 mx-auto mobile:grid-cols-3">
            {coupleChairs?.map((item, index) => {
              return (
                <CoupleChair
                  key={index}
                  chair={item.chair}
                  // className={index % 4 == 1 ? 'mr-8' : ''}
                />
              )
            })}
          </div>
        </div>
        <SeatLegend />
      </div>
    </div>
  )
}
export default RoomMap

const seatTypes = [
  {
    name: 'Ghế thường',
    value: 'A1',
    style: 'bg-green-500 w-10'
  },
  {
    name: 'Ghế vip',
    value: 'A1',
    style: 'bg-yellow-500 w-10'
  },
  {
    name: 'Ghế đôi',
    value: 'A1,A1',
    style: 'bg-red-500 w-20'
  },
  {
    name: 'Ghế đã đặt',
    value: 'A1',
    style: 'bg-gray-500 opacity-60 w-10'
  }
]

const SeatLegend = () => {
  return (
    <div className="px-4 py-2 w-full bg-gray-300 text-xs gap-4 flex justify-evenly mobile:flex-col">
      {seatTypes.map((seatType, index) => {
        return (
          <div key={index} className="flex gap-2">
            <div className={`h-10 rounded-xl ${seatType.style} flex items-center justify-center`}>{seatType.value}</div>
            <p className="my-auto text-xl font-mono">{seatType.name}</p>
          </div>
        )
      })}
    </div>
  )
}
