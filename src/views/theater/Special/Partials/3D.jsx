import { Link } from 'react-router-dom'


export default function Theater3D() {
  return (
    <>
      {/* Title */}
      <div className="w-full min-h-[30] py-10">
        <h1 className="text-primary text-6xl text-center font-semibold">3D</h1>
      </div>

      <div className="w-full py-10 px-20">
        <h3>
        3D là một định dạng điện ảnh đem đến cho khách hàng những thước phim sống động, chân thực nhất.
        </h3>
        <h3 className="font-semibold">
          Tất cả các rạp của CGV đều có định dạng 3D để khách hàng thưởng thức điện ảnh trọn vẹn. Chi tiết xem
          <Link to="/theater" className='text-primary'> tại đây</Link>
        </h3>
        <p>
          <img
            alt=""
            src="https://www.cgv.vn/media/wysiwyg/2022/092022/980x500.jpg"
            className="w-full"
          />
        </p>
        <br />
        <h2 className="px-4">
          <strong>
          Đặt vé ngay :
          </strong>
        </h2>
        <Link href="/theater">
          <h1 className="text-primary cursor-pointer px-4">Tìm rạp</h1>
        </Link>
        <Link href="/theater/special">
          <h1 className="text-primary cursor-pointer px-4">Quay lại</h1>
        </Link>
      </div>

    </>
  )
}