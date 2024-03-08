import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Button from 'components/Button'
import Divider from 'components/Divider'
import { padStart } from 'utils/helper'

import { setStep, setShowtime } from 'stores/booking/slice'


const CardShowtime = ({ movie, cinema, date }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { showtimes } = useSelector((state) => state.data)
  const filters = showtimes.filter((item) => item.movieId === movie._id && item.cinemaId === cinema._id && item.dateId === date._id)
  const [selectedTime, setSelectedTime] = useState(null)

  const handleBookingTicket = () => {
    dispatch(setShowtime(selectedTime))
    dispatch(setStep(1))
    navigate(`/booking-ticket/${movie.slug}`)
  }

  return (
    filters.length ?
      <div className="w-full h-96 px-12 flex flex-col">
        {/* Title */}
        <div className="flex justify-start items-center gap-x-4">
          <h1 className="text-4xl font-mono">{movie.title}</h1>
          <p>T{movie.ageRestriction}</p>
        </div>
        <div className="flex justify-start gap-x-4">
          {/* Poster */}
          <img src={movie.poster} alt={movie.title} className="h-80 rounded-xl aspect-auto" />
          {/* Showtime */}
          <div className="flex flex-col justify-between h-full w-full">
            <div className="flex flex-col gap-y-2">
              <h2 className="text-2xl font-medium">{cinema.name}</h2>
              <h3 className="text-3xl font-medium">{cinema.type}</h3>
              <div className="flex gap-x-4">
                {filters.map((item) => (
                  <Button key={item._id} primary={item === selectedTime} onClick={() => setSelectedTime(item)} className="h-12">
                    {`${padStart(item.start)} ${item.start < 12 ? 'AM' : 'PM'}`}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex justify-start items-center gap-x-2">
              <Button to={`/movie/detail/${movie.slug}`} primary>
                {'Chi tiết phim'}
              </Button>
              <Button primary={selectedTime} disabled={!selectedTime} onClick={handleBookingTicket}>
                {selectedTime ? 'Mua vé' : 'Chọn suất'}
              </Button>
            </div>
          </div>
        </div>
        <Divider border />
      </div> : null
  )
}

export default CardShowtime
