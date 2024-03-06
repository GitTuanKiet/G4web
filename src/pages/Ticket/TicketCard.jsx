import { useState } from 'react'
import logo from 'assets/images/logo.png'
import IconCheck from 'components/icons/IconCheck'
import Button from 'components/Button'

const fakedata = {
  cinemaName: 'CGV Vincom Đồng Khởi',
  movieTitle: 'The Matrix Resurrections',
  genres: 'Action, Sci-Fi',
  duration: '2h 28min',
  imageSrc: 'https://www.cgv.vn/media/cinemas/cms//1/_/1_cgv_tet.png',
  altText: 'CGV Vincom Đồng Khởi',
  watched: false
}
const array = new Array(3)

const CinemaInformation = ({ cinemaName, movieTitle, genres, duration, imageSrc, altText, watched }) => (
  <div className="flex flex-col grow text-sm font-medium text-black text-opacity-50 max-md:mt-10">
    <div className="flex gap-10 pb-4 items-center  text-base text-black text-opacity-70">
      <img loading="lazy" src={logo} alt={altText} className="mix-blend-darken aspect-[1.47] w-[66px]" />
      <div className=" flex justify-between w-full">
        <span>{cinemaName}</span>
        {/* <WatchStatusButton watched={watched} toggleWatched={toggleWatched} /> */}

        <span className="flex opacity-50 ">
          <span>
            {watched ? (
              <span>
                <IconCheck /> Đã xem
              </span>
            ) : (
              'Chưa xem'
            )}
          </span>
        </span>
      </div>
    </div>
    <div className="border-dashed border-t border-slate-400">
      <div className="pt-2 uppercase  text-lg font-medium text-black">{movieTitle}</div>
      <div className="pt-2">{genres}</div>
      <div className="pt-2">Thời lượng: {duration}</div>
    </div>
  </div>
)

const TicketInformation = ({ date, time, totalPrice, room, ticketsCount, seats }) => (
  <div>
    <table className="table-auto w-full text-left  ">
      <thead>
        <tr className="">
          <th className="font-normal opacity-50 ">Ngày chiếu</th>
          <th className="font-normal opacity-50">Suất chiếu</th>
          <th className="font-normal opacity-50">Phòng chiếu</th>
          <th className="font-normal opacity-50">Số lượng vé</th>
          <th className="font-normal opacity-50">Số ghế</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Sliding Mr. Bones </td>
          <td>19:00</td>
          <td>P1</td>
          <td>02 vé</td>
          <td>A1,A2</td>
        </tr>
      </tbody>
    </table>
    <div className="border-dashed border-b  border-slate-400 pb-2"></div>
    <div className="pt-4 flex justify-between">
      <span>Tổng tiền thanh toán</span>
      <div className="">
        <span className="text-[#0053DC] font-medium text-xl">{totalPrice} 200.000 VND</span>
        <p className="text-sm opacity-50">Đã bao gồm VAT</p>
      </div>
    </div>
  </div>
)

const WatchStatusButton = ({ watched, toggleWatched }) => (
  <button
    className="mt-4 text-sm font-medium whitespace-nowrap text-black text-opacity-50 max-md:mt-10"
    onClick={toggleWatched}
  >
    <span className="flex opacity-50 ">
      <span>
        {watched ? (
          <span className="flex opacity-50 items-center ">
            <IconCheck /> Đã xem
          </span>
        ) : (
          'Chưa xem'
        )}
      </span>
    </span>
  </button>
)

const CinemaTicketOverview = ({ cinemaInfo = fakedata, ticketInfo }) => {
  const [watched, setWatched] = useState(true)

  const toggleWatched = () => setWatched(!watched)

  return (
    <section className="w-full">
      <div>
        <h1 className="text-2xl pb-2 border-b border-black pl-6">Vé của tôi</h1>
        <div className="flex gap-10 my-10 max-w-[900px] mx-auto w-full max-md:px-5">
          <Button onClick={() => setWatched(false)} primary={!watched}>
            Vé chưa xem
          </Button>
          <Button onClick={() => setWatched(true)} primary={watched}>
            Vé đã xem
          </Button>
        </div>
      </div>

      {watched &&
        array.fill(3).map(() => {
          return (
            <div key="kk" className="px-14 py-6 bg-[#FAEBE9] rounded-xl max-w-[900px] mx-auto w-full max-md:px-5 mb-4">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={cinemaInfo.imageSrc}
                    alt={cinemaInfo.altText}
                    className="self-stretch my-auto max-w-full rounded-xl  aspect-[0.81] w-[180px] max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full ">
                  <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                    <CinemaInformation {...cinemaInfo} toggleWatched={() => toggleWatched()} />
                    {/* <WatchStatusButton watched={watched} toggleWatched={toggleWatched} /> */}
                  </div>
                  <div className="mt-5 max-md:max-w-full">
                    <TicketInformation {...ticketInfo} />
                  </div>
                </div>
              </div>
            </div>
          )
        })}

      {!watched &&
        array.fill(3).map(() => {
          return (
            <div key="kk" className="px-14 py-6 bg-[#FAEBE9] rounded-xl max-w-[900px] mx-auto w-full max-md:px-5 mb-4">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={cinemaInfo.imageSrc}
                    alt={cinemaInfo.altText}
                    className="self-stretch my-auto max-w-full rounded-xl  aspect-[0.81] w-[180px] max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full ">
                  <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                    <CinemaInformation {...cinemaInfo} />
                    {/* <WatchStatusButton watched={watched} toggleWatched={toggleWatched} /> */}
                  </div>
                  <div className="mt-5 max-md:max-w-full">
                    <TicketInformation {...ticketInfo} />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </section>
  )
}

export default CinemaTicketOverview
