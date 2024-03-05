
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Content from './Content'
import Divider from 'components/Divider'
import Line from 'components/Bill/Line'
import Unit from 'components/Bill/Unit'
import GroupButton from '../../../components/Bill/GroupButton'
import Info from '../../../components/Bill/Info'
import Logo from 'components/icons/Logo'

import { setTotal } from 'stores/booking/slice'


import { fakeList } from 'apis/mockData'


const BillTicket = ({ price, handleStep }) => {
  const dispatch = useDispatch()
  const { slug } = useParams()
  const { name, poster, rated, category, duration, language } = fakeList.find((item) => item.slug === slug) || {}

  const { voucher, cinema } = useSelector((state) => state.booking)
  const { discount } = voucher || { discount: 0 }
  const totalEnd = price < discount ? 0 : price - discount
  const vat = totalEnd / 10

  useEffect(() => {
    dispatch(setTotal(totalEnd+vat))
  }, [totalEnd, vat, dispatch])

  const dataTotal = [
    {
      key: 'Giá vé',
      value: Unit({ value: price })
    },
    {
      key: 'Giảm giá',
      value: Unit({ value: discount })
    },
    {
      key: 'Phí VAT',
      value: Unit({ value: vat })
    },
    {
      key: 'Tổng',
      value: Unit({ value: totalEnd+vat })
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
          <p className="font-sans text-xl">{cinema?.name || ''}</p>
        </div>
        <Divider />
        {/* Info */}
        <Info
          image={poster}
          title={name}
          data={[category, duration, language, rated]}
        />
        <Divider />
        {/* Content */}
        <Content />
        <Divider />
        {/* Total */}
        <div>
          {dataTotal.map((item, index) => (
            <Line key={index} keyName={item.key} value={item.value} />
          ))}
        </div>
        <Divider />
        {/* group button */}
        <GroupButton handleStep={handleStep} start={0} end={4} />
      </div>
    </div>
  )
}
export default BillTicket