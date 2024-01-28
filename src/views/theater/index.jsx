import { useState } from 'react'

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
      {/* Title */}
      <div className="w-full min-h-[30] py-10">
        <h1 className="text-primary text-6xl text-center font-semibold">CGV CINEMAS</h1>
      </div>
      {/* City */}
      <div className="w-full h-auto min-h-[66] px-20 py-10 bg-green-500 flex items-center justify-center">
        <div className="w-[60%] h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
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
      <div className="w-full h-auto px-20  py-10 bg-orange-500 flex items-center justify-center">
        <div className="w-[60%] h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
          {showList && Cities.find((city) => city.id === showList).cinemas.map((cinema) => (
            <div className="w-full h-auto" key={cinema.id}>
              <div className="w-full h-auto hover:bg-slate-500" onClick={() => handleShowingContent(cinema.id)}>
                <h4 className="text-xs cursor-pointer">{cinema.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Content */}
      {showContent && Cities.find((city) => city.id === showList)
        .cinemas.find((cinemas) => cinemas.id === showContent).content.map((item) => (
          <div className="w-full h-auto" key={item.id}>
            <Content item={item} />
          </div>
        ))}
    </>
  )
}