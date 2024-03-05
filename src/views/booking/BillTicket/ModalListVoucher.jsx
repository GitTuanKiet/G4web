import { useSelector } from 'react-redux'

import Line from 'components/Bill/Line'

const ModalListVoucher = ({ handleSetVoucher }) => {
  const vouchers = useSelector((state) => state.auth.cards?.vouchers)
  return (
    <div className='z-50 w-60 absolute bg-white p-4 rounded-xl shadow-lg'>
      {vouchers ? vouchers.map((item, index) => (
        <button
          key={index}
          className="h-14 gap-5 justify-start items-center py-2 px-4 rounded-lg hover:bg-rose-500 w-full max-md:flex-wrap max-md:max-w-full transition duration-150 ease-in-out"
          onClick={() => handleSetVoucher(item)}
        >
          <Line keyName={item.code} value={item.discount} />
        </button>
      )) : <div>Không có voucher</div>}
    </div>
  )
}

export default ModalListVoucher
