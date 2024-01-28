

export default function TheaterGoldClass({ data }) {

  return (
    <>
      {/* Title */}
      <div className="w-full min-h-[30] py-10">
        <h1 className="text-primary text-6xl text-center font-semibold">GOLD CLASS</h1>
      </div>

      <div className="w-full py-10 px-20">
        <h3 className="px-4">
        Lấy cảm hứng từ ghế ngồi hạng thương gia trên máy bay, phòng chiếu GOLD CLASS ra đời mang đến một không gian xem phim sang trọng và đẳng cấp cho các tín đồ điện ảnh. GOLD CLASS còn là lựa chọn hoàn hảo cho các sự kiện đặc biệt để tạo nên những kỷ niệm tuyệt vời, khó quên.
        </h3>
        <p>
          <img
            alt=""
            src="https://www.cgv.vn/media/wysiwyg/special-cinemas/000.jpg"
            className="w-full"
          />
          <img
            alt=""
            src="https://www.cgv.vn/media/wysiwyg/special-cinemas/001.jpg"
            className="w-full"
          />
          <img
            alt=""
            src="https://www.cgv.vn/media/wysiwyg/special-cinemas/002.jpg"
            className="w-full"
          />
          <img
            alt=""
            src="https://www.cgv.vn/media/wysiwyg/special-cinemas/003.jpg"
            className="w-full"
          />
          <img
            alt=""
            src="https://www.cgv.vn/media/wysiwyg/special-cinemas/004.jpg"
            className="w-full"
          />
          <img
            alt=""
            src="https://www.cgv.vn/media/wysiwyg/special-cinemas/005.jpg"
            className="w-full"
          />
          <img
            alt=""
            src="https://www.cgv.vn/media/wysiwyg/special-cinemas/006.jpg"
            className="w-full"
          />
        </p>
        <br />
        <h2 className="px-4">
          <strong>
          Cùng trải nghiệm phòng chiếu GOLD CLASS tại các rạp:
          </strong>
        </h2>
      </div>

      {/* List */}
      <div className="w-full h-auto px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {data.map((item, index) => (
          <div className="w-full h-auto flex items-center justify-center gap-2" key={item.id}>
            <span className="bg-slate-500 px-3 py-1 rounded-full">{index + 1}</span>
            <h4 className="text-xl cursor-pointer hover:text-red-500">{item.name}</h4>
          </div>
        ))}
      </div>
    </>
  )
}