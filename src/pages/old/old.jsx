import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function TransactionHistory() {
  const transactions = [
    {
      id_place_order: 'asdfgasfasddfs',
      status: 'hoàn tất',
      movie: {
        id: 1,
        title: 'Star Wars: Episode I - A New Hope',
        slug: 'Star-Wars-Episode-I-A-New-Hope',
        src: 'https://images2.thanhnien.vn/528068263637045248/2023/12/20/4-17030463783122084922355.jpg',
        launch: new Date(),
        start_date: new Date(),
        end_date: new Date()
      },
      cinema: {
        id: 1,
        name: 'CGV Phạm Ngọc Thạch',
        room: 'Room 2, tầng 5'
      },
      price: 800
    },
    {
      id_place_order: 'xcvnhxcvxc',
      status: 'hoàn tất',
      movie: {
        id: 1,
        title: 'Star Wars: Episode I - A New Hope',
        slug: 'Star-Wars-Episode-I-A-New-Hope',
        src: 'https://images2.thanhnien.vn/528068263637045248/2023/12/20/4-17030463783122084922355.jpg',
        launch: new Date(),
        start_date: new Date(),
        end_date: new Date()
      },
      cinema: {
        id: 1,
        name: 'CGV Phạm Ngọc Thạch',
        room: 'Room 2, tầng 5'
      },
      price: 800
    }
  ]

  const navigate = useNavigate()

  const [selected, setSelected] = useState(1)

  const handleSelected = (e) => {
    setSelected(e)
  }

  return (
    <div>
      <h1 className="uppercase bg-[#222222] text-white py-3 text-center">LỊCH SỬ GIAO DỊCH</h1>

      <div className="flex gap-x-5 mt-6">
        <Button onClick={() => handleSelected(1)} primary={selected === 1}>
          Tên phim
        </Button>
        <Button onClick={() => handleSelected(2)} primary={selected === 2}>
          PHOTOTICKET
        </Button>
        <Button onClick={() => handleSelected(3)} primary={selected === 3}>
          QUẦY ONLINE
        </Button>
        <Button onClick={() => handleSelected(4)} primary={selected === 4}>
          CGV EGIFT
        </Button>
      </div>

      <div className="mt-3">
        {transactions.length > 0 ? (
          <div>
            <div>
              {transactions.map((film) => (
                <div key={film.id_place_order} className="mt-3">
                  <div>
                    <div className="flex gap-x-4 mb-3 font-bold">
                      <h2>Mã đặt vé: {film.id_place_order}</h2> <span>(Trạng thái: {film.status})</span>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <img src={film.movie.src} alt="" className="w-[250px]" />
                      <div>
                        <h4 className="text-lg">{film.movie.title}</h4>
                        <p>{film.movie.launch.toLocaleDateString()}</p>
                        <p>
                          From: {film.movie.start_date.toLocaleDateString()} to:{' '}
                          {film.movie.end_date.toLocaleDateString()}
                        </p>
                        <p>{film.cinema.name}</p>
                        <p>{film.cinema.room}</p>
                        <p className="font-bold mb-4">{film.price}</p>
                        <Button primary to={`/show-booked-tiket/${film.id}`}>
                          Xem
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Bạn chưa có giao dịch (đơn hàng) nào.</p>
        )}
      </div>

      <button className="text-rose-500" onClick={() => navigate(-1)}>
        &lt;&lt; Quay lại
      </button>
    </div>
  )
}
export default TransactionHistory
