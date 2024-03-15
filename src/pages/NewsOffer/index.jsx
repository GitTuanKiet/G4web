import Heading from 'components/Heading'
import Poster from 'views/newsoffer/Poster'

const data = [
  {
    _id: 1,
    poster: 'https://www.cgv.vn/media/wysiwyg/2024/012024/240x201.png',
    title: 'Lat Mat 48h',
    time: 'Từ 01.04.2021 - 30.04.2021'
  },
  {
    _id: 2,
    poster: 'https://www.cgv.vn/media/wysiwyg/2024/012024/240x201.png',
    title: 'Gia Dinh Croods 2',
    time: 'Từ 01.04.2021 - 30.04.2021'
  },
  {
    _id: 3,
    poster: 'https://www.cgv.vn/media/wysiwyg/2024/012024/240x201.png',
    title: 'Trang Ti',
    time: 'Từ 01.04.2021 - 30.04.2021'
  },
  {
    _id: 4,
    poster: 'https://www.cgv.vn/media/wysiwyg/2024/012024/240x201.png',
    title: 'Lat Mat 48h',
    time: 'Từ 01.04.2021 - 30.04.2021'
  },
  {
    _id: 5,
    poster: 'https://www.cgv.vn/media/wysiwyg/2024/012024/240x201.png',
    title: 'Gia Dinh Croods 2',
    time: 'Từ 01.04.2021 - 30.04.2021'
  },
  {
    _id: 6,
    poster: 'https://www.cgv.vn/media/wysiwyg/2024/012024/240x201.png',
    title: 'Trang Ti',
    time: 'Từ 01.04.2021 - 30.04.2021'
  },
  {
    _id: 7,
    poster: 'https://www.cgv.vn/media/wysiwyg/2024/012024/240x201.png',
    title: 'Lat Mat 48h',
    time: 'Từ 01.04.2021 - 30.04.2021'
  }
]

const NewsOffer = () => {
  return (
    <>
      <Heading>Tin Mới và Ưu Đãi</Heading>

      <div className="flex items-center justify-center py-4 text-white rounded-b-none relative">
        <div className="triangle-left"></div>
        <div className="text-center bg-red-500 py-2 px-6 border-r-transparent inline-flex justify-center gap-x-4 text-lg relative z-10">
          <div className="triangle-left"></div>
          <h1 className="ml-3 cursor-pointer hover:opacity-90">Xem tất cả</h1>
          <h1 className="mr-3 cursor-pointer hover:opacity-90">Chọn Rạp</h1>
          <div className="triangle-right"></div>
        </div>
      </div>

      {/*List Poster */}
      <div className="grid grid-cols-4 gap-4 mobile:grid-cols-2 tablet:grid-cols-3">
        {data.map((item, index) => (
          <Poster key={index} data={item} />
        ))}
      </div>
    </>
  )
}

export default NewsOffer
