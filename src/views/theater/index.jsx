import { useState } from 'react'

['Hồ Chí Minh', 'Hải Phòng', 'Đăk Lăk', 'Hậu Giang', 'Hưng Yên', 'Phú Thọ', 'Thái Nguyên',
  'Hà Nội', 'Quảng Ninh', 'Trà Vinh', 'Hà Tĩnh', 'Khánh Hòa', 'Quảng Ngãi', 'Tiền Giang',
  'Đà Nẵng', 'Bà Rịa - Vũng Tàu', 'Yên Bái', 'Phú Yên', 'Kon Tum', 'Sóc Trăng',
  'Cần Thơ', 'Bình Định', 'Vĩnh Long', 'Đồng Tháp', 'Lạng Sơn', 'Sơn La',
  'Đồng Nai', 'Bình Dương', 'Kiên Giang', 'Bạc Liêu', 'Nghệ An', 'Tây Ninh']

const Cities = [
  {
    id: 1,
    name: 'Hồ Chí Minh',
    cinemas: [
      {
        id: 1,
        name: 'CGV Vincom Thủ Đức',
        content: [
          {
            id: 1,
            name: 'CGV Vincom Thủ Đức',
            address: 'Tầng 5, TTTM Vincom Thủ Đức, 216 Võ Văn Ngân, Phường Bình Thọ, Quận Thủ Đức, TP. Hồ Chí Minh',
            phone: '(028) 7109 8100',
            email: ''
          }
        ]
      },
      {
        id: 2,
        name: 'CGV Vincom Quận 1',
        content: [
          {
            id: 1,
            name: 'CGV Vincom Quận 1',
            address: 'Tầng 7, TTTM Vincom Center B, 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
            phone: '(028) 7109 8100',
            email: ''
          }
        ]
      },
      {
        id: 3,
        name: 'CGV Vincom Quận 3',
        content: [
          {
            id: 1,
            name: 'CGV Vincom Quận 3',
            address: 'Tầng 3, TTTM Vincom Center S, 150 Cách Mạng Tháng 8, Phường 6, Quận 3, TP. Hồ Chí Minh',
            phone: '(028) 7109 8100',
            email: ''
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Hà Nội',
    cinemas: [
      {
        id: 1,
        name: 'CGV Vincom Bà Triệu',
        content: [
          {
            id: 1,
            name: 'CGV Vincom Bà Triệu',
            address: 'Tầng 6, TTTM Vincom Center Bà Triệu, 191 Bà Triệu, Quận Hai Bà Trưng, Hà Nội',
            phone: '(024) 7109 8100',
            email: ''
          }
        ]
      },
      {
        id: 2,
        name: 'CGV Vincom Long Biên',
        content: [
          {
            id: 1,
            name: 'CGV Vincom Long Biên',
            address: 'Tầng 4, TTTM Vincom Center Long Biên, 72A Nguyễn Văn Linh, Quận Long Biên, Hà Nội',
            phone: '(024) 7109 8100',
            email: ''
          }
        ]
      },
      {
        id: 3,
        name: 'CGV Vincom Royal City',
        content: [
          {
            id: 1,
            name: 'CGV Vincom Royal City',
            address: 'Tầng 4, TTTM Vincom Mega Mall Royal City, 72A Nguyễn Trãi, Thanh Xuân, Hà Nội',
            phone: '(024) 7109 8100',
            email: ''
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Đà Nẵng',
    cinemas: [
      {
        id: 1,
        name: 'CGV Vincom Đà Nẵng',
        content: [
          {
            id: 1,
            name: 'CGV Vincom Đà Nẵng',
            address: 'Tầng 5, TTTM Vincom Center Đà Nẵng, 910A Ngô Quyền, An Hải Bắc, Sơn Trà, Đà Nẵng',
            phone: '(0236) 7109 8100',
            email: ''
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Cần Thơ',
    cinemas: [
      {
        id: 1,
        name: 'CGV Vincom Cần Thơ',
        content: [
          {
            id: 1,
            name: 'CGV Vincom Cần Thơ',
            address: 'Tầng 5, TTTM Vincom Center Cần Thơ, 30A Cách Mạng Tháng 8, Phường An Phú, Quận Ninh Kiều, Cần Thơ',
            phone: '(0292) 7109 8100',
            email: ''
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'Bình Dương',
    cinemas: [
      {
        id: 1,
        name: 'CGV Vincom Bình Dương',
        content: [
          {
            id: 1,
            name: 'CGV Vincom Bình Dương',
            address: 'Tầng 5, TTTM Vincom Center Bình Dương, 46 Đại lộ Bình Dương, Phường Phú Thọ, Thủ Dầu Một, Bình Dương',
            phone: '(0274) 7109 8100',
            email: ''
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Đồng Nai',
    cinemas: [
      {
        id: 1,
        name: 'CGV Vincom Đồng Nai',
        content: [
          {
            id: 1,
            name: 'CGV Vincom Đồng Nai',
            address: 'Tầng 5, TTTM Vincom Center Đồng Nai, 109 Võ Thị Sáu, Phường Quyết Thắng, Biên Hòa, Đồng Nai',
            phone: '(0251) 7109 8100',
            email: ''
          }
        ]
      }
    ]
  },
  {
    id: 7,
    name: 'Vũng Tàu',
    cinemas: [
      {
        id: 1,
        name: 'CGV Vincom Vũng Tàu',
        content: [
          {
            id: 1,
            name: 'CGV Vincom Vũng Tàu',
            address: 'Tầng 5, TTTM Vincom Center Vũng Tàu, 9 Lê Lợi, Phường 1, Vũng Tàu',
            phone: '(0254) 7109 8100',
            email: ''
          }
        ]
      }
    ]
  },
  {
    id: 8,
    name: 'Biên Hòa',
    cinemas: [
      {
        id: 1,
        name: 'CGV Vincom Biên Hòa',
        content: [
          {
            id: 1,
            name: 'CGV Vincom Biên Hòa',
            address: 'Tầng 5, TTTM Vincom Center Biên Hòa, 109 Võ Thị Sáu, Phường Quyết Thắng, Biên Hòa, Đồng Nai',
            phone: '(0251) 7109 8100',
            email: ''
          }
        ]
      }
    ]
  },
  {
    id: 9,
    name: 'Bình Thạnh',
    cinemas: [
      {
        id: 1,
        name: 'CGV Vincom Bình Thạnh',
        content: [
          {
            id: 1,
            name: 'CGV Vincom Bình Thạnh',
            address: 'Tầng 5, TTTM Vincom Center Bình Thạnh, 72A Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh, TP. Hồ Chí Minh',
            phone: '(028) 7109 8100',
            email: ''
          },
          {
            id: 2,
            name: 'CGV Vincom Thảo Điền',
            address: 'Tầng 2, TTTM Vincom Thảo Điền, 159 Xa Lộ Hà Nội, Thảo Điền, Quận 2, TP. Hồ Chí Minh',
            phone: '(028) 7109 8100',
            email: ''
          },
          {
            id: 3,
            name: 'CGV Vincom Landmark 81',
            address: 'Tầng 5, TTTM Vincom Landmark 81, 772 Điện Biên Phủ, Phường 22, Bình Thạnh, TP. Hồ Chí Minh',
            phone: '(028) 7109 8100',
            email: ''
          }
        ]
      }
    ]
  }
]

import Content from './Content'

export default function Site() {
  const [showList, setShowList] = useState(null)

  const handleShowing = (id) => {
    setShowList(id)
  }

  const [showContent, setShowContent] = useState(null)

  const handleShowingContent = (id) => {
    setShowContent(id)
  }

  return (
    <>
      <div className='bg-gray-500 my-20 p-1 text-white'>
        <div className="w-full h-auto border">
          {/* Title */}
          <div className="w-full py-5 border-b-2">
            <h1 className="text-6xl text-center font-semibold">CGV CINEMAS</h1>
          </div>
          {/* City */}
          <div className="w-full h-auto py-4 flex items-center justify-center border-b-2">
            <div className="w-[60%] h-auto grid grid-cols-5 gap-4">
              {Cities.map((city) => (
                <div className="w-full h-auto" key={city.id}>
                  <div className="w-full h-auto hover:bg-slate-500">
                    <h4 className="text-xl cursor-pointer" onClick={() => handleShowing(city.id)}>{city.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* List */}
          <div className="w-full h-auto py-4 flex items-center justify-center">
            <div className="w-[60%] h-auto grid grid-cols-5 gap-4">
              {showList && Cities.find((city) => city.id === showList).cinemas.map((cinema) => (
                <div className="w-full h-auto" key={cinema.id}>
                  <div className="w-full h-auto hover:bg-slate-500" onClick={() => handleShowingContent(cinema.id)}>
                    <h4 className="text-xs cursor-pointer">{cinema.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      {showContent && Cities.find((city) => city.id === showList)
        .cinemas.find((cinemas) => cinemas.id === showContent).content.map((item) => (
          <Content key={item.id} item={item} />
        ))
      }
    </>
  )
}