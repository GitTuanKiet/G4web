
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Divider from 'components/Divider'
import Line from 'components/Bill/Line'
import Unit from 'components/Bill/Unit'
import GroupButton from 'components/Bill/GroupButton'
import Info from 'components/Bill/Info'
import Logo from 'components/icons/Logo'

import { setTotal, setVoucher } from 'stores/booking/slice'


import { fakeArray } from 'apis/mockData'


const BillVoucher = ({ handleStep }) => {
  const dispatch = useDispatch()
  const { code } = useParams()
  const { title, discount, imageUrl, growthValue } = fakeArray.find((item) => item.code === code) || {}

  const { payment } = useSelector((state) => state.booking)
  const totalEnd = discount - discount / 10
  useEffect(() => {
    dispatch(setTotal(totalEnd))
  }, [totalEnd, dispatch])

  useEffect(() => {
    dispatch(setVoucher({ title, code }))
  }, [title, code, dispatch])

  const dataTotal = [
    {
      key: 'Tổng',
      value: Unit({ value: totalEnd })
    }
  ]

  return (
    <div>
      <div className="rounded-xl h-auto w-80 bg-rose-100 p-4 text-[15px]">
        {/* Title */}
        <div className="flex justify-between items-center">
          <div className='w-16'>
            <Logo />
          </div>
          <p className="font-sans text-xl">{title || ''}</p>
        </div>
        <Divider />
        {/* Info */}
        <Info
          image={imageUrl}
          title={''}
          data={[]}
        />
        <Divider />
        {/* Content */}
        <div>
          {Unit({ value: growthValue })}
          <Line keyName='Mã giảm giá' value={code} />
          <Line keyName='Giảm giá' value={Unit({ value: discount })} />
          {payment && <Line keyName='Phương thức thanh toán' value={payment} />}
        </div>
        <Divider />
        {/* Total */}
        <div>
          {dataTotal.map((item, index) => (
            <Line key={index} keyName={item.key} value={item.value} />
          ))}
        </div>
        <Divider />
        {/* group button */}
        <GroupButton handleStep={handleStep} start={0} end={1} />
      </div>
    </div>
  )
}
export default BillVoucher