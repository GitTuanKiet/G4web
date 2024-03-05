import { axiosPrivate } from './axiosConfig'
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
  { id: 1, dateId: 0, cinemaId: 1, time: ['13:00', '24:00'] },
  { id: 2, dateId: 0, cinemaId: 2, time: ['13:00', '24:00'] },
  { id: 3, dateId: 0, cinemaId: 3, time: ['13:00', '24:00'] },
  { id: 4, dateId: 1, cinemaId: 1, time: ['19:00', '21:00'] },
  { id: 5, dateId: 1, cinemaId: 2, time: ['19:00', '21:00'] },
  { id: 6, dateId: 1, cinemaId: 3, time: ['19:00', '21:00'] }
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

class BookingApi {
  static getListCity = async () => {
    return fakeCities
    // return await axiosPrivate.get('booking/list-city')
  }

  static getListType = async () => {
    return fakeTypes
    // return await axiosPrivate.get('booking/list-type')
  }

  static getListCinema = async () => {
    return fakeCinemas
    // return await axiosPrivate.get('booking/list-cinema')
  }

  static getListTime = async () => {
    return fakeTimes
    // return await axiosPrivate.get('booking/list-time')
  }
}

export default BookingApi