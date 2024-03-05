import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { setTotal } from 'stores/booking/slice'
import { fakeGifts } from 'apis/mockData'

const price = [
  {
    id: 1,
    price: 100
  },
  {
    id: 2,
    price: 200
  },
  {
    id: 3,
    price: 300
  },
  {
    id: 4,
    price: 500
  },
  {
    id: 5,
    price: 1000
  }
]

const content = [
  {
    title: 'rule',
    content : 'Thẻ Quà tặng được sử dụng để đổi vé xem phim hoặc thức ăn, đồ uống tại tất cả các cụm rạp CGV; được áp dụng tại quầy & trực tuyến.'
  },
  {
    title: 'rule',
    content : 'Thời hạn sử dụng: 12 tháng kể từ ngày kích hoạt Thẻ Quà tặng.'
  },
  {
    title: 'rule',
    content : 'Khách hàng có thể nạp thêm tiền vào Thẻ Quà tặng hoặc gia hạn thời gian sử dụng với số tiền tối thiểu 10.000Đ tại quầy hoặc trực tuyến.'
  },
  {
    title: 'rule',
    content : 'Khách hàng chọn MUA NGAY, thẻ quà tặng sẽ được kích hoạt ngay vào tài khoản của khách hàng.'
  },
  {
    title: 'rule',
    content : 'Khách hàng chọn TẶNG QUÀ, thông tin thẻ quà tặng bao gồm mã thẻ quà tặng, số PIN, lời nhắn sẽ được gửi qua email của người nhận.(Trong trường hợp không nhận ở hộp thư đến vui lòng kiểm tra hộp thư Junk/Spam )'
  },
  {
    title: 'note',
    content : 'Giao dịch đã hoàn tất không thể đổi hoặc trả lại.'
  },
  {
    title: 'note',
    content : 'Thẻ có giá trị tích lũy điểm và tổng chi tiêu cho người sử dụng, không có giá trị tích lũy điểm và tổng chi tiêu cho người mua.'
  },
  {
    title: 'note',
    content : 'Thẻ không được dùng để đổi sang tiền mặt hoặc mua thẻ khác.'
  },
  {
    title: 'note',
    content : 'Thẻ này là thẻ quà tặng trực tuyến (không quy đổi thành thẻ vật lý), dùng để thanh toán trực tuyến trên web/app CGV hoặc tại quầy thông qua Mã thanh toán (QR Payment Code).'
  },
  {
    title: 'note',
    content : 'Để mua thẻ quà tặng vật lý vui lòng đến rạp CGV trên toàn quốc.'
  }
]

const GiftDetail = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const gift = fakeGifts.find(item => item.img.some(img => img.slug === slug))
  const giftItem = gift.img.find(item => item.slug === slug)
  const ruleContents = content.filter(item => item.title === 'rule')
  const noteContents = content.filter(item => item.title === 'note')
  const [selectedPrice, setSelectedPrice] = useState(price[0].price)

  if (!giftItem) {
    return <div>Error: Gift image not found</div>
  }
  const handlePriceChange = (event) => {
    const selectedPrice = parseInt(event.target.value, 10)
    setSelectedPrice(selectedPrice)
  }

  return (
    <>
      <div>
        <div className='bg-[#fb4357] mt-10 p-10 rounded-xl text-white flex gap-10'>
          <Link to="/gifts" className='text-2xl uppercase font-bold ml-10'>Thẻ quà tặng</Link>
          <button className='border-white border py-1 px-4 rounded-3xl uppercase text-xs font-bold'>Thêm thẻ mới</button>
        </div>
        <div className='flex my-5 gap-5'>
          <div>
            <img src={giftItem.img_url} alt="" className='rounded-2xl w-64' />
          </div>
          <div className='flex flex-col justify-start w-full'>
            <p className='text-[24px]'>{giftItem.title}</p>
            <hr className='border-t-1 border-gray-300' />
            <div className='flex justify-between'>
              <select name="price" id="price" className='w-40 border p-2 mt-2' onChange={handlePriceChange}>
                {price.map((item, index) => (
                  <option key={index} value={item.price}>
                    ${item.price}
                  </option>
                ))}
              </select>
              <p className='mt-6'>
                $ {selectedPrice}
              </p>

            </div>
            <hr className='mt-2 border-t-1 border-gray-300' />
            <div className='mt-3 ml-auto'>
              <h1 className=' text-xl flex gap-2'>
                Tổng tiền : <p className='text-red-500'>$ {selectedPrice}</p>
              </h1>
              <div className='flex gap-2 ml-auto'>
                <Link to={`/booking-gift/${gift.id}/${giftItem.slug}`}>
                  <button
                    className='border p-2 bg-red-500  text-white font-bold rounded-xl'
                    onClick={() => dispatch(setTotal(selectedPrice))}
                  >
                  Mua ngay
                  </button>
                </Link>
                {/* <button className='border p-2  bg-red-500 text-white font-bold rounded-xl'>
                  Tặng quà
                </button> */}
              </div>
            </div>
          </div>

        </div>
        <hr className='border-1 border-gray-400 w-full' />
        <p className='text-center text-xl mt-2'>Điều kiện & điều khoản</p>
        <div>
          {
            ruleContents.map((item, index) => (
              <p className='text-sm' key={index}>
                - {item.content}
              </p>
            ))
          }
          <p className='mt-2'>Lưu ý : </p>
          {
            noteContents.map((item, index) => (
              <p className='text-sm' key={index}>
                - {item.content}
              </p>
            ))
          }

        </div>
      </div>
    </>
  )
}

export default GiftDetail