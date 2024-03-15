import { Link } from 'react-router-dom'
import imagePaths from 'assets/images/imagePaths'

const StaticWidget = [
  {
    _id: 1,
    title: 'rạp cgv',
    bgImage: imagePaths.rap,
    link: '/theaters'
  },
  {
    _id: 2,
    title: 'phim đang chiếu',
    bgImage: imagePaths.phim_dang_chieu,
    link: '/movie/now'
  },
  {
    _id: 3,
    title: 'dặc trưng cgv',
    bgImage: imagePaths.dac_trung,
    link: '/theaters/special'
  },
  {
    _id: 4,
    title: 'Thuê rạp & vé nhóm',
    bgImage: imagePaths.ve_nhom,
    link: '/cinemas'
  },
  {
    _id: 5,
    title: 'liên hệ cgv',
    bgImage: imagePaths.lien_he,
    link: '/contacts'
  },
  {
    _id: 6,
    title: 'tin mới & ưu đãi',
    bgImage: imagePaths.tin_moi,
    link: '/news-offer'
  },
  {
    _id: 7,
    title: 'đăng ký ngay',
    bgImage: imagePaths.dang_ky_ngay,
    link: '/auth/register'
  }
]

const CardWidget = ({ title, bgImage, link }) => {
  return (
    <div className="flex flex-col w-full h-full bg-cover bg-center bg-no-repeat  border-black" style={{ backgroundImage: `url(${bgImage})` }}>
      <Link to={link} className="w-full h-full flex items-end justify-center">
        {/* <span className="uppercase font-mono text-xs">{title}</span> */}
      </Link>
    </div>

  )
}

const Widget = () => {
  return (
    <>
      <div className="flex w-full justify-between">
        {StaticWidget.map((item, index) => (
          <div
            className={'min-w-[110px] min-h-[100px] '}
            key={index}
          >
            <CardWidget key={index} title={item.title} bgImage={item.bgImage} link={item.link} />
            {index !== StaticWidget.length - 1 && (
              <div className="absolute inset-y-0 right-0 w-px bg-gray-400" />
            )}
          </div>

        ))}
      </div>
    </>
  )
}

export default Widget