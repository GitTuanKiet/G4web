import { Link } from 'react-router-dom'
import FeatureImg from 'assets/images/film/dac_trung.png'
import ContactImg from 'assets/images/film/lien_he.png'
import filmImg from 'assets/images/film/phim_dang_chieu.png'
import cinemaImg from 'assets/images/film/Rap.png'
import newsImg from 'assets/images/film/tin_moi.png'
import TicketGroup from 'assets/images/film/ve_nhom.png'
import registerNowImg from 'assets/images/film/dang_ky_ngay.png'

const StaticWidget = [
  {
    _id: 1,
    // title: 'rạp cgv',
    bgImage: cinemaImg,
    link: '/theaters'
  },
  {
    _id: 2,
    // title: 'phim đang chiếu',
    bgImage: filmImg,
    link: '/movie/now-showing'
  },
  {
    _id: 3,
    // title: 'dặc trưng cgv',
    bgImage: FeatureImg,
    link: '/theaters/special'
  },
  {
    _id: 4,
    // title: 'Thuê rạp & vé nhóm',
    bgImage: TicketGroup,
    link: '/cinemas'
  },
  {
    _id: 5,
    // title: 'liên hệ cgv',
    bgImage: ContactImg,
    link: '/contacts'
  },
  {
    _id: 6,
    // title: 'tin mới & ưu đãi',
    bgImage: newsImg,
    link: '/news-offer'
  },
  {
    _id: 7,
    // title: 'đăng ký ngay',
    bgImage: registerNowImg,
    link: '/auth/register'
  }
]

const CardWidget = ({ title, bgImage, link }) => {
  return (
    <div
      className="flex flex-col w-full h-full bg-cover bg-center bg-no-repeat  "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Link to={link} className="w-full h-full flex items-end justify-center ">
        <span className="uppercase font-mono text-xs">{title}</span>
      </Link>
    </div>
  )
}

const Widget = () => {
  return (
    <>
      <div className="flex justify-between w-full">
        {StaticWidget.map((item, index) => (
          <div
            className={`min-w-[80px] min-h-[80px] w-[140px] h-[97px] ${
              index === StaticWidget.length - 1 ? '' : 'border-r '
            } border-black  `}
            key={index}
          >
            <CardWidget key={index} title={item.title} bgImage={item.bgImage} link={item.link} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Widget
