import { addDays } from 'date-fns'

export const slides = [
  {
    _id: 1,
    src: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_272.jpg',
    alt: 'Slide 1',
    link: 'https://www.cgv.vn/default/newsoffer/cgv-giftcard-tet24/'
  },
  {
    _id: 2,
    src: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/r/o/rolling_banner_22.jpg',
    alt: 'Slide 2',
    link: 'https://www.cgv.vn/default/afag.html'
  },
  {
    _id: 3,
    src: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/d/h/dhd_rolling_banner.jpg',
    alt: 'Slide 3',
    link: 'https://www.cgv.vn/default/newsoffer/cgv-giftcard-tet2024/'
  },
  {
    _id: 4,
    src: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/i/m/imgpsh_fullsize_anim_2.png',
    alt: 'Slide 4',
    link: 'https://www.cgv.vn/default/newsoffer/cgv-dragon-combo/'
  },
  {
    _id: 5,
    src: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_269.jpg',
    alt: 'Slide 5',
    link: 'https://www.cgv.vn/default/newsoffer/cgv-nhan-lich/'
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
  },
  {
    _id: 8,
    ...fake
  }
]

export const fakeArray = [
  {
    title: 'Voucher 2D',
    discount: 10,
    code: 'CGV2D',
    growthValue: 'Có giá trị đổi vé xem phim 2D',
    imageUrl:
      'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/small_image/245x/1e805736ee3519448ab72df742a3cdae/v/o/voucher1.png'
  }
]

export const fakeGifts = [
  {
    _id: 1,
    url: 'https://www.cgv.vn/media/cinemas/cms//1/_/1_cgv_tet.png',
    title: 'year of the dragon',
    slug: 'year-of-the-dragon',
    img: [
      {
        title: 'CGV New Year',
        slug: 'anh1',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//1/_/1_cgv_tet.png'
      },
      {
        title: 'Dragon 2024',
        slug: 'anh2',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//3/_/3_dragon.png'
      },
      {
        title: 'Tet 2024',
        slug: 'anh3',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//2/_/2_tet_2024.png'
      }
    ]
  },
  {
    _id: 2,
    url: 'https://www.cgv.vn/media/cinemas/cms//t/h/thank_you_3-1.jpg',
    title: 'thank you',
    slug: 'thank-you',
    img: [
      {
        title: 'Thank you 01',
        slug: 'anh4',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//t/h/thank_you_3-1.jpg'
      },
      {
        title: 'Thank you 02',
        slug: 'anh5',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//t/h/thank_you_4-1.jpg'
      }
    ]
  },
  {
    _id: 3,
    url: 'https://www.cgv.vn/media/cinemas/cms//b/i/birthday_2-1.jpg',
    title: 'birthday',
    slug: 'birthday',
    img: [
      {
        title: 'Thẻ Quà Tặng Sinh Nhật 01',
        slug: 'anh6',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//b/i/birthday_2-1.jpg'
      },
      {
        title: 'Thẻ Quà Tặng Sinh Nhật 01',
        slug: 'anh7',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//b/i/birthday_4-1.jpg'
      }
    ]
  },
  {
    _id: 4,
    url: 'https://www.cgv.vn/media/cinemas/cms//a/u/autumn_2.jpg',
    title: 'FALL-ING FOR YOU',
    slug: 'fall-ing-for-you',
    img: [
      {
        title: 'Fabulous You',
        slug: 'anh8',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//a/u/autumn_2.jpg'
      },
      {
        title: 'Classic You',
        slug: 'anh9',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//a/u/autumn_1.jpg'
      }
    ]
  },
  {
    _id: 5,
    url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_5-1.jpg',
    title: 'CINE',
    slug: 'cine',
    img: [
      {
        title: 'Cine 03',
        slug: 'anh10',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_5-1.jpg'
      },
      {
        title: 'Cine 02',
        slug: 'anh11',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_3-1.jpg'
      },
      {
        title: 'Cine 01',
        slug: 'anh12',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_1-1.jpg'
      }
    ]
  }
]

