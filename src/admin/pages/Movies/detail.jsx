import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'shared/components/Button'

function DetailMovie() {
  let desc =
    'aklsdjflkasjflkjaslkfjalskjflaksjflja;sdfjalskklasdnklfjasklfjaslkfjalskdjflkajskljlkasjflkjasdflkjaslfkjasldkfjkljlkjjflaksjflkasjdlk'
  const [watchTrailer, setWatchTrailer] = useState(false)
  const navigate = useNavigate()
  const [seeAlso, setSeeAlso] = useState(false)

  return (
    <div>
      <h1 className="text-center text-2xl font-medium">Xem chi tiết phim Kung fu panda 4</h1>

      <div>
        <div className="flex gap-x-5">
          <h3 className="font-medium min-w-[150px]">Tiêu đề</h3>
          <p>Kung fu panda 4</p>
        </div>
        <div className="flex gap-x-5">
          <h3 className="font-medium min-w-[150px]">Mô tả</h3>
          <p>
            {desc.length > 100
              ? desc.substring(0, 100) + '...' && (
                  <button className="text-blue-500 hover:underline" onClick={() => setSeeAlso(!seeAlso)}>
                    Xem thêm
                  </button>
                )
              : desc}
          </p>
        </div>
        <div className="flex gap-x-5">
          <h3 className="font-medium min-w-[150px]">Đọ tuổi</h3>
          <p>14+</p>
        </div>
        <div className="flex gap-x-5">
          <h3 className="font-medium min-w-[150px]">Tiêu đề</h3>
          <p>Kung fu panda 4</p>
        </div>
        <div className="flex gap-x-5">
          <h3 className="font-medium min-w-[150px]">Ảnh bìa</h3>
          <img
            src="https://www.themoviedb.org/t/p/original/2lBOQK06tltt8SQaswgb8d657Mv.jpg"
            alt="cover"
            className="w-[250px] h-[300px] object-cover rounded-xl mb-2"
          />
        </div>
        <div className="flex gap-x-5">
          <h3 className="font-medium min-w-[150px]">Trailer </h3>
          <p
            className="hover:underline text-blue-600 cursor-pointer block"
            onClick={() => setWatchTrailer(!watchTrailer)}
          >
            {watchTrailer ? 'Ẩn trailer' : 'Xem trailer'}
          </p>{' '}
          <br />
        </div>
        {watchTrailer && (
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/10r9ozshGVE"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        <div className="flex gap-x-5">
          <h3 className="font-medium min-w-[150px]">Thời lượng</h3>
          <p>84 phút</p>
        </div>
        <div className="flex gap-x-5">
          <h3 className="font-medium min-w-[150px]">Ngôn ngữ</h3>
          <p>Anh</p>
        </div>
        <div className="flex gap-x-5">
          <h3 className="font-medium min-w-[150px]">Ngày khởi chiếu</h3>
          <p>2003-33-22</p>
        </div>
        <div className="flex gap-x-5">
          <h3 className="font-medium min-w-[150px]">Ngày kết thúc</h3>
          <p>2003-33-22</p>
        </div>
        <div className="flex gap-x-5">
          <h3 className="font-medium min-w-[150px]">Thể loại</h3>
          <p>Hành động, Hoạt hình</p>
        </div>
        <div className="flex gap-x-5">
          <h3 className="font-medium min-w-[150px]">Diễn viên</h3>
          <p>Jackie Chan, Jet Li</p>
        </div>
        <div className="flex gap-x-5">
          <h3 className="font-medium min-w-[150px]">Đạo diễn</h3>
          <p>Taylor Swiftr</p>
        </div>
      </div>

      <Button onClick={() => navigate(-1)}>Quay lại</Button>

      {seeAlso && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setSeeAlso(false)
          }}
          className="fixed top-0  left-0 right-0 bottom-0  bg-[rgba(0,0,0,0.1)]  z-40 flex justify-center items-center  "
        >
          <div className="modal-body max-w-[632px] p-4 bg-white rounded-md">
            <p
              className="px-5  relative "
              style={{
                wordBreak: 'break-word'
              }}
            >
              {desc}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailMovie
