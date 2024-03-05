import { useDispatch, useSelector } from 'react-redux'

import Chair from './Chair'
import CoupleChair from './CoupleChair'

import { setChair } from 'stores/booking/slice'

const RoomMap = ({ price, setPrice }) => {
  const dispatch = useDispatch()
  const { chair } = useSelector((state) => state.booking)

  const handleChairClick = (item) => {
    if (item.checked) {
      dispatch(setChair([...chair, item.id]))
      setPrice(price + Number(item.price))
    } else {
      dispatch(setChair(chair.filter((id) => id !== item.id)))
      setPrice(price - Number(item.price))
    }
  }

  return (
    <div>
      <div className="flex flex-col min-w-96 justify-center items-center gap-y-2">
        <img
          src="https://s3-alpha-sig.figma.com/img/7b3a/b285/c1b0431a99d8d024da6ca3827bc37327?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eb9Bwl6qemoNjU8NoBkJIi4kaZ4syys5QdNgEbhJ~CehueXGMb0LJOsX2o6DZ4Y4AzgTiEdljF8TBrDeRtwMAZHpS7Oot7yT4mhI3GpMBqg8ldj7gnvBOA19LiDG9tzkbe4yRx78rJRbQSbhHIFRcVzhvWkHj616~GHG7TRQpKPmTMt200rVFbfJ8M3lavXNOdbVcSjUy3RBPSxdGxR4quhFD7OIFDbypYoTk66pr3-uxm5DQEWRPqUFT6Do9WmUOmGlmFII4shhF98IRFRDqW2wfqisMjdya114NHXAwjWb4KIf-omQOTq7xLiZMuFuLcJp7XyoS2R4vKgfcZkvvw__"
          alt="Màn hình chiếu"
        />
        <div className="w-full h-auto grid grid-cols-12 justify-items-center gap-y-2">
          {CoupleChairs?.map((content, index) => (
            <CoupleChair
              key={index}
              id={content.idChair}
              checked={content.isChecked}
              price={content.priceChair}
              setChair={handleChairClick}
            />
          ))}
          {ChairVips?.map((content, index) => (
            <Chair
              key={index}
              id={content.idChair}
              checked={content.isChecked}
              vip
              price={content.priceChair}
              setChair={handleChairClick}
            />
          ))}
          {Chairs?.map((content, index) => (
            <Chair
              key={index}
              id={content.idChair}
              checked={content.isChecked}
              price={content.priceChair}
              setChair={handleChairClick}
            />
          ))}
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
    color: 'bg-green-500'
  },
  {
    name: 'Ghế vip',
    value: 'A1',
    color: 'bg-yellow-500'
  },
  {
    name: 'Ghế đôi',
    value: 'A1,A1',
    color: 'bg-red-500 w-16'
  },
  {
    name: 'Ghế đã đặt',
    value: 'A1',
    color: 'bg-gray-500 opacity-50'
  }
]

const SeatLegend = () => {
  return (
    <div className="px-4 py-2 w-full bg-gray-300 text-[10px] gap-4 flex justify-evenly">
      {seatTypes.map((seatType, index) => {
        return (
          <div key={index} className="flex gap-2">
            <div className={`w-8 h-8 rounded-xl ${seatType.color} flex items-center justify-center`}>
              {seatType.value}
            </div>
            <p className="my-auto text-xl font-mono">{seatType.name}</p>
          </div>
        )
      })}
    </div>
  )
}

const Chairs = [
  {
    idChair: 'A1',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'A2',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'A3',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'A4',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'A5',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'A6',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'A7',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'A8',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'A9',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'A10',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'A11',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'A12',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'A13',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'A14',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'A15',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'B1',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'B2',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'B3',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'B4',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'B5',
    isChecked: true,
    priceChair: '100.000'
  },
  {
    idChair: 'B6',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'B7',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'B8',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'B9',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'B10',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'B11',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'B12',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'B13',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'B14',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'B15',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C1',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C2',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C3',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C4',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C5',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C6',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C7',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C8',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C9',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C10',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C11',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C12',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C13',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C14',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'C15',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D1',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D2',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D3',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D4',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D5',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D6',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D7',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D8',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D9',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D10',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D11',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D12',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D13',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D14',
    isChecked: false,
    priceChair: '100.000'
  },
  {
    idChair: 'D15',
    isChecked: false,
    priceChair: '100.000'
  }
]
const ChairVips = [
  {
    idChair: 'E1',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'E2',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'E3',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'E4',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'E5',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'E6',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'E7',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'E8',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'E9',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'E10',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'E11',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'E12',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'E13',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'E14',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'E15',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F1',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F2',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F3',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F4',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F5',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F6',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F7',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F8',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F9',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F10',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F11',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F12',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F13',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F14',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'F15',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G1',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G2',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G3',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G4',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G5',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G6',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G7',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G8',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G9',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G10',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G11',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G12',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G13',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G14',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'G15',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H1',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H2',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H3',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H4',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H5',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H6',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H7',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H8',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H9',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H10',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H11',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H12',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H13',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H14',
    isChecked: false,
    priceChair: '200.000'
  },
  {
    idChair: 'H15',
    isChecked: false,
    priceChair: '200.000'
  }
]
const CoupleChairs = [
  {
    idChair: 'J1,J2',
    isChecked: false,
    priceChair: '300.000'
  },
  {
    idChair: 'J3,J4',
    isChecked: false,
    priceChair: '300.000'
  },
  {
    idChair: 'J5,J6',
    isChecked: false,
    priceChair: '300.000'
  },
  {
    idChair: 'J7,J8',
    isChecked: false,
    priceChair: '300.000'
  },
  {
    idChair: 'J9,J10',
    isChecked: false,
    priceChair: '300.000'
  },
  {
    idChair: 'J11,J12',
    isChecked: false,
    priceChair: '300.000'
  },
  {
    idChair: 'J13,J14',
    isChecked: false,
    priceChair: '300.000'
  },
  {
    idChair: 'J15,J16',
    isChecked: false,
    priceChair: '300.000'
  },
  {
    idChair: 'J17,J18',
    isChecked: false,
    priceChair: '300.000'
  },
  {
    idChair: 'J19,J20',
    isChecked: false,
    priceChair: '300.000'
  },
  {
    idChair: 'J21,J22',
    isChecked: false,
    priceChair: '300.000'
  },
  {
    idChair: 'J23,J24',
    isChecked: false,
    priceChair: '300.000'
  }
]