const mockCities = [
  {
    _id: 1,
    name: 'Hồ Chí Minh'
  },
  {
    _id: 2,
    name: 'Hà Nội'
  },
  {
    _id: 3,
    name: 'Đà Nẵng'
  },
  {
    _id: 4,
    name: 'Hải Phòng'
  },
  {
    _id: 5,
    name: 'Cần Thơ'
  }
]

const fakeRoomMap = [
  {
    chair: 'A1',
    type: 'normal'
  },
  {
    chair: 'A2',
    type: 'normal'
  },
  {
    chair: 'A3',
    type: 'normal'
  },
  {
    chair: 'A4',
    type: 'normal'
  },
  {
    chair: 'A5',
    type: 'normal'
  },
  {
    chair: 'A6',
    type: 'normal'
  },
  {
    chair: 'A7',
    type: 'normal'
  },
  {
    chair: 'A8',
    type: 'normal'
  },
  {
    chair: 'A9',
    type: 'normal'
  },
  {
    chair: 'A10',
    type: 'normal'
  },
  {
    chair: 'A11',
    type: 'normal'
  },
  {
    chair: 'A12',
    type: 'normal'
  },
  {
    chair: 'A13',
    type: 'normal'
  },
  {
    chair: 'A14',
    type: 'normal'
  },
  {
    chair: 'A15',
    type: 'normal'
  },
  {
    chair: 'A16',
    type: 'normal'
  },
  {
    chair: 'A17',
    type: 'normal'
  },
  {
    chair: 'A18',
    type: 'normal'
  },
  {
    chair: 'A19',
    type: 'normal'
  },
  {
    chair: 'A20',
    type: 'normal'
  },
  {
    chair: 'A21',
    type: 'normal'
  },
  {
    chair: 'A22',
    type: 'normal'
  },
  {
    chair: 'A23',
    type: 'normal'
  },
  {
    chair: 'A24',
    type: 'normal'
  },
  {
    chair: 'A25',
    type: 'vip'
  },
  {
    chair: 'A26',
    type: 'vip'
  },
  {
    chair: 'A27',
    type: 'vip'
  },
  {
    chair: 'A28',
    type: 'vip'
  },
  {
    chair: 'A29',
    type: 'vip'
  },
  {
    chair: 'A30',
    type: 'vip'
  },
  {
    chair: 'A31',
    type: 'vip'
  },
  {
    chair: 'A32',
    type: 'vip'
  },
  {
    chair: 'A33',
    type: 'vip'
  },
  {
    chair: 'A34',
    type: 'vip'
  },
  {
    chair: 'A35',
    type: 'vip'
  },
  {
    chair: 'A36',
    type: 'vip'
  },
  {
    chair: 'A37',
    type: 'vip'
  },
  {
    chair: 'A38',
    type: 'vip'
  },
  {
    chair: 'A39',
    type: 'vip'
  },
  {
    chair: 'A40',
    type: 'vip'
  },
  {
    chair: 'A41',
    type: 'vip'
  },
  {
    chair: 'A42',
    type: 'vip'
  },
  {
    chair: 'A43',
    type: 'vip'
  },
  {
    chair: 'A44',
    type: 'vip'
  },
  {
    chair: 'A45',
    type: 'vip'
  },
  {
    chair: 'A46',
    type: 'vip'
  },
  {
    chair: 'A47',
    type: 'vip'
  },
  {
    chair: 'A48',
    type: 'vip'
  },
  {
    chair: 'A49,A50',
    type: 'couple'
  },
  {
    chair: 'A51,A52',
    type: 'couple'
  },
  {
    chair: 'A53,A54',
    type: 'couple'
  },
  {
    chair: 'A55,A56',
    type: 'couple'
  },
  {
    chair: 'A57,A58',
    type: 'couple'
  },
  {
    chair: 'A59,A60',
    type: 'couple'
  },
  {
    chair: 'A61,A62',
    type: 'couple'
  }
]

