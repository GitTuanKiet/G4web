import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from 'components/Button'
import Divider from 'components/Divider'

import { setFilter } from 'stores/booking/slice'

const ListCity = ({ listCinema }) => {
  const dispatch = useDispatch()
  const { cities } = useSelector((state) => state.data)
  const { filter } = useSelector((state) => state.booking)

  const [listCity, setListCity] = useState(cities)
  const [selectedCity, setSelectedCity] = useState(filter?.city || null)

  useEffect(() => {
    let listCity = []
    if (listCinema.length) {
      const listNameCity = listCinema.map((cinema) => cinema.city)
      listCity = cities.filter((city) => listNameCity.includes(city.name))
    }
    setListCity([...new Set(listCity)])
  }, [listCinema, cities])

  const handleSetFilterCity = useCallback((city) => {
    if (selectedCity) {
      const checked = city.id === selectedCity.id
      if (checked) {
        setSelectedCity(null)
        dispatch(setFilter({ city: null }))
        return
      }
    }
    setSelectedCity(city)
    dispatch(setFilter({ city }))
  }, [dispatch, selectedCity])

  return (
    listCity.length ?
      <>
        <div className="grid grid-cols-6 gap-2">
          {listCity.map((item) => {
            const check = item.id === selectedCity?.id
            return (
              <Button
                key={item.id}
                primary={check}
                onClick={() => handleSetFilterCity(item)}
              >
                {item.name}
              </Button>
            )
          })}
        </div>
        <Divider />
      </> : null
  )
}

export default ListCity