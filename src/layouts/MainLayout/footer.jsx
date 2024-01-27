import React from 'react'
import logo from '../../img/menu/cgvlogo.png'

export default function Header() {
    return (
        <footer className="text-sm text-black font-alata z-10">
            <hr className='border-t-2 border-solid border-black my-4' />
            <div className='flex flex-row flex-wrap items-start gap-[20px] justify-center'>
                <a href="#" className='[border:none] [outline:none] bg-gainsboro h-[37px] flex-1 relative min-w-[84px] max-w-[86px]'><img src={logo} alt="" className="w-full h-full object-contain" /></a>
                <a href="#" className='[border:none] [outline:none] bg-gainsboro h-[37px] flex-1 relative min-w-[84px] max-w-[86px]'><img src={logo} alt="" className="w-full h-full object-contain" /></a>
                <a href="#" className='[border:none] [outline:none] bg-gainsboro h-[37px] flex-1 relative min-w-[84px] max-w-[86px]'><img src={logo} alt="" className="w-full h-full object-contain" /></a>
                <a href="#" className='[border:none] [outline:none] bg-gainsboro h-[37px] flex-1 relative min-w-[84px] max-w-[86px]'><img src={logo} alt="" className="w-full h-full object-contain" /></a>
                <a href="#" className='[border:none] [outline:none] bg-gainsboro h-[37px] flex-1 relative min-w-[84px] max-w-[86px]'><img src={logo} alt="" className="w-full h-full object-contain" /></a>
                <a href="#" className='[border:none] [outline:none] bg-gainsboro h-[37px] flex-1 relative min-w-[84px] max-w-[86px]'><img src={logo} alt="" className="w-full h-full object-contain" /></a>
                <a href="#" className='[border:none] [outline:none] bg-gainsboro h-[37px] flex-1 relative min-w-[84px] max-w-[86px]'><img src={logo} alt="" className="w-full h-full object-contain" /></a>
                <a href="#" className='[border:none] [outline:none] bg-gainsboro h-[37px] flex-1 relative min-w-[84px] max-w-[86px]'><img src={logo} alt="" className="w-full h-full object-contain" /></a>
                <a href="#" className='[border:none] [outline:none] bg-gainsboro h-[37px] flex-1 relative min-w-[84px] max-w-[86px]'><img src={logo} alt="" className="w-full h-full object-contain" /></a>
            </div>
            <hr className='border-t-2 border-solid border-black my-4' />
            <div className='flex justify-center gap-[120px] max-w-full mq1050:flex-wrap text-gray-500' style={{ fontSize: '14px' }}>
                <div>
                    <p className='font-bold'>CGV Việt Nam</p>
                    <ul className='mt-2 text-base'>
                        <li><a href="#">Giới thiệu</a></li>
                        <li><a href="#">Tiện ích online</a></li>
                        <li><a href="#">Thẻ quà tặng</a></li>
                        <li><a href="#">Tuyển dụng</a></li>
                        <li><a href="#">Liên hệ quảng cáo</a></li>
                        <li><a href="#">Dành cho đối tác</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-bold'>Điều khoản sử dụng</p>
                    <ul className='mt-2 text-base'>
                        <li><a href="#">Điều khoản chung</a></li>
                        <li><a href="#">Điều khoản giao dịch</a></li>
                        <li><a href="#">Chính sách thanh toán</a></li>
                        <li><a href="#">Chính sách bảo mật</a></li>
                        <li><a href="#">Câu hỏi thường gặp</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-bold'>Kết nối với chúng tôi</p>
                    <ul className='mt-2 flex flex-row items-start justify-start gap-[13px] mb-2'>
                        <li className='transition-transform transform hover:scale-90'><a href="#"><img src={logo} alt="" className="object-contain h-[34px] w-[34px] relative bg-gray-100" /></a></li>
                        <li className='transition-transform transform hover:scale-90'><a href="#"><img src={logo} alt="" className="object-contain h-[34px] w-[34px] relative bg-gray-100" /></a></li>
                        <li className='transition-transform transform hover:scale-90'><a href="#"><img src={logo} alt="" className="object-contain h-[34px] w-[34px] relative bg-gray-100" /></a></li>
                        <li className='transition-transform transform hover:scale-90'><a href="#"><img src={logo} alt="" className="object-contain h-[34px] w-[34px] relative bg-gray-100" /></a></li>
                    </ul>
                    <a href="#"><img src={logo} alt="" className="w-[175px] h-[35px] relative bg-brown object-contain  bg-gray-100" /></a>
                </div>

                <div>
                    <p className='font-bold'>Chăm sóc khách hàng</p>
                    <ul className='mt-2 text-base'>
                        <li><a href="#">Hotline: 1900 6017</a></li>
                        <li><a href="#">Giờ làm việc: 8:00 - 22:00 <br />
                            (Tất cả các ngày bao gồm cả Lễ Tết)</a></li>
                        <li><a href="#">Email hỗ trợ: hoidap@cgv.vn</a></li>

                    </ul>
                </div>
            </div>
            <hr className='border-t-2 border-solid border-black my-4' />
            <div className='flex items-center justify-center gap-[25px] text-xs text-gray-500 mx-auto'>
                <div>
                    <img src={logo} alt="" className='h-[84px] w-[84px] relative bg-gray-200 object-contain' />
                </div>
                <div>
                    <p className='font-bold text-base'>CÔNG TY TNHH CJ CGV VIỆT NAM</p>
                    <ul className='mt-2'>
                        <li>Giấy Chứng nhận đăng ký doanh nghiệp: 0303675393 đăng ký lần đầu ngày 31/7/2008, được cấp bởi Sở Kế hoạch và</li>
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
