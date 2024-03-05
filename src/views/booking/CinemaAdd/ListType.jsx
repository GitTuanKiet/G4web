
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import Button from 'components/Button'

import { setType } from 'stores/booking/slice'

const ListType = () => {
  const dispatch = useDispatch()
  const { listType, type } = useSelector((state) => state.booking)

  useEffect(() => {
    if (!type)
      dispatch(setType(listType[0]))
  }, [type, dispatch, listType])

  return (
    <div className="flex gap-x-2">
      {listType.map((item) => {
        const check = item.id === type?.id
        return (
          <Button
            key={item.id}
            primary={check}
            disabled={check}
            onClick={() => dispatch(setType(item))}
          >
            {item.name}
          </Button>
        )})}
    </div>
  )
}

export default ListType