
import { CinemaInformation, TicketInformation } from './TicketCard'
import { useSelector } from 'react-redux'

const ListTicket = ({ tickets, watched }) => {
  const { showtimes, movies, cinemas } = useSelector((state) => state.data)

  return (
    <div>
      {tickets.length ? tickets.map((item) => {
        const showtime = showtimes.find((showtime) => showtime._id === item?.showtimeId)
        const cinema = cinemas.find((cinema) => cinema._id === showtime?.cinemaId)
        const movie = movies.find((movie) => movie._id === showtime?.movieId)
        return (
          <div key={item._id} className="px-14 py-6 bg-[#FAEBE9] rounded-xl max-w-[900px] mx-auto w-full max-md:px-5 mb-4">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={movie?.poster}
                  alt={movie?.title}
                  className="self-stretch my-auto max-w-full rounded-xl  aspect-[0.81] w-[180px] max-md:mt-10"
                />
              </div>
              <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full ">
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                  <CinemaInformation
                    cinemaName={cinema?.name}
                    movieTitle={movie?.title}
                    genres={movie?.genres}
                    duration={movie?.duration}
                    watched={watched}
                  />
                </div>
                <div className="mt-5 max-md:max-w-full">
                  <TicketInformation
                    day={showtime?.day}
                    time={showtime?.start}
                    total={item?.total}
                    type={cinema?.type}
                    chairs={item?.chairs}
                  />
                </div>
              </div>
            </div>
          </div>
        )
      }) : <div className="text-center">Không có vé nào</div>
      }
    </div>
  )
}

export default ListTicket