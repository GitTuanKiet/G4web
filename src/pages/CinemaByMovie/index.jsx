import { useParams } from 'react-router-dom'
import { addDays, format } from 'date-fns'
import Button from 'components/Button'

const currentDate = new Date()

const dates = []

dates.push(currentDate)

// Thêm 30 ngày tiếp theo vào mảng
for (let i = 1; i <= 30; i++) {
  const nextDate = addDays(currentDate, i)
  dates.push(nextDate)
}

// fake data
const fakeCities = [
  {
    id: 1,
    name: 'Hà Nội',
    slug: 'ha-noi'
  },
  {
    id: 2,
    name: 'Đà Nẵng',
    slug: 'da-nang'
  },
  {
    id: 3,
    name: 'Hồ Chí Minh',
    slug: 'ho-chi-minh'
  },
  {
    id: 4,
    name: 'Đắk Lắk',
    slug: 'da-lak'
  },
  {
    id: 5,
    name: 'Bắc Giang',
    slug: 'bac-giang'
  },
  {
    id: 6,
    name: 'Bắc Kạn',
    slug: 'bac-kan'
  },
  {
    id: 7,
    name: 'Bạc Liêu',
    slug: 'bac-lieu'
  },
  {
    id: 8,
    name: 'Bắc Ninh',
    slug: 'bac-ninh'
  },
  {
    id: 9,
    name: 'Nam Định',
    slug: 'nam-dinh'
  },
  {
    id: 10,
    name: 'Nghệ An',
    slug: 'nghe-an'
  }
]

const fakeCinemas = [
  {
    id: 1,
    name: 'CGV Hùng Vương Plaza',
    rooms: [
      {
        id: 1,
        name: 'Rạp 2D',
        startDate: new Date()
        // address: 'Tầng 5, TTTM Vincom Thủ Đức, 216 Võ Văn Ngân, Phư��ng Bình Thọ, Quận Thủ Đức, TP. Hồ Chí Minh',
        // phone: '(028) 7109 8100',
        // email: ''
      },
      {
        id: 2,
        name: 'CGV Vincom Gò Vấp',
        startDate: new Date()
        // address: 'Tầng 5, TTTM Vincom Thủ Đức, 216 Võ Văn Ngân, Phư��ng Bình Thọ, Quận Thủ Đức, TP. Hồ Chí Minh',
        // phone: '(028) 7109 8100',
        // email: ''
      }
    ]
    // link: 'https://www.cgv.vn/default/cinox/site/cgv-hung-vuong-plaza/'
  }
]

function CinemaByMovie() {
  const { slug } = useParams()

  // call api get all cinema which contain the movie

  return (
    <div className="bg-[#fdfcf0]">
      <div className="w-full h-auto flex items-center justify-center mt-10  border-t-2  border-[#000]"></div>

      <BorderArround>
        <div className="grid grid-cols-10 gap-5">
          {dates.map((date, index) => (
            <div
              key={index}
              className={` w-[100px] h-16 flex justify-center  rounded-lg ${
                date === currentDate ? 'border-2 border-black' : ''
              }`}
            >
              <div className="w-full h-full  flex items-center justify-evenly  text-[#717171] cursor-pointer ">
                <div>
                  <p>{format(date, 'LL')}</p>
                  <p>{format(date, 'E')}</p>
                </div>
                <span className="text-5xl">{format(date, 'd')}</span>
              </div>
            </div>
          ))}
        </div>
      </BorderArround>

      <BorderArround>
        <div className="grid grid-cols-8 gap-3">
          {fakeCities.map((city) => (
            <Button primary={city.id === 1} key={city.id}>
              {city.name}
            </Button>
          ))}
        </div>
      </BorderArround>

      <BorderArround>
        <Button primary>2D Phụ đề Anh & Việt</Button>
      </BorderArround>

      <BorderArround>
        <div>
          {fakeCinemas.map((cinema) => (
            <div key={cinema.id}>
              <h1 className="text-[#717171] text-2xl">{cinema.name}</h1>
              <div className=" border-b-gray-300">
                {cinema.rooms.map((room) => (
                  <div key={room.id} className="py-4">
                    <h2 className="mb-2">{room.name}</h2>
                    <Button>{format(room.startDate, 'kk:mm a')}</Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </BorderArround>

      {/* <div className="w-full h-auto flex items-center justify-center mb-10  border-b-2  border-[#000]"></div> */}
    </div>
  )
}

export default CinemaByMovie

function BorderArround({ children }) {
  return <div className="w-full h-auto px-10 py-10   border-b-2 border-[#000]">{children}</div>
}
