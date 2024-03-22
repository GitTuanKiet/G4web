import { useSelector, useDispatch } from 'react-redux'

import Line from 'components/Bill/Line'
import { addDiscount } from 'stores/booking/slice'

const ModalList = ({ setShowModal, voucher, gift }) => {
  const dispatch = useDispatch()
  const vouchers = useSelector((state) => state.user.cards?.vouchers)
  const gifts = useSelector((state) => state.user.cards?.gifts)

  if (voucher) {

    const handleOnClick = (voucher) => {
      dispatch(addDiscount({ voucher }))
      setShowModal(false)
    }

    return (
      <div className='z-[1111111] w-60 absolute bg-white p-4 rounded-xl shadow-lg'>
        {vouchers.length ? vouchers.map((item, index) => (
          <button
            key={index}
            className="h-14 gap-5 justify-start items-center py-2 px-4 rounded-lg hover:bg-rose-500 w-full max-md:flex-wrap max-md:max-w-full transition duration-150 ease-in-out"
            onClick={() => handleOnClick(item)}
          >
            <Line keyName={item.code} value={item.discount} />
          </button>
        )) : <div>Không có voucher</div>}
      </div>
    )
  }
  if (gift) {

    const handleOnClick = (gift) => {
      dispatch(addDiscount({ gift }))
      setShowModal(false)
    }

    return (
      <div className='z-[1111111] w-60 absolute bg-white p-4 rounded-xl shadow-lg'>
        {gifts.length ? gifts.map((item, index) => (
          <button
            key={index}
            className="h-14 gap-5 justify-start items-center py-2 px-4 rounded-lg hover:bg-rose-500 w-full max-md:flex-wrap max-md:max-w-full transition duration-150 ease-in-out"
            onClick={() => handleOnClick(item)}
          >
            <Line keyName={item.name} value={item.value} />
          </button>
        )) : <div>Không có quà tặng</div>}
      </div>
    )
  }
}

export default ModalList
