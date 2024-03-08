import { useParams } from 'react-router-dom'

export default function ShowTicketSuccess() {
  const { slug } = useParams()

  const movie = {
    id_place_order: 'asdfgasfasddfs',
    status: 'hoàn tất',
    title: 'Star Wars: Episode I - A New Hope',
    slug: 'Star-Wars-Episode-I-A-New-Hope',
    src: 'https://images2.thanhnien.vn/528068263637045248/2023/12/20/4-17030463783122084922355.jpg',
    launch: new Date(),
    start_date: new Date(),
    end_date: new Date(),
    cinema: {
      _id: 1,
      name: 'CGV Phạm Ngọc Thạch',
      room: 'Room 2, tầng 5'
    },
    price: 800,
    purchase_date: new Date(),
    tel: '0827382332',
    address: 'Phường 5, đại lộ Thiên Trường, Thành phố Nam Định'
  }

  return (
    <div className="mt-10">
      <h1 className="uppercase bg-[#222222] text-white py-3 text-center ">Mã đặt vé # {movie._id} - Hoàn tất</h1>
      <img
        src="https://vietluat.vn/wp-content/uploads/2019/10/cap-ma-vach-ma-so-800x283.png"
        alt=""
        className="w-full max-w-[300px]"
      />
      <span>Ngày mua hàng: {movie.purchase_date.toDateString()}</span>

      <div className="flex  mx-10">
        <div>
          <h2 className="font-bold text-xl">Địa chỉ thanh toán</h2>
          <p>Việt việt</p>
          <p>No name</p>
          <p>Địa điểm: {movie.address}</p>
          <p>Số điện thoại:{movie.tel} </p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Phương thức thanh toán</h2>
          <span>No payment Information required</span>
        </div>
      </div>
      <h1 className="uppercase bg-[#222222] text-white py-3 text-center mb-3 mt-2">Chi tiết giao dịch</h1>
      <table className="table border-collapse border border-slate-500 hover:table-fixed w-full text-center">
        <thead>
          <tr>
            <th className="border border-slate-600 bg-slate-200">Sản phẩm</th>
            <th className="border border-slate-600 bg-slate-200">Suất chiếu</th>
            <th className="border border-slate-600 bg-slate-200">Vé</th>
            <th className="border border-slate-600 bg-slate-200">Concession(s)</th>
            <th className="border border-slate-600 bg-slate-200">Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-600 ">{movie.title}</td>
            <td className="border border-slate-600 ">{movie.cinema.name}</td>
            <td className="border border-slate-600 ">1961</td>
            <td className="border border-slate-600 ">{movie.price} đồng</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
