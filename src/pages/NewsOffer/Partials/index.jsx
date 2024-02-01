import { useParams } from 'react-router-dom'

// project imports
import FormOffer from 'views/newsoffer'

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
  }
]

const NewsOffer = () => {
  const { id } = useParams()
  const newData = data.find(item => item.id === parseInt(id))
  const { title, img, content } = newData

  return (
    <>
      <FormOffer title={title} img={img} content={content} />
    </>
  )
}

export default NewsOffer