import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Button from 'components/Button'
import Divider from 'components/Divider'
import { padStart } from 'utils/helper'

import { initOrder } from 'stores/booking/slice'


const CardShowtime = ({ movie, cinema, date }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { showtimes, theaters } = useSelector((state) => state.data)
  const listShowtime = showtimes.filter((item) => item.movieId === movie._id && item.dateId === date._id)
  const listTheaterId = listShowtime.map((item) => item.theaterId)
  const listTheater = theaters.filter((item) => item.cinemaId === cinema._id && listTheaterId.includes(item._id))
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedTheater, setSelectedTheater] = useState(null)

  const handleSelect = (time, theater) => {
    setSelectedTime(time)
    setSelectedTheater(theater)
  }

  const handleBookingTicket = () => {
    dispatch(initOrder({ navigate, order: 'ticket', data: { movie, cinema, theater: selectedTheater, showtime: selectedTime } }))
  }

  return (
    listTheater.length ?
      <div className="w-full h-96 px-12 flex flex-col">
        {/* Title */}
        <div className="flex justify-start items-center gap-x-4">
          <h1 className="text-4xl font-mono">{movie.title}</h1>
          <p>T{movie.ageRestriction}</p>
        </div>
        <div className="flex justify-start gap-x-4">
          {/* Poster */}
          <img src={movie.poster} alt={movie.title} className="h-80 rounded-xl aspect-auto" />
          <div className="flex flex-col justify-between h-full w-full">
            <div className="flex flex-col justify-start h-full w-full">
              <h1 className="text-4xl font-medium">{cinema.name}</h1>
              {listTheater.map((itemTheater) => (
                <div key={itemTheater._id} className="flex flex-col gap-y-2">
                  <h2 className="text-xl font-medium">{itemTheater.name +' '+ itemTheater.type}</h2>
                  <div className="flex gap-x-4">
                    {listShowtime.filter((i) => i.theaterId === itemTheater._id).map((itemTime) => (
                      <Button key={itemTime._id} primary={itemTime === selectedTime} onClick={() => handleSelect(itemTime, itemTheater)} className="h-12">
                        {`${padStart(itemTime.start)} ${itemTime.start < 12 ? 'AM' : 'PM'}`}
                      </Button>
                    ))}
                  </div>
                </div>))}
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
      </div>: null
  )
}

export default CardShowtime
