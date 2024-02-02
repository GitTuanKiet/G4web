import { useParams } from 'react-router-dom'
import { useState } from 'react';
const data = [
  {
    url: 'https://www.cgv.vn/media/cinemas/cms//1/_/1_cgv_tet.png',
    title: 'year of the dragon',
    slug: 'year-of-the-dragon',
    img: [
      {
        title: 'CGV New Year',
        slug: 'anh1',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//1/_/1_cgv_tet.png'
      },
      {
        title: 'Dragon 2024',
        slug: 'anh2',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//3/_/3_dragon.png'
      },
      {
        title: 'Tet 2024',
        slug: 'anh3',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//2/_/2_tet_2024.png'
      }
    ]
  },
  {
    url: 'https://www.cgv.vn/media/cinemas/cms//t/h/thank_you_3-1.jpg',
    title: 'thank you',
    slug: 'thank-you',
    img: [
      {
        title: 'Thank you 01',
        slug: 'anh4',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//t/h/thank_you_3-1.jpg'
      },
      {
        title: 'Thank you 02',
        slug: 'anh5',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//t/h/thank_you_4-1.jpg'
      }
    ]
  }
  ,
  {
    url: 'https://www.cgv.vn/media/cinemas/cms//b/i/birthday_2-1.jpg',
    title: 'birthday',
    slug: 'birthday',
    img: [
      {
        title: 'Thẻ Quà Tặng Sinh Nhật 01',
        slug: 'anh6',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//b/i/birthday_2-1.jpg'
      },
      {
        title: 'Thẻ Quà Tặng Sinh Nhật 01',
        slug: 'anh7',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//b/i/birthday_4-1.jpg'
      }
    ]
  },
  {
    url: 'https://www.cgv.vn/media/cinemas/cms//a/u/autumn_2.jpg',
    title: 'FALL-ING FOR YOU',
    slug: 'fall-ing-for-you',
    img: [
      {
        title: 'Fabulous You',
        slug: 'anh8',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//a/u/autumn_2.jpg'
      },
      {
        title: 'Classic You',
        slug: 'anh9',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//a/u/autumn_1.jpg'
      }
    ]
  }
  ,
  {
    url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_5-1.jpg',
    title: 'CINE',
    slug: 'cine',
    img: [
      {
        title: 'Cine 03',
        slug: 'anh10',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_5-1.jpg'
      },
      {
        title: 'Cine 02',
        slug: 'anh11',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_3-1.jpg'
      },
      {
        title: 'Cine 01',
        slug: 'anh12',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_1-1.jpg'
      }
    ]
  }
]

const price = [
  {
    id: 1,
    price: 100000
  },
  {
    id: 2,
    price: 200000
  },
  {
    id: 3,
    price: 300000
  },
  {
    id: 4,
    price: 500000
  },
  {
    id: 5,
    price: 1000000
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
  const gift = data.find(item => item.img.some(img => img.slug === slug));
  const giftItem = gift.img.find(item => item.slug === slug);
  const ruleContents = content.filter(item => item.title === 'rule');
  const noteContents = content.filter(item => item.title === 'note');
  const [selectedPrice, setSelectedPrice] = useState(price[0].price);

  if (!giftItem) {
    return <div>Error: Gift image not found</div>;
  }
  const handlePriceChange = (event) => {
    const selectedPrice = parseInt(event.target.value, 10);
    setSelectedPrice(selectedPrice);
  };
  return (
    <>
      <div>
        <div className='bg-[#fb4357] mt-10 p-10 rounded-xl text-white flex gap-10'>
          <a href="#" className='text-2xl uppercase font-bold ml-10'>Thẻ quà tặng</a>
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
              {item.price} Đ
            </option>
          ))}
        </select>
              <p className='mt-6'>
                {selectedPrice}
              </p>
           
            </div>
            <hr className='mt-2 border-t-1 border-gray-300' />
            <div className='mt-3 ml-auto'>
              <p className=' text-xl flex gap-2'>
                Tổng tiền : <p className='text-red-500'>{selectedPrice} Đ</p>   
              </p>
              <div className='flex gap-2 ml-auto'>
                <button className='border p-2 bg-red-500  text-white font-bold rounded-xl'>
                  Mua ngay
                </button>
                <button className='border p-2  bg-red-500 text-white font-bold rounded-xl'>
                  Tặng quà 
                </button>
              </div>
            </div>
          </div>

        </div>
        <hr className='border-1 border-gray-400 w-full' />
        <p className='text-center text-xl mt-2'>Điều kiện & điều khoản</p>
        <div>
          {
            ruleContents.map((item, index) => (
              <p className='text-sm'>
                - {item.content}
              </p>
            )) 
            
          }
          <p className='mt-2'>Lưu ý : </p>
          {
            noteContents.map((item, index) => (
              <p className='text-sm'>
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