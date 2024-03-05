import { useState } from 'react'

const fakedata = {
  cinemaName: 'CGV Vincom Đồng Khởi',
  movieTitle: 'The Matrix Resurrections',
  genres: 'Action, Sci-Fi',
  duration: '2h 28min',
  imageSrc: 'https://www.cgv.vn/media/cinemas/cms//1/_/1_cgv_tet.png',
  altText: 'CGV Vincom Đồng Khởi'
}

const CinemaInformation= ({
  cinemaName,
  movieTitle,
  genres,
  duration,
  imageSrc,
  altText
}) => (
  <div className="flex flex-col grow text-sm font-medium text-black text-opacity-50 max-md:mt-10">
    <div className="flex gap-5 justify-between text-base text-black text-opacity-70">
      <img loading="lazy" src={imageSrc} alt={altText} className="mix-blend-darken aspect-[1.47] w-[66px]" />
      <div className="flex-auto my-auto">{cinemaName}</div>
    </div>
    <div className="mt-7 text-lg text-black">{movieTitle}</div>
    <div className="mt-6">{genres}</div>
    <div className="mt-5">{duration}</div>
  </div>
)

const TicketInformation = ({
  date,
  time,
  totalPrice,
  room,
  ticketsCount,
  seats
}) => (
  <div className="flex flex-col font-medium max-md:mt-10">
    <div className="flex gap-5 justify-between text-sm">
      <div className="flex flex-col whitespace-nowrap">
        <div className="text-black text-opacity-50">Ngày chiếu</div>
        <div className="mt-5 text-black">{date}</div>
      </div>
      <div className="flex flex-col self-start">
        <div className="text-black text-opacity-50">Suất chiếu</div>
        <div className="mt-6 text-black">{time}</div>
      </div>
    </div>
    <div className="mt-9 text-base whitespace-nowrap text-black text-opacity-50">Tổng tiền thanh toán</div>
    <div className="flex gap-5 justify-between items-start pr-2.5 text-sm">
      <div className="flex flex-col flex-1">
        <div className="text-black text-opacity-50">Phòng chiếu</div>
        <div className="mt-5 text-black">{room}</div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="text-black text-opacity-50">Số lượng vé</div>
        <div className="mt-5 text-black whitespace-nowrap">{ticketsCount} vé</div>
      </div>
      <div className="flex flex-col flex-1 self-stretch whitespace-nowrap">
        <div className="text-black text-opacity-50">Số ghế</div>
        <div className="mt-5 text-black">{seats}</div>
      </div>
    </div>
    <div className="flex flex-col self-end mt-9 whitespace-nowrap">
      <div className="text-base text-blue-700">{totalPrice}</div>
      <div className="text-xs text-black text-opacity-50">Đã bao gồm VAT</div>
    </div>
  </div>
)

const WatchStatusButton = ({ watched, toggleWatched }) => (
  <button className="mt-4 text-sm font-medium whitespace-nowrap text-black text-opacity-50 max-md:mt-10" onClick={toggleWatched}>
    {watched ? 'Đã xem' : 'Chưa xem'}
  </button>
)

const CinemaTicketOverview = ({ cinemaInfo = fakedata, ticketInfo }) => {
  const [watched, setWatched] = useState(false)

  const toggleWatched = () => setWatched(!watched)

  return (
    <div className="px-14 py-6 bg-rose-100 rounded-xl max-w-[px] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src={cinemaInfo.imageSrc} alt={cinemaInfo.altText} className="self-stretch my-auto max-w-full aspect-[0.81] w-[180px] max-md:mt-10" />
        </div>
        <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            <CinemaInformation {...cinemaInfo} />
            <WatchStatusButton watched={watched} toggleWatched={toggleWatched} />
          </div>
          <div className="mt-5 max-md:max-w-full">
            <TicketInformation {...ticketInfo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CinemaTicketOverview