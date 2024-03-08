import { Link } from 'react-router-dom'

const StaticWidget = [
  {
    _id: 1,
    title: 'rạp cgv',
    bgImage: 'https://chocanh.vn/wp-content/uploads/hinh-anh-cho-cute-chibi-dep-nhat_101023548.png',
    link: '/theaters'
  },
  {
    _id: 2,
    title: 'phim đang chiếu',
    bgImage: 'https://chocanh.vn/wp-content/uploads/hinh-anh-cho-cute-chibi-dep-nhat_101023548.png',
    link: '/movie/now'
  },
  {
    _id: 3,
    title: 'dặc trưng cgv',
    bgImage: 'https://chocanh.vn/wp-content/uploads/hinh-anh-cho-cute-chibi-dep-nhat_101023548.png',
    link: '/theaters/special'
  },
  {
    _id: 4,
    title: 'Thuê rạp & vé nhóm',
    bgImage: 'https://chocanh.vn/wp-content/uploads/hinh-anh-cho-cute-chibi-dep-nhat_101023548.png',
    link: '/cinemas'
  },
  {
    _id: 5,
    title: 'liên hệ cgv',
    bgImage: 'https://chocanh.vn/wp-content/uploads/hinh-anh-cho-cute-chibi-dep-nhat_101023548.png',
    link: '/contacts'
  },
  {
    _id: 6,
    title: 'tin mới & ưu đãi',
    bgImage: 'https://chocanh.vn/wp-content/uploads/hinh-anh-cho-cute-chibi-dep-nhat_101023548.png',
    link: '/news-offer'
  },
  {
    _id: 7,
    title: 'đăng ký ngay',
    bgImage: 'https://chocanh.vn/wp-content/uploads/hinh-anh-cho-cute-chibi-dep-nhat_101023548.png',
    link: '/auth/register'
  }
]

const CardWidget = ({ title, bgImage, link }) => {
  return (
    <div className="flex flex-col w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
      <Link to={link} className="w-full h-full flex items-end justify-center">
        <span className="uppercase font-mono text-xs">{title}</span>
      </Link>
    </div>

  )
}

const Widget = () => {
  return (
    <>
      <div className="flex gap-4">
        {StaticWidget.map((item, index) => (
          <div className="min-w-[80px] min-h-[80px]" key={index}>
            <CardWidget key={index} title={item.title} bgImage={item.bgImage} link={item.link} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Widget