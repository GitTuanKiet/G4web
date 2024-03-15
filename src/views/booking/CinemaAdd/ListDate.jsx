import { format } from 'date-fns'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from 'components/Button'
import Divider from 'components/Divider'

import { setFilter } from 'stores/booking/slice'

const ListDate = () => {
  const dispatch = useDispatch()
  const { filter } = useSelector((state) => state.booking)
  const { dates } = useSelector((state) => state.data)

  const [selectedDate, setSelectedDate] = useState(filter?.date || dates[0])

  const handleSetFilterDate = useCallback(
    (date) => {
      dispatch(setFilter({ date }))
      selectedDate._id !== date._id && setSelectedDate(date)
    },
    [dispatch, selectedDate]
  )

  return (
    <>
      <div className="grid grid-cols-10 gap-y-3 mobile:grid-cols-4">
        {dates.map((item, index) => {
          const check = item._id === selectedDate._id
          return (
            <Button
              key={index}
              primary={check}
              disabled={check}
              className="w-16 h-10"
              small
              onClick={() => handleSetFilterDate(item)}
            >
              <div className="flex items-center justify-evenly">
                <div className="text-xs">
                  <p>{format(item.value, 'LL')}</p>
                  <p>{format(item.value, 'E')}</p>
                </div>
                <span className="text-2xl font-medium">{format(item.value, 'd')}</span>
              </div>
            </Button>
          )
        })}
      </div>
      <Divider />
    </>
  )
}

export default ListDate
