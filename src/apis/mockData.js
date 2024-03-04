

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

const fake = {
  poster: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg',
  name: 'Movie 1',
  category: 'Action, Adventure, Fantasy',
  duration: '109 minutes',
  language: 'English',
  rated: '18+',
  slug: 'movie-1'
}

export const fakeList = [
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
  },
  {
    id: 8,
    ...fake
  }
]