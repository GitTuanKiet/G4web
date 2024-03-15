
import { useSelector, useDispatch } from 'react-redux'

import { bookChairs } from 'stores/booking/slice'

const NormalChair = ({ chair, className }) => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.booking)

  const { showtime, chairs, chairsPrice } = data
  const isChecked = chairs?.includes(chair)
  const disabled = showtime?.bookedChairs.includes(chair)
  const color = disabled ? 'bg-gray-500 opacity-60' : 'bg-green-500 opacity-100'
  const priceChair = showtime.price

  const handleChecked = () => {
    if (disabled) return
    if (isChecked) {
      const newChairs = chairs.filter((item) => item !== chair)
      dispatch(bookChairs({ chairs: newChairs, price: chairsPrice - priceChair }))
    } else {
      const newChairs = [...chairs, chair]
      dispatch(bookChairs({ chairs: newChairs, price: chairsPrice + priceChair }))
    }
  }

  return (
    <div className={className}>
      <button
        className={`w-10 h-10 shadow-md rounded-xl text-[10px] ${color} ${isChecked && 'opacity-80'} transition-opacity duration-300`}
        disabled={disabled}
        onClick={() => handleChecked()}
      >
        <span>{isChecked ? '✔' : chair}</span>
      </button>
    </div>
  )
}

export default NormalChair

