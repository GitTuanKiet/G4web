import { useNavigate } from 'react-router-dom'

const fakeArray = [
  {
    title: 'Voucher 2D',
    price: 11000000,
    growthValue: 'Có giá trị đổi vé xem phim 2D',
    imageUrl:
      'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/small_image/245x/1e805736ee3519448ab72df742a3cdae/v/o/voucher1.png'
  },
  {
    title: 'Voucher 2D',
    price: 11000000,
    growthValue: 'Có giá trị đổi vé xem phim 2D',
    imageUrl:
      'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/small_image/245x/1e805736ee3519448ab72df742a3cdae/v/o/voucher1.png'
  },
  {
    title: 'Voucher 2D',
    price: 11000000,
    growthValue: 'Có giá trị đổi vé xem phim 2D',
    imageUrl:
      'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/small_image/245x/1e805736ee3519448ab72df742a3cdae/v/o/voucher1.png'
  },
  {
    title: 'Voucher 2D',
    price: 11000000,
    growthValue: 'Có giá trị đổi vé xem phim 2D',
    imageUrl:
      'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/small_image/245x/1e805736ee3519448ab72df742a3cdae/v/o/voucher1.png'
  },
  {
    title: 'Voucher 2D',
    price: 11000000,
    growthValue: 'Có giá trị đổi vé xem phim 2D',
    imageUrl:
      'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/small_image/245x/1e805736ee3519448ab72df742a3cdae/v/o/voucher1.png'
  }
]
const OnlineStore = () => {
  return (
    <div>
      <div className="flex justify-center my-4 border-b-2 pb-4">
        <img
          src="https://images.foody.vn/images/VeXemPhim_15070301.png"
          className="w-[130px] h-[100px] object-cover"
          alt="voucher"
        />
      </div>

      <div>
        <div className=" border-b-2 pb-4 border-black">
          <h1 className="text-4xl">Voucher Phim</h1>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-4 mobile:grid-cols-none">
          {fakeArray.map((item, index) => (
            <VoucherItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OnlineStore

function VoucherItem({ data }) {
  const navigate = useNavigate()

  const { title, price, growthValue, imageUrl } = data
  return (
    <div className="p-4">
      <h2 onClick={() => navigate('/vouchers/slug_here')} className="font-semibold">
        {title}
      </h2>
      <div>
        <span className="mr-3">{price} đ</span>

        <span className="uppercase text-white bg-rose-600  py-1  px-2 cursor-pointer rounded">Mua</span>
      </div>
      <p className=" mt-1 mb-3">{growthValue}</p>
      <img onClick={() => navigate('/vouchers/slug_here')} src={imageUrl} alt="voucher's image" className="w-full" />
    </div>
  )
}
