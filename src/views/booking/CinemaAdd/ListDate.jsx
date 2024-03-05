import { format, addDays } from 'date-fns'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from 'components/Button'

import { setDay } from 'stores/booking/slice'

const formatDateTime = (date) => {
  return format(date, 'yyyy-MM-dd')
}

const currentDate = formatDateTime(new Date())

const dates = []

dates.push({ id: 0, value: currentDate })

// Thêm 29 ngày tiếp theo vào mảng
for (let i = 1; i < 30; i++) {
  const nextDate = addDays(currentDate, i)
  dates.push({ id: i, value: formatDateTime(nextDate) })
}

const ListDate = () => {
  const dispatch = useDispatch()
  const { day } = useSelector((state) => state.booking)

  useEffect(() => {
    if (!day)
      dispatch(setDay(dates[0]))
  }, [day, dispatch])

  return (
    <div className="grid grid-cols-10 gap-y-3">
      {dates.map((item, index) => {
        const check = item.id === day?.id
        return (
          <Button
            key={index}
            primary={check}
            disabled={check}
            className='w-20 h-16'
            onClick={() => dispatch(setDay(item))}
          >
            <div className="flex items-center justify-evenly">
              <div className='text-xs'>
                <p>{format(item.value, 'LL')}</p>
                <p>{format(item.value, 'E')}</p>
              </div>
              <span className="text-2xl font-medium">{format(item.value, 'd')}</span>
            </div>
          </Button>
        )})}
    </div>
  )}

export default ListDate