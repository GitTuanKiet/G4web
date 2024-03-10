
import logo from 'assets/images/logo.png'
import IconCheck from 'components/icons/IconCheck'
import { padStart } from 'utils/helper'
import { format } from 'date-fns'

const CinemaInformation = ({ cinemaName, movieTitle, genres, duration, watched }) => (
  <div className="flex flex-col grow text-sm font-medium text-black text-opacity-50 max-md:mt-10">
    <div className="flex gap-10 pb-4 items-center  text-base text-black text-opacity-70">
      <img loading="lazy" src={logo} alt={cinemaName} className="mix-blend-darken aspect-[1.47] w-[66px]" />
      <div className=" flex justify-between w-full">
        <span>{cinemaName}</span>
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
      <div className="pt-2">{genres?.join(', ')}</div>
      <div className="pt-2">Thời lượng: {duration} phút</div>
    </div>
  </div>
)

const TicketInformation = ({ day, time, total, type, chairs }) => (
  <div>
    <table className="table-auto w-full text-left  ">
      <thead>
        <tr className="">
          <th className="font-normal opacity-50 ">Ngày chiếu</th>
          <th className="font-normal opacity-50">Suất chiếu</th>
          <th className="font-normal opacity-50">Số lượng vé</th>
          <th className="font-normal opacity-50">Số ghế</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{day && format(new Date(day), 'dd/MM/yyyy')}</td>
          <td>{time && padStart(time)}</td>
          <td>{type}</td>
          <td>{chairs?.join(', ')}</td>
        </tr>
      </tbody>
    </table>
    <div className="border-dashed border-b  border-slate-400 pb-2"></div>
    <div className="pt-4 flex justify-between">
      <span>Tổng tiền thanh toán</span>
      <div className="">
        <span className="text-[#0053DC] font-medium text-xl">{total}</span>
        <p className="text-sm opacity-50">Đã bao gồm VAT</p>
      </div>
    </div>
  </div>
)

export { CinemaInformation, TicketInformation }