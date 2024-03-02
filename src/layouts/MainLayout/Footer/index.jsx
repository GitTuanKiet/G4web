import { Link } from 'react-router-dom'

// Assets
import logo from 'assets/images/menu/cgvlogo.png'

const footerData = [
  {
    title: 'CGV Việt Nam',
    links: [
      { title: 'Giới thiệu', url: '/extra-info/about' },
      { title: 'Tiện ích online', url: '/extra-info/cgv-online' },
      { title: 'Thẻ quà tặng', url: '/extra-info/gifts' },
      { title: 'Tuyển dụng', url: '/recruitment' },
      { title: 'Liên hệ quảng cáo', url: '/extra-info/contacts' },
      { title: 'Dành cho đối tác', url: '/extra-info/partners' }
    ]
  },
  {
    title: 'Điều khoản sử dụng',
    links: [
      { title: 'Điều khoản chung', url: '/terms/conditions' },
      { title: 'Điều khoản giao dịch', url: '/terms/of-use' },
      { title: 'Chính sách thanh toán', url: '/policy/payment' },
      { title: 'Chính sách bảo mật', url: '/policy/privacy' },
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
    <div className="text-slate-500">
      <h2 className="font-semibold text-xl py-2">{title}</h2>
      <ul className="text-lg max-w-[260px]">
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
    <a href={url} className="[border:none] [outline:none] h-[37px] flex relative">
      <img src={logo} alt="" className="w-full h-full object-contain" />
    </a>
  )
}

const logoData = Array(10).fill({ url: '#', logo: logo })

export default function Footer() {
  return (
    <footer className="z-10 w-full py-2">
      <hr className="border border-black absolute w-full left-0" />
      <div className="flex justify-between flex-row gap-4 py-2">
        {logoData.map((data, index) => (
          <LogoLink key={index} url={data.url} logo={data.logo} />
        ))}
      </div>
      <hr className="border border-black absolute w-full left-0" />
      <div className="flex justify-between gap-10 w-full text-gray-500 dark:text-white">
        {footerData.map((data, index) => (
          <FooterLink key={index} title={data.title} links={data.links} />
        ))}
        <div>
          <p className="font-semibold text-2xl py-2">Kết nối với chúng tôi</p>
          <ul className="mt-2 flex flex-row items-start justify-start gap-[13px] mb-2">
            <li className="transition-transform transform hover:scale-90">
              <a href="#">
                <img src={logo} alt="" className="object-contain h-[34px] w-[34px] relative bg-gray-100" />
              </a>
            </li>
            <li className="transition-transform transform hover:scale-90">
              <a href="#">
                <img src={logo} alt="" className="object-contain h-[34px] w-[34px] relative bg-gray-100" />
              </a>
            </li>
            <li className="transition-transform transform hover:scale-90">
              <a href="#">
                <img src={logo} alt="" className="object-contain h-[34px] w-[34px] relative bg-gray-100" />
              </a>
            </li>
            <li className="transition-transform transform hover:scale-90">
              <a href="#">
                <img src={logo} alt="" className="object-contain h-[34px] w-[34px] relative bg-gray-100" />
              </a>
            </li>
          </ul>
          <a href="#">
            <img src={logo} alt="" className="w-[175px] h-[35px] relative bg-brown object-contain  bg-gray-100" />
          </a>
        </div>
      </div>
      <hr className="border border-black absolute w-full left-0" />
      <div className="flex justify-center items-center gap-[25px] text-xs text-gray-500 mx-auto py-2">
        <div>
          <img src={logo} alt="" className="h-[84px] w-[84px] relative bg-gray-200 object-contain" />
        </div>
        <div>
          <p className="font-bold text-base">CÔNG TY TNHH CJ CGV VIỆT NAM</p>
          <ul className="mt-2">
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
