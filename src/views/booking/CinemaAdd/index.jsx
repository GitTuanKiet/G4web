import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from 'components/Button'
import Divider from 'components/Divider'
import ListDate from './ListDate'
import ListCity from './ListCity'
import ListType from './ListType'

import { setCinema, setHour } from 'stores/booking/slice'

function CinemaAdd() {
  const dispatch = useDispatch()
  const { listCinema, listTime, type, hour, city, day } = useSelector((state) => state.booking)
  const [filterCinemas, setFilterCinemas] = useState(listCinema)

  useEffect(() => {
    // filter listCinema by type, city
    if (type && city) {
      const filter = listCinema.filter((cinema) => city?.cinemaIds?.includes(cinema.id) && cinema.typeId === type.id)
      setFilterCinemas(filter)
    }
  }, [type, city, listCinema])

  const handleSetCinema = (cinema, hour) => {
    dispatch(setCinema(cinema))
    dispatch(setHour(hour))
  }

  return (
    <div>
      <div className="bg-rose-100 flex flex-col h-auto min-w-[1280px] p-4">
        {/* Date */}
        <ListDate />
        <Divider />

        {/* City */}
        <ListCity />
        <Divider />

        {/* Type */}
        <ListType />
        <Divider />

        {/* Cinema */}
        {filterCinemas.map((itemCinema) => {
          const filter = listTime.filter((time) => time.cinemaId === itemCinema.id && time.dateId === day.id)
          const showDate = filter ? filter[0] : null
          return (
            <div key={itemCinema.id} className='flex flex-col gap-y-2'>
              <h1 className="text-4xl">{itemCinema.name}</h1>
              {type && <p>{type.name}</p>}
              <div className="flex gap-4">
                {showDate && showDate?.time.map((item, index) => {
                  const check = hour?.id === showDate.id && hour?.value === item
                  return (
                    <Button
                      key={index}
                      primary={check}
                      disabled={check}
                      onClick={() => handleSetCinema(itemCinema, { id: showDate.id, value:item })}
                    >
                      {item}
                    </Button>
                  )})}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CinemaAdd