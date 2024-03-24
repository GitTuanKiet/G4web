import { useParams } from 'react-router-dom'
import Heading from 'components/Heading'

const fake = {
  img: 'https://www.cgv.vn/media/wysiwyg/2024/012024/350x495.png',
  content: [
    {
      title: '1. Thời gian: 26/01/2024 - 17/02/2024',
      content: 'Chương trình sẽ kết thúc sớm khi đủ ngân sách'
    },
    {
      title: '2. Địa điểm sử dụng:',
      content: 'Ứng dụng CGV Cinemas, tại mục Đổi ưu đãi (Rewards)'
    },
    {
      title: '3. Đối tượng Khuyến mại:',
      content: '- Coupons 2 Triệu VNĐ cho thành viên VVIP và VIP tương đương 1000 CGV points'
    },
    {
      content: '- Coupons 1 Triệu VNĐ cho thành viên VVIP và VIP tương đương 100 CGV points'
    },
    {
      content: '- Coupons 500.000 VNĐ cho thành viên VVIP và VIP tương đương 50 CGV points - Coupons 200.000 VNĐ cho thành viên VVIP và VIP tương đương 20 CGV points'
    },
    {
      title: '4.  Nội dung chương trình:',
      content: '- Khách hàng đổi Coupon trên mục Đổi ưu đãi trên APP của CGV và nhận được một mã code kèm theo hướng dẫn sử dụng của CGV để Khách hàng nhận được Phiếu du lịch (Coupon) của Vietravel. - Chụp màn hình giao dịch đổi Coupon thành công.'
    },
    {
      title: 'Hướng dẫn đổi điểm nhận ưu đãi',
      content: 'Bước 1: Truy cập ứng dụng CGV Cinemas và đăng nhập.'
    },
    {
      content: 'Bước 2: Chọn mục Đổi ưu đãi/Reward ở thanh menu trên App CGV'
    },
    {
      content: 'Bước 3: Chọn Vietravel'
    },
    {
      content: 'Bước 4: Chọn Đổi ngay và xác nhận'
    },
    {
      title: 'Lưu ý:'
    }
  ]
}

const data = [
  {
    _id: 1,
    ...fake
  },
  {
    _id: 2,
    ...fake
  },
  {
    _id: 3,
    ...fake
  },
  {
    _id: 4,
    ...fake
  },
  {
    _id: 5,
    ...fake
  },
  {
    _id: 6,
    ...fake
  },
  {
    _id: 7,
    ...fake
  }
]

const FormOffer = () => {
  const { id } = useParams()
  const newData = data.find(item => item._id === parseInt(id))
  const { title, img, content } = newData

  return (
    <>
      <div className="w-full flex items-center justify-start">
        <Heading>{title || 'Khuyến mãi 100%'}</Heading>
      </div>

      <div className="flex items-start justify-start py-4 gap-10 ">
        <div>
          <img
            src={img || 'https://www.cgv.vn/media/wysiwyg/2024/012024/350x495.png'}
            alt=""
            className="w-full h-auto object-cover "
          />
        </div>
        <div>
          {content.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-start gap-y-2">
              {item.title && <h1 className="text-3xl">{item.title}</h1>}
              {item.content && <h1 className="text-xl">{item.content}</h1>}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FormOffer