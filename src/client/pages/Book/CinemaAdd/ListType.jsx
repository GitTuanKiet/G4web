
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useState, useEffect } from 'react'

import Button from 'components/Button'
import Divider from 'components/Divider'

import { setFilter } from 'stores/booking/slice'

const ListType = ({ listTheater }) => {
  const dispatch = useDispatch()
  const { filter } = useSelector((state) => state.booking)

  const [listType, setListType] = useState([])
  const [selectedType, setSelectedType] = useState(filter?.type || null)

  useEffect(() => {
    let listType = []
    if (listTheater.length) {
      listType = listTheater.map((cinema) => cinema.type)
    }
    setListType([...new Set(listType)])
  }, [listTheater])

  const handleSetFilterType = useCallback((type) => {
    if (selectedType) {
      const checked = type === selectedType
      if (checked) {
        setSelectedType(null)
        dispatch(setFilter({ type: null }))
        return
      }
    }
    dispatch(setFilter({ type }))
    setSelectedType(type)
  }, [dispatch, selectedType])

  return (
    listType.length ?
      <>
        <div className="flex gap-x-2">
          {listType.map((item, index) => {
            const check = item === selectedType
            return (
              <Button
                key={index}
                primary={check}
                onClick={() => handleSetFilterType(item)}
              >
                {item}
              </Button>
            )})}
        </div>
        <Divider />
      </> : null
  )
}

export default ListType