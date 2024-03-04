
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Content, Divider, GroupButton, Info, Title, Total } from 'components/extended/BillCard'
import { fakeList } from 'apis/mockData'


const BillTicket = ({ price, total, setTotal, data, chair, payment, step, setStep }) => {
  const { type, day, time, cinema } = data
  const { slug } = useParams()
  const { name, poster, rated, category, duration, language } = fakeList.find((item) => item.slug === slug) || {}
  const [lastInfo, setLastInfo] = useState({})
  const [voucher, setVoucher] = useState(null)

  useEffect(() => {
    if (!time || !day || !type) return
    setLastInfo(prev => ({ ...prev, 'Suất chiếu': `${time}, ${day}`, 'Loại rạp': type }))
  }, [time, day, type])

  useEffect(() => {
    setLastInfo(prev => ({ ...prev, 'Ghế': chair.join(', ') }))
  }, [chair])

  useEffect(() => {
    setLastInfo(prev => ({ ...prev, 'Phương thức thanh toán': payment }))
  }, [payment])

  return (
    <div>
      <div className="rounded-xl h-auto w-80 bg-rose-100 p-4 text-[15px]">
        {/* Title */}
        <Title title={cinema || ''} />
        <Divider />
        {/* Info */}
        <Info
          image={poster}
          title={name}
          data={[category, duration, language, rated]}
        />
        <Divider />
        {/* Content */}
        <Content total={total} data={lastInfo} voucher={voucher} setVoucher={setVoucher} />
        <Divider />
        {/* Total */}
        <Total discount={voucher?.discount} price={price} setTotal={setTotal} />
        <Divider />
        {/* group button */}
        <GroupButton step={step} setStep={setStep} total={total} />
      </div>
    </div>
  )
}
export default BillTicket