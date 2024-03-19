import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { padStart } from 'utils/helper'

import Button from 'components/Button'
import ListDate from './ListDate'
import ListCity from './ListCity'
import ListType from './ListType'

import { bookShowtime } from 'stores/booking/slice'

function CinemaAdd() {
  const dispatch = useDispatch()
  const { cinemas, showtimes, theaters } = useSelector((state) => state.data)
  const { filter, data } = useSelector((state) => state.booking)

  const { showtime, movie } = data
  const { city, type, date } = filter
  const [listTheater, setListTheater] = useState([])
  const [listCinema, setListCinema] = useState([])
  const [listShowtime, setListShowtime] = useState([])

  useEffect(() => {
    let listShowtime = []
    // filter list showtime by movie, date
    if (movie) listShowtime = showtimes.filter((item) => item.movieId === movie._id)
    if (date) listShowtime = listShowtime.filter((item) => item.dateId === date._id)

    setListShowtime(listShowtime)
  }, [movie, showtimes, date])

  useEffect(() => {
    let filterCinema = cinemas
    // filter list cinema by city
    if (city) {
      filterCinema = filterCinema.filter((cinema) => cinema.city === city.name)
    }
    setListCinema(filterCinema)
  }, [city, cinemas])

  useEffect(() => {
    let filterTheater = []
    // filter list theater by showtime
    if (listShowtime.length) {
      const listIdTheater = listShowtime.map((showtime) => showtime.theaterId)
      filterTheater = theaters.filter((theater) => listIdTheater.includes(theater._id))
    }
    // filter by type
    if (type) filterTheater = filterTheater.filter((theater) => theater.type === type)
    // filter by cinema
    if (listCinema.length) {
      const listIdCinema = listCinema.map((cinema) => cinema._id)
      filterTheater = filterTheater.filter((theater) => listIdCinema.includes(theater.cinemaId))
    }
    setListTheater(filterTheater)
  }, [listShowtime, theaters, type, listCinema])

  return (
    <div className="min-w-[780px] mobile:min-w-fit tablet:min-w-fit">
      <div className="bg-rose-100 flex flex-col h-auto w-full p-4 rounded-lg">
        {/* Date */}
        <ListDate />

        {/* City */}
        <ListCity listCinema={listCinema} />

        {/* Type */}
        <ListType listTheater={listTheater} />

        {/* Cinema */}
        {listTheater.length ? (
          listTheater.map((itemTheater) => {
            const cinema = listCinema.find((item) => item._id === itemTheater.cinemaId)
            const filter = listShowtime.filter((time) => time.theaterId === itemTheater._id)
            return cinema ? (
              <div key={itemTheater._id} className="flex flex-col gap-y-2">
                <h1 className="text-4xl">{cinema.name}</h1>
                <h1 className="text-2xl">{itemTheater.name}</h1>
                <p>{itemTheater.type}</p>
                <div className="grid gap-3 grid-cols-3">
                  {filter.length ? (
                    filter.map((itemShowtime, index) => {
                      const check = itemShowtime._id === showtime?._id
                      return (
                        <Button
                          key={index}
                          primary={check}
                          disabled={check}
                          onClick={() => dispatch(bookShowtime({ cinema: cinema, showtime: itemShowtime, theater: itemTheater }))}
                        >
                          {`${padStart(itemShowtime.start)} ${itemShowtime.start < 12 ? 'AM' : 'PM'}`}
                        </Button>
                      )
                    })
                  ) : <p key={itemTheater._id} className="text-left text-xl">Không có suất chiếu</p>}
                </div>
              </div>
            ) : <p key={itemTheater._id} className="text-center text-xl">Không có rạp chiếu</p>
          })
        ) : <p className="text-center text-xl">Không có phòng chiếu</p>}
      </div>
    </div>
  )
}

export default CinemaAdd
