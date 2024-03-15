import { Link } from 'react-router-dom'
import imagePaths from 'assets/images/imagePaths'

// Assets
import logo from 'assets/images/menu/cgvlogo.png'
import fbLogo from 'assets/images/fb.png'
import zaloLogo from 'assets/images/zalo.png'
import ytbLogo from 'assets/images/ytb.png'
import certificated from 'assets/images/logo-da-thong-bao-bo-cong-thuong-mau-xanh.png'

const footerData = [
  {
    title: 'CGV Việt Nam',
    links: [
      { title: 'Giới thiệu', url: '/extra-info/about' },
      { title: 'Tiện ích online', url: '/cgv-online' },
      { title: 'Thẻ quà tặng', url: '/gifts' },
      { title: 'Tuyển dụng', url: '/recruitment' },
      { title: 'Liên hệ quảng cáo', url: '/extra-info/contacts' },
      { title: 'Dành cho đối tác', url: '/extra-info/partners' }
    ]
  },
  {
    title: 'Điều khoản sử dụng',
    links: [
      { title: 'Điều khoản chung', url: '/extra-info/policy' },
      { title: 'Điều khoản giao dịch', url: '/extra-info/rule-transaction' },
      { title: 'Chính sách thanh toán', url: '/extra-info/payment-policy' },
      { title: 'Chính sách bảo mật', url: '/extra-info/security-policy' },
      { title: 'Câu hỏi thường gặp', url: '/faq' }
    ]
  },
  {
    title: 'Chăm sóc khách hàng',
    links: [
      { title: 'Hotline: 1900 6017', url: null },
      { title: 'Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)', url: null },
      { title: 'Email hỗ trợ: hoidap@cgv.vn', url: null }
    ]
  }
]

const FooterLink = ({ title, links }) => {
  return (
    <div className="text-slate-500 mobile:shadow-sm mobile:pb-3">
      <h2 className="font-semibold text-lg py-2">{title}</h2>
      <ul className=" max-w-[260px]">
        {links.map((link, index) => (
          <li className="hover:text-primary" key={index}>
            {link.url ? <Link to={link.url}>{link.title}</Link> : <span>{link.title}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

const LogoLink = ({ url, logo }) => {
  return (
    <a href={url} className="[border:none] [outline:none]   ">
      <img src={logo} alt="" className="w-full h-full  object-cover" />
    </a>
  )
}


const LogoData = [
  {
    url: '#',
    logo: imagePaths.dx
  },
  {
    url: '#',
    logo: imagePaths.imax
  },
  {
    url: '#',
    logo: imagePaths.starium
  },
  {
    url: '#',
    logo: imagePaths.gold_class
  },
  {
    url: '#',
    logo: imagePaths.lamour
  },
  {
    url: '#',
    logo: imagePaths.sweet_box
  },
  {
    url: '#',
    logo: imagePaths.premium_cinema
  },
  {
    url: '#',
    logo: imagePaths.screen_x
  },
  {
    url: '#',
    logo: imagePaths.cine_foret
  },
  {
    url: '#',
    logo: imagePaths.cine_living_room
  },
  {
    url: '#',
    logo: imagePaths.cine_suite
  }
]
export default function Footer() {
  return (
    <footer className="z-10 w-full py-2">
      <hr className="border border-black absolute w-full left-0" />
      <div className="flex justify-between flex-row gap-4 py-4 mobile:hidden">
        {logoData.map((data, index) => (
          <LogoLink key={index} url={data.url} logo={data.logo} />
        ))}
      </div>
      <hr className="border border-black absolute w-full left-0" />
      <div className=" grid grid-cols-4 lg:gap-x-20 md:grid-cols-3 mobile:grid-cols-none  gap-y-4  w-full text-gray-500 py-4 ">
        {footerData.map((data, index) => (
          <FooterLink key={index} title={data.title} links={data.links} />
        ))}
        <div>
          <p className="font-semibold text-xl py-2">Kết nối với chúng tôi</p>
          <ul className="mt-2 flex  items-center    gap-[13px] mb-2">
            <li className="transition-transform transform hover:scale-90">
              <a href="#">
                <img src={fbLogo} alt="" className="object-contain h-[50px] w-[50px] relative " />
              </a>
            </li>
            <li className="transition-transform transform hover:scale-90">
              <a href="#">
                <img src={zaloLogo} alt="" className="object-contain h-[50px] w-[50px] relative " />
              </a>
            </li>
            <li className="transition-transform transform hover:scale-90">
              <a href="#">
                <img src={ytbLogo} alt="" className="object-contain h-[50px] w-[50px] relative " />
              </a>
            </li>
          </ul>
          <a href="#">
            <img
              src={certificated}
              alt=""
              className="mobile:w-[200px]  w-[125px] h-[48px]  bg-brown object-contain  "
            />
          </a>
        </div>
      </div>
      <hr className="border border-black absolute w-full left-0" />
      <div className="flex  items-center gap-[25px] text-xs text-gray-500 mx-auto py-2">
        <div>
          <img
            src={logo}
            alt=""
            className="h-[143px] mobile:w-[200px] mobile:h-[200px] w-[143px] relative object-contain"
          />
        </div>
        <div>
          <p className="font-bold text-base">CÔNG TY TNHH CJ CGV VIỆT NAM</p>
          <ul className="mt-3">
            <li>
              Giấy Chứng nhận đăng ký doanh nghiệp: 0303675393 đăng ký lần đầu ngày 31/7/2008, được cấp bởi Sở Kế hoạch
              và
            </li>
            <li>Đầu tư Thành phố Hồ Chí Minh</li>
            <li>Địa chỉ: Lầu 2, số 7/28, Đường Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam</li>
            <li>Đường dây nóng (Hotline): 1900 6017</li>
            <li>COPYRIGHT 2017 CJ CGV VIETNAM CO., LTD. ALL RIGHTS RESERVED</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
