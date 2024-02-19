import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

const fakeArray = [
  {
    title: 'Voucher 2D',
    price: 11000000,
    growthValue: 'Có giá trị đổi vé xem phim 2D',
    imageUrl:
      'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/small_image/245x/1e805736ee3519448ab72df742a3cdae/v/o/voucher1.png'
  }
]

function VoucherDetail({ slug }) {
  const navigate = useNavigate()
  //  use params to fetch api....
  return (
    <div className="w-full">
      <div className=" border-b-2 pb-4 border-black mt-4">
        <h1 className="text-4xl">Voucher Phim</h1>
      </div>
      <div className="flex  gap-x-6 mt-10 w-full">
        <img src={fakeArray[0].imageUrl} alt="" className="w-[450px] h-[450px] object-contain" />
        <div className="w-full">
          <h2 className="font-semibold text-2xl">{fakeArray[0].title}</h2>
          <p className=" mt-1 mb-3 border-b-2">{fakeArray[0].growthValue}</p>
          <div className="flex justify-between">
            <span className="font-bold ">Giá </span> <span className="text-red-600">{fakeArray[0].price}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-bold ">Hạn sử dụng </span> <span>6 tháng</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-bold ">Nơi sử dụng </span> <span>Tất cả các rạp CGV</span>
          </div>
          <div className="flex justify-between mt-2 border-b-2 pb-2">
            <span className="font-bold w-[80%]">Chi tiết </span>
            <p>
              1 voucher có giá trị tương đương 1 vé, không phụ thu hay hoàn trả giá trị chênh lệch. Áp dụng cho ghế
              thường và ghế VIP. Áp dụng vào tất cả các ngày trong tuần.
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <button className="text-rose-500 mr-5" onClick={() => navigate(-1)}>
              &lt;&lt; Quay lại
            </button>
            <Button primary>Mua hoặc tặng quà</Button>
          </div>
        </div>
      </div>

      <div className=" border-b-2 pb-4 border-black">
        <h1 className="text-2xl">Điều kiện và Điều khoản</h1>
      </div>
      <ul className="list-disc">
        <li>
          <b> Cách thức sử dụng:</b> Nhận mã voucher và PIN code từ tin nhắn và email &gt; Đăng nhập tài khoản thành
          viên CGV &gt; Đăng ký voucher tại trang Thành Viên &gt; Chọn hình thức thanh toán bằng Voucher khi đặt vé trực
          tuyến hoặc tại quầy.
        </li>
        <li>Voucher mua tại Quầy Online chỉ có thể đăng ký trực tuyến.</li>
        <li>Không áp dụng tích điểm/tổng chi tiêu cho giao dịch mua voucher.</li>
        <li>Phụ thu đổi vé IMAX, 4DX: +80.000đ</li>
        <li>Khách hàng/Người được tặng sẽ nhận tin nhắn và email chứa mã voucher và số PIN.</li>
        <li>
          Vui lòng bảo mật mã voucher và số PIN và không chia sẻ với bất kỳ ai. Sau khi mã voucher & số PIN được gửi đến
          người nhận, CGV sẽ không chịu trách nhiệm nếu thông tin này bị đánh cắp hoặc sử dụng sai mục đích.
        </li>
        <li>Giao dịch đã hoàn tất không thể đổi hoặc trả lại.</li>
        <li>
          Xem thêm thông tin tại{' '}
          <a href="#" className="text-red-600">
            Câu Hỏi Thường Gặp.
          </a>
        </li>
      </ul>
    </div>
  )
}
export default VoucherDetail
