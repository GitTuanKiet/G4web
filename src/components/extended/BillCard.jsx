import Button from 'components/Button'
import Logo from 'components/icons/Logo'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const fake = {
  poster: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg',
  name: 'Movie 1',
  category: 'Action, Adventure, Fantasy',
  duration: '109 minutes',
  language: 'English',
  rated: '18+',
  slug: 'movie-1'
}

const fakeList = [
  {
    id: 1,
    ...fake
  },
  {
    id: 2,
    ...fake
  },
  {
    id: 3,
    ...fake
  },
  {
    id: 4,
    ...fake
  },
  {
    id: 5,
    ...fake
  },
  {
    id: 6,
    ...fake
  },
  {
    id: 7,
    ...fake
  },
  {
    id: 8,
    ...fake
  }
]

const Title = ({ title }) => {
  return (
    <div className="flex justify-between items-center">
      <div className='w-16'>
        <Logo />
      </div>
      <p className="font-sans text-xl">{title}</p>
    </div>
  )
}

const Divider = () => {
  return (
    <hr className="border-t border-dashed border-black my-4" />
  )
}

const Info = ({ image, title, data }) => {
  return (
    data && <div className="flex w-full h-40 gap-2">
      <img src={image} alt={title} className="rounded-xl aspect-auto" />
      <div className='flex flex-col justify-evenly'>
        <span className="uppercase text-center font-semibold">{title}</span>
        <div>
          {data.map((item, index) => (
            <p key={index} className='text-left'>{item}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

const ListVoucher = [
  {
    id: 1,
    code: 'ABC123',
    discount: 11
  },
  {
    id: 2,
    code: 'ABC456',
    discount: 22
  },
  {
    id: 3,
    code: 'ABC789',
    discount: 33
  }
]

const ModalListVoucher = ({ listVoucher = ListVoucher, handleSetVoucher }) => {
  return (
    <div className='z-50 w-60 absolute bg-white p-4 rounded-xl shadow-lg'>
      {listVoucher.map((item, index) => (
        <button
          key={index}
          className="h-14 gap-5 justify-start items-center py-2 px-4 rounded-lg hover:bg-rose-500 w-full max-md:flex-wrap max-md:max-w-full transition duration-150 ease-in-out"
          onClick={() => handleSetVoucher(item)}
        >
          <Line data={{ key: item.code, value: item.discount }} />
        </button>
      ))}
    </div>
  )
}

const Line = ({ data }) => {
  const checked = !!data.value
  return (
    checked && (
      <div className="flex justify-between">
        <span className="font-medium">{data.key}:</span>
        <span className="text-gray-500">{data.value}</span>
      </div>
    )
  )
}

const Content = ({ total, data, voucher, setVoucher }) => {
  const [showModal, setShowModal] = useState(false)

  const handleSetVoucher = (value) => {
    setVoucher(value)
    setShowModal(false)
  }

  return (
    <div>
      {data && Object.entries(data).map(([key, value], index) => (
        <Line key={index} data={{ key, value }} />
      ))}
      {total > 0 && <div className='flex justify-between'>
        <span className="font-medium">Mã giảm giá:</span>
        {voucher ? <span>{voucher?.code}<Button small className="min-w-1 ml-1" onClick={() => setVoucher(null)}>x</Button></span> :
          <Button small onClick={() => setShowModal(!showModal)}>+</Button>}
      </div>}
      {showModal && <ModalListVoucher handleSetVoucher={handleSetVoucher} />}
    </div>
  )
}

const GroupButton = ({ step, setStep }) => {
  const start = step === 1
  const end = step === 4
  return (
    <div className="flex justify-around">
      <Button onClick={() => setStep(step - 1)}>{start ? 'Hủy' : 'Quay lại'}</Button>
      <Button primary onClick={() => setStep(step + 1)}>{end ? 'Thanh toán' : 'Tiếp tục'}</Button>
    </div>
  )
}

const Total = ({ discount = 0, price = 100, setTotal }) => {
  const totalEnd = price < discount ? 0 : price - discount
  const vat = totalEnd / 10

  useEffect(() => {
    setTotal(totalEnd+vat)
  }, [totalEnd, setTotal, vat])

  const Unit = ({ value, currency = 'USD' }) => {
    const price = (value).toLocaleString('en', { style: 'currency', currency: currency })
    return (
      <p className="text-blue-500 text-[14px]">{price}</p>
    )
  }
  const data = [
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
      {data.map((item, index) => (
        <Line key={index} data={item} />
      ))}
    </div>
  )
}


const Bill = ({ price, total, setTotal, data, chair, payment, step, setStep }) => {
  const { info, cinema } = data
  const { slug } = useParams()
  const { name, poster, rated, category, duration, language } = fakeList.find((item) => item.slug === slug) || {}
  const [lastInfo, setLastInfo] = useState({})

  const [voucher, setVoucher] = useState(null)

  useEffect(() => {
    setLastInfo({ ...info })
  }, [info])

  useEffect(() => {
    setLastInfo(prev => ({ ...prev, 'Số ghế': chair.join(', ') }))
  }, [chair])

  useEffect(() => {
    setLastInfo(prev => ({ ...prev, 'Phương thức thanh toán': payment }))
  }, [payment])

  return (
    <div>
      <div className="rounded-xl h-auto min-w-80 bg-rose-100 p-4 text-[15px]">
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
export default Bill