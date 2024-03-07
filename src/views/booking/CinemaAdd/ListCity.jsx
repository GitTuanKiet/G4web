import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from 'components/Button'

import { setCity } from 'stores/booking/slice'

const ListCity = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const { listCity, city } = useSelector((state) => state.booking)
  const findCity = listCity.find((city) => city?.name == user?.city)

  useEffect(() => {
    if (!city)
      dispatch(setCity(findCity || listCity[0]))
  }, [city, dispatch, listCity, findCity])

  return (
    <div className="grid grid-cols-6 gap-2">
      {listCity.map((item) => {
        const check = item.id === city?.id
        return (
          <Button
            key={item.id}
            primary={check}
            disabled={check}
            onClick={() => dispatch(setCity(item))}
          >
            {item.name}
          </Button>
        )})}
    </div>
  )
}

export default ListCity