const mockCinemas = [
  {
    _id: 1,
    name: 'CGV Vincom Đồng Khởi',
    city: 'Hồ Chí Minh',
    type: '2D',
    roomMap: fakeRoomMap
  },
  {
    _id: 2,
    name: 'CGV Vincom Thảo Điền',
    city: 'Hồ Chí Minh',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 3,
    name: 'CGV Vincom Lê Văn Việt',
    city: 'Hồ Chí Minh',
    type: '4D',
    roomMap: fakeRoomMap
  },
  {
    _id: 4,
    name: 'CGV Vincom Quang Trung',
    city: 'Hồ Chí Minh',
    type: '2D',
    roomMap: fakeRoomMap
  },
  {
    _id: 5,
    name: 'CGV Vincom Gò Vấp',
    city: 'Hồ Chí Minh',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 6,
    name: 'CGV Vincom Thủ Đức',
    city: 'Hồ Chí Minh',
    type: '4D',
    roomMap: fakeRoomMap
  },
  {
    _id: 7,
    name: 'CGV Vincom Biên Hòa',
    city: 'Đồng Nai',
    type: '2D',
    roomMap: fakeRoomMap
  },
  {
    _id: 8,
    name: 'CGV Vincom Bà Rịa',
    city: 'Bà Rịa - Vũng Tàu',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 9,
    name: 'CGV Vincom Cần Thơ',
    city: 'Cần Thơ',
    type: '4D',
    roomMap: fakeRoomMap
  },
  {
    _id: 10,
    name: 'CGV Vincom Hà Nội',
    city: 'Hà Nội',
    type: '2D',
    roomMap: fakeRoomMap
  },
  {
    _id: 11,
    name: 'CGV Vincom Long Biên',
    city: 'Hà Nội',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 12,
    name: 'CGV Vincom Royal City',
    city: 'Hà Nội',
    type: '4D',
    roomMap: fakeRoomMap
  },
  {
    _id: 13,
    name: 'CGV Vincom Nguyễn Chí Thanh',
    city: 'Hà Nội',
    type: '2D',
    roomMap: fakeRoomMap
  },
  {
    _id: 14,
    name: 'CGV Vincom Thanh Xuân',
    city: 'Hà Nội',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 15,
    name: 'CGV Vincom Hải Phòng',
    city: 'Hải Phòng',
    type: '4D',
    roomMap: fakeRoomMap
  },
  {
    _id: 16,
    name: 'CGV Vincom Đà Nẵng',
    city: 'Đà Nẵng',
    type: '2D',
    roomMap: fakeRoomMap
  },
  {
    _id: 17,
    name: 'CGV Vincom Nha Trang',
    city: 'Khánh Hòa',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 18,
    name: 'CGV Vincom Huế',
    city: 'Thừa Thiên Huế',
    type: '4D',
    roomMap: fakeRoomMap
  },
  {
    _id: 19,
    name: 'CGV Vincom Vinh',
    city: 'Nghệ An',
    type: '2D',
    roomMap: fakeRoomMap
  },
  {
    _id: 20,
    name: 'CGV Vincom Đà Lạt',
    city: 'Lâm Đồng',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 21,
    name: 'CGV Vincom Bình Dương',
    city: 'Bình Dương',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 22,
    name: 'CGV Vincom Vũng Tàu',
    city: 'Bà Rịa - Vũng Tàu',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 23,
    name: 'CGV Vincom Cần Thơ',
    city: 'Cần Thơ',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 24,
    name: 'CGV Vincom Hà Nội',
    city: 'Hà Nội',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 25,
    name: 'CGV Vincom Hải Phòng',
    city: 'Hải Phòng',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 26,
    name: 'CGV Vincom Đà Nẵng',
    city: 'Đà Nẵng',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 27,
    name: 'CGV Vincom Nha Trang',
    city: 'Khánh Hòa',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 28,
    name: 'CGV Vincom Huế',
    city: 'Thừa Thiên Huế',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 29,
    name: 'CGV Vincom Vinh',
    city: 'Nghệ An',
    type: '3D',
    roomMap: fakeRoomMap
  },
  {
    _id: 30,
    name: 'CGV Vincom Đà Lạt',
    city: 'Lâm Đồng',
    type: '3D',
    roomMap: fakeRoomMap
  }
]

const fakeMovie = {
  poster: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg',
  language: 'English',
  releaseDate: '2022-01-01',
  endDate: '2025-01-31',
  trailer: 'https://www.youtube.com/embed/5g4lY8Y3eoo',
  genres: ['Action', 'Adventure', 'Fantasy'],
  directors: ['Director 1', 'Director 2', 'Director 3'],
  actors: ['Actor 1', 'Actor 2', 'Actor 3']
}

