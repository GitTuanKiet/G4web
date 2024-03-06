
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Divider from 'components/Divider'
import Line from 'components/Bill/Line'
import Unit from 'components/Bill/Unit'
import GroupButton from 'components/Bill/GroupButton'
import Info from 'components/Bill/Info'
import Logo from 'components/icons/Logo'

import { setGift } from 'stores/booking/slice'

import { fakeGifts } from 'apis/mockData'


const BillGift = ({ handleStep }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id, slug } = useParams()
  const { title, img_url } = fakeGifts.find((item) => item.id === Number(id))?.img.find((item) => item.slug === slug) || {}

  const { payment, total } = useSelector((state) => state.booking)

  useEffect(() => {
    if (total === 0) {
      navigate(-1)
    }
  }, [total, navigate])

  useEffect(() => {
    dispatch(setGift({ title }))
  }, [title, dispatch])

  const dataTotal = [
    {
      key: 'Tổng',
      value: Unit({ value: total })
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
          image={img_url}
          title={''}
          data={[]}
        />
        <Divider />
        {/* Content */}
        <div>
          <Line keyName='Giá trị' value={Unit({ value: total })} />
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
export default BillGift