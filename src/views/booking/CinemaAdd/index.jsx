
import { addDays, format, set } from 'date-fns'
import Button from 'components/Button'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const formatDateTime = (date) => {
  return format(date, 'yyyy-MM-dd')
}
const currentDate = formatDateTime(new Date())

const dates = []

dates.push({ id: 0, day: currentDate })

// Thêm 29 ngày tiếp theo vào mảng
for (let i = 1; i < 30; i++) {
  const nextDate = addDays(currentDate, i)
  dates.push({ id: i, day: formatDateTime(nextDate) })
}

// fake data
const fakeCities = [
  {
    id: 1,
    name: 'Hà Nội',
    cinemaIds: [1, 2, 3]
  },
  {
    id: 2,
    name: 'Đà Nẵng',
    cinemaIds: [1, 2, 3]
  },
  {
    id: 3,
    name: 'Hồ Chí Minh',
    cinemaIds: [1, 2, 3]
  },
  {
    id: 4,
    name: 'Đắk Lắk',
    cinemaIds: [1, 2, 3]
  },
  {
    id: 5,
    name: 'Bắc Giang',
    cinemaIds: [1, 2, 3]
  },
  {
    id: 6,
    name: 'Bắc Kạn',
    cinemaIds: [1, 2, 3]
  },
  {
    id: 7,
    name: 'Bạc Liêu',
    cinemaIds: [1, 2, 3]
  },
  {
    id: 8,
    name: 'Bắc Ninh',
    cinemaIds: [1, 2, 3]
  },
  {
    id: 9,
    name: 'Nam Định',
    cinemaIds: [1, 2, 3]
  },
  {
    id: 10,
    name: 'Nghệ An',
    cinemaIds: [1, 2, 3]
  }
]

const fakeTimes = [
  {
    id: 0,
    cinemaId: 1,
    dateId: 0,
    time: ['13:00', '24:00']
  },
  {
    id: 1,
    cinemaId: 1,
    dateId: 1,
    time: ['19:00', '21:00']
  },
  {
    id: 2,
    cinemaId: 2,
    dateId: 0,
    time: ['13:00', '24:00']
  },
  {
    id: 3,
    cinemaId: 2,
    dateId: 1,
    time: ['19:00', '21:00']
  },
  {
    id: 4,
    cinemaId: 3,
    dateId: 0,
    time: ['13:00', '24:00']
  },
  {
    id: 5,
    cinemaId: 3,
    dateId: 1,
    time: ['19:00', '21:00']
  }
]

const fakeCinemas = [
  {
    id: 1,
    typeId: 1,
    name: 'CGV Hùng Vương Plaza'
  },
  {
    id: 2,
    typeId: 2,
    name: 'CGV Vương Hùng'
  },
  {
    id: 3,
    typeId: 3,
    name: 'CGV Vương'
  }
]

const fakeTypes = [
  {
    id: 1,
    name: '2D Phụ đề Anh & Việt'
  },
  {
    id: 2,
    name: '2D Phụ đề Việt'
  },
  {
    id: 3,
    name: '2D Lồng tiếng Việt'
  }
]

function CinemaAdd({ setData }) {
  const { user } = useSelector((state) => state.auth)
  const findCity = fakeCities.find((city) => city?.name == user?.city)
  const [date, setDate] = useState(dates[0])
  const [city, setCity] = useState(findCity || fakeCities[0])
  const [type, setType] = useState(fakeTypes[0])
  const [selectedTime, setSelectedTime] = useState('')

  const [cinemas, setCinemas] = useState(fakeCinemas)
  const [times, setTimes] = useState(fakeTimes)

  //filter list cinemas with city and type
  useEffect(() => {
    const filterCinemas = fakeCinemas.filter((cinema) => city.cinemaIds.includes(cinema.id) && cinema.typeId === type.id)
    setCinemas(filterCinemas)
  }, [city, type])

  // filter list times with date
  useEffect(() => {
    const filterTimes = fakeTimes.filter((time) => time.dateId === date.id)
    setTimes(filterTimes)
  }, [date])

  const handleSetData = (day, time, cinema, type) => {
    setSelectedTime(time)
    const info = {
      'Suất chiếu': `${time}, ${day}`,
      'Loại rạp': type
    }
    setData({ info, cinema })
  }

  useEffect(() => {
    setData({})
    setSelectedTime('')
  }, [date, city, type, setData])

  return (
    <div className="bg-rose-100 flex flex-col h-auto min-w-[1280px]">
      {/* Date */}
      <BorderArround>
        <div className="grid grid-cols-10 gap-y-3">
          {dates.map((item, index) => (
            <Button
              key={index}
              primary={item.id !== date.id}
              disabled={item.id === date.id}
              className='w-20 h-16'
              onClick={() => setDate(item)}
            >
              <div className="flex items-center justify-evenly">
                <div className='text-xs'>
                  <p>{format(item.day, 'LL')}</p>
                  <p>{format(item.day, 'E')}</p>
                </div>
                <span className="text-2xl font-medium">{format(item.day, 'd')}</span>
              </div>
            </Button>
          ))}
        </div>
      </BorderArround>

      {/* City */}
      <BorderArround>
        <div className="grid grid-cols-6 gap-2">
          {fakeCities.map((item) => (
            <Button
              key={item.id}
              primary={item.id !== city.id}
              disabled={item.id === city.id}
              onClick={() => setCity(item)}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </BorderArround>

      {/* Type */}
      <BorderArround>
        <div className="flex gap-x-2">
          {fakeTypes.map((item) => (
            <Button
              key={item.id}
              primary={item.id !== type.id}
              disabled={item.id === type.id}
              onClick={() => setType(item)}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </BorderArround>

      {/* Cinema */}
      <BorderArround>
        {cinemas.map((itemCinema) => {
          const filterTimes = times.filter((time) => time.cinemaId === itemCinema.id)
          return (
            <div key={itemCinema.id} className='flex flex-col gap-y-2'>
              <h1 className="text-4xl">{itemCinema.name}</h1>
              {type && <p>{type.name}</p>}
              <div className="flex gap-4">
                {filterTimes.map((itemTime) => (
                  itemTime.time.map((time, index) =>
                    <Button key={index} small className="h-8"
                      primary={selectedTime !== time}
                      onClick={() => handleSetData(date.day, time, itemCinema.name, type.name)}
                    >{time}</Button>
                  )))}
              </div>
            </div>
          )
        })}
      </BorderArround>
    </div>
  )
}

export default CinemaAdd

function BorderArround({ children }) {
  return <div className="w-full h-auto py-8 px-4 border-y border-gray-500">{children}</div>
}