const mockMovies = [
  {
    _id: 1,
    title: 'Movie 1',
    slug: 'movie-1',
    description: 'Movie 1 description',
    duration: 109,
    ageRestriction: 18,
    status: 'now showing',
    ...fakeMovie
  },
  {
    _id: 2,
    title: 'Movie 2',
    slug: 'movie-2',
    description: 'Movie 2 description',
    duration: 123,
    ageRestriction: 16,
    status: 'now showing',
    ...fakeMovie
  },
  {
    _id: 3,
    title: 'Movie 3',
    slug: 'movie-3',
    description: 'Movie 3 description',
    duration: 181,
    ageRestriction: 13,
    status: 'now showing',
    ...fakeMovie
  },
  {
    _id: 4,
    title: 'Movie 4',
    slug: 'movie-4',
    description: 'Movie 4 description',
    duration: 109,
    ageRestriction: 18,
    status: 'coming soon',
    ...fakeMovie
  },
  {
    _id: 5,
    title: 'Movie 5',
    slug: 'movie-5',
    description: 'Movie 5 description',
    duration: 109,
    ageRestriction: 18,
    status: 'coming soon',
    ...fakeMovie
  },
  {
    _id: 6,
    title: 'Movie 6',
    slug: 'movie-6',
    description: 'Movie 6 description',
    duration: 84,
    ageRestriction: 16,
    status: 'coming soon',
    ...fakeMovie
  },
  {
    _id: 7,
    title: 'Movie 7',
    slug: 'movie-7',
    description: 'Movie 7 description',
    duration: 109,
    ageRestriction: 18,
    status: 'now showing',
    ...fakeMovie
  },
  {
    _id: 8,
    title: 'Movie 8',
    slug: 'movie-8',
    description: 'Movie 8 description',
    duration: 109,
    ageRestriction: 18,
    status: 'ended',
    ...fakeMovie
  },
  {
    _id: 9,
    title: 'Movie 9',
    slug: 'movie-9',
    description: 'Movie 9 description',
    duration: 109,
    ageRestriction: 18,
    status: 'ended',
    ...fakeMovie
  },
  {
    _id: 10,
    title: 'Movie 10',
    slug: 'movie-10',
    description: 'Movie 10 description',
    duration: 109,
    ageRestriction: 18,
    status: 'ended',
    ...fakeMovie
  }
]

const mockShowtimes = [
  {
    _id: 1,
    cinemaId: 1,
    movieId: 1,
    dateId: 0,
    day: new Date(),
    start: 8,
    end: 10,
    price: 75,
    bookedChairs: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10']
  },
  {
    _id: 2,
    cinemaId: 1,
    movieId: 1,
    dateId: 0,
    day: new Date(),
    start: 11,
    end: 13,
    price: 100,
    bookedChairs: ['A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20']
  },
  {
    _id: 3,
    cinemaId: 1,
    movieId: 1,
    dateId: 0,
    day: new Date(),
    start: 14,
    end: 16,
    price: 125,
    bookedChairs: ['A21', 'A22', 'A23', 'A24', 'A25', 'A26', 'A27', 'A28', 'A29', 'A30']
  },
  {
    _id: 4,
    cinemaId: 1,
    movieId: 1,
    dateId: 0,
    day: new Date(),
    start: 17,
    end: 19,
    price: 150,
    bookedChairs: ['A31', 'A32', 'A33', 'A34', 'A35', 'A36', 'A37', 'A38', 'A39', 'A40']
  },
  {
    _id: 5,
    cinemaId: 1,
    movieId: 1,
    dateId: 0,
    day: new Date(),
    start: 20,
    end: 22,
    price: 175,
    bookedChairs: ['A41', 'A42', 'A43', 'A44', 'A45', 'A46', 'A47', 'A48', 'A49', 'A50']
  }
]

const currentDate = new Date()

const dates = []

dates.push({ _id: 0, value: currentDate })

// Thêm 29 ngày tiếp theo vào mảng
for (let i = 1; i < 30; i++) {
  const nextDate = addDays(currentDate, i)
  dates.push({ _id: i, value: nextDate })
}

export { mockCities, mockCinemas, mockMovies, mockShowtimes, dates }