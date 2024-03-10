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
  const { cinemas, showtimes } = useSelector((state) => state.data)
  const { filter, data } = useSelector((state) => state.booking)

  const { showtime, movie } = data
  const { city, type, date } = filter
  const [listCinema, setListCinema] = useState([])
  const [listShowtime, setListShowtime] = useState([])

  useEffect(() => {
    let listShowtime = []
    // filter list showtime by movie, date
    if (movie) {
      listShowtime = showtimes.filter((item) => item.movieId === movie._id)
    }
    if (date) {
      listShowtime = listShowtime.filter((item) => item.dateId === date._id)
    }

    setListShowtime(listShowtime)
  }, [movie, showtimes, date])

  useEffect(() => {
    let filterCinema = []
    // filter list cinema by list showtime
    if (listShowtime.length) {
      const listIdCinema = listShowtime.map((showtime) => showtime.cinemaId)
      filterCinema = cinemas.filter((cinema) => listIdCinema.includes(cinema._id))
    }
    if (city) {
      filterCinema = filterCinema.filter((cinema) => cinema.city === city.name)
    }
    if (type) {
      filterCinema = filterCinema.filter((cinema) => cinema.type === type)
    }

    setListCinema(filterCinema)
  }, [listShowtime, cinemas, city, type])

  return (
    <div>
      <div className="bg-rose-100 flex flex-col h-auto min-w-[800px] p-4">
        {/* Date */}
        <ListDate />

        {/* City */}
        <ListCity listCinema={listCinema} />

        {/* Type */}
        <ListType listCinema={listCinema} />

        {/* Cinema */}
        {listCinema.length ? listCinema.map((itemCinema) => {
          const filter = listShowtime.filter((time) => time.cinemaId === itemCinema._id)
          return (
            <div key={itemCinema._id} className='flex flex-col gap-y-2'>
              <h1 className="text-4xl">{itemCinema.name}</h1>
              <p>{itemCinema.type}</p>
              <div className="flex gap-4">
                {filter.length ? filter.map((itemShowtime, index) => {
                  const check = itemShowtime._id === showtime?._id
                  return (
                    <Button
                      key={index}
                      primary={check}
                      disabled={check}
                      onClick={() => dispatch(bookShowtime({ showtime: itemShowtime, cinema: itemCinema }))}
                    >
                      {`${padStart(itemShowtime.start)} ${itemShowtime.start < 12 ? 'AM' : 'PM'}`}
                    </Button>
                  )}) : <p className='text-left text-xl'>Không có suất chiếu</p>}
              </div>
            </div>
          )
        }): <p className='text-center text-xl'>Không có rạp chiếu</p>}
      </div>
    </div>
  )
}

export default CinemaAdd