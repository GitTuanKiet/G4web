import Button from 'components/Button'
import Logo from 'components/icons/Logo'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const data = [
  {
    idCinema: 'Cinema1',
    logo: 'https://s3-alpha-sig.figma.com/img/3112/bfa1/a3a4337c36f6bd2bfc476abff4da69e0?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jfakF-eyeLPlbEPkD3mfULTmahHGxH4-5TSFTO8Fsxg0OOatiLpIPWeISIi4kqlD5mKz22eYvzwem0SzFyhRP5O0jRJ~bkPZJ0vkVfaq~ivM4ktjp-WDpNIbuh29IV4L6ydoJdGi3nLWqVQ4xNpIABkdDb9mcnT2~jfynH7IQl1~HjErXEZWvjU996gLbBhT1TgPuffnY5r0afYRNBFSI93qB~L6ukwsskwZ0Bq653-6LQvTbtWtNHaBJwAEXPR5ShQhx9J4RHAmEf3UaOSv25F4Ncz4RcnGdPsQwfICU1LY9SieQq-gCky-6fMVMnrttV64NfenwebqfQCjGnAjQw__',
    NameCinema: 'CGV Vincom Trần Duy Hưng'
  },
  {
    idFilm: 'Film1',
    NameFilm: 'Xứ sở các nguyên tố',
    ImgFilm: 'https://s3-alpha-sig.figma.com/img/9ac3/e245/56a81bb7940147701a3fc5172296b0a7?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lz2zlEhgTnG9LdpF-zmN6ApYpxJLFS-dvCnqjlLmhBgGy4ansd4AxRaSobFV-yts0pbroQeVeGGA8lyXiyF~XaMo61syaJNKE5LCtTHMQdrhYdyzjE4Um8mlShIpIi6JMzOO5s50dz-yrT-PPqQ34D~0CVBjzix~joAsAIvd8FetoGLvqih6CGycafZbHTHmx2SPT0kPOoIXPkna8IOmelb3BQLCIgNDxjfUGOS-2joy4uSWTBohASEBJ3ZdWvt4IF6o87MNbt0RRcduqv0tGT9Po1WLlrzbVQY6Ae5DQeRCqqIPWSKoPyButr6uzpeP1Gbujh6yx3yULf3bP4hcEg__',
    CategoryFilm: 'Gia đình, Hoạt hình',
    TimeFilm: '109 phút',
    ShowDate: '15/02/2024',
    ScreeningRate: '19:00',
    Room: 'Cinema P1',
    Rated: '18+'
  }
]

const Title = ({ title }) => {
  return (
    <div className="flex justify-between items-center">
      <div className='w-16'>
        <Logo />
      </div>
      <p className="font-sans">{title}</p>
    </div>
  )
}

const Divider = () => {
  return (
    <hr className="border-t border-dashed border-black my-4" />
  )
}

const fakeData = [
  'Gia đình, Hoạt hình',
  '109 phút',
  'Tiếng Anh',
  '18+'
]

const Info = ({ image, title, data = fakeData }) => {
  return (
    <div className="flex w-full h-40 gap-2">
      <img src={image} alt={title} className="rounded-xl aspect-auto" />
      <div className='flex flex-col justify-evenly'>
        <span className="uppercase text-center font-semibold">{title}</span>
        <div>
          {data.map((item, index) => (
            <p key={index} className='text-left'> {item}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

const fakeJSONdata = {
  'Suất chiếu': '19:00, 01/01/2022',
  'Phòng chiếu': 'Cinema P1 - 2D',
  'Số ghế': 'A1, A2'
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

const Content = ({ data = fakeJSONdata, voucher, setVoucher }) => {
  const [showModal, setShowModal] = useState(false)

  const handleSetVoucher = (value) => {
    setVoucher(value)
    setShowModal(false)
  }

  return (
    <div>
      {Object.entries(data).map(([key, value], index) => (
        <Line key={index} data={{ key, value }} />
      ))}
      <div className='flex justify-between'>
        <span className="font-medium">Mã giảm giá:</span>
        {voucher ? <span>{voucher?.code}<Button small className="min-w-1 ml-1" onClick={() => setVoucher(null)}>x</Button></span> :
          <Button small onClick={() => setShowModal(!showModal)}>+</Button>}
      </div>
      {showModal && <ModalListVoucher handleSetVoucher={handleSetVoucher} />}
    </div>
  )
}

const GroupButton = ({ start, end, total }) => {
  const handleNext = () => {
    if (end) {
      toast.info(total)
    }
  }
  return (
    <div className="flex justify-around">
      <Button>{start ? 'Hủy' : 'Quay lại'}</Button>
      <Button primary onClick={handleNext}>{end ? 'Thanh toán' : 'Tiếp tục'}</Button>
    </div>
  )
}

const Total = ({ discount = 0, price = 100, total, setTotal }) => {
  const totalEnd = price - discount
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


const Bill = ({ price, total, setTotal }) => {
  const NameFilm = data[1]?.NameFilm
  const NameCinema = data[0]?.NameCinema
  const LogoCinema = data[0]?.logo
  const ImgFilm = data[1]?.ImgFilm
  const CategoryFilm = data[1]?.CategoryFilm
  const Time = data[1]?.TimeFilm
  const ShowDate = data[1]?.ShowDate
  const ScreeningRate = data[1]?.ScreeningRate
  const Room = data[1]?.Room

  const [voucher, setVoucher] = useState(null)

  return (
    <div>
      <div className="rounded-xl h-auto min-w-80 bg-rose-100 p-4 text-[15px]">
        {/* Title */}
        <Title title={NameCinema} />
        <Divider />
        {/* Info */}
        <Info
          image={ImgFilm}
          title={NameFilm}
        />
        <Divider />
        {/* Content */}
        <Content voucher={voucher} setVoucher={setVoucher} />
        <Divider />
        {/* Total */}
        <Total discount={voucher?.discount} price={price} total={total} setTotal={setTotal} />
        <Divider />
        {/* group button */}
        <GroupButton start={false} end={true} total={total} />
      </div>
    </div>
  )
}
export default Bill