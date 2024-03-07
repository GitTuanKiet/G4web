
import { useSelector, useDispatch } from 'react-redux'

import { toast } from 'react-toastify'
import { setChairs, setTotal } from 'stores/booking/slice'

const NormalChair = ({ chair, className }) => {
  const dispatch = useDispatch()
  const { showtime, chairs, total } = useSelector((state) => state.booking)

  const isChecked = chairs.includes(chair)
  const disabled = showtime?.bookedChairs.includes(chair)
  const color = disabled ? 'bg-gray-500 opacity-60' : 'bg-green-500 opacity-100'
  const price = showtime.price * 1.5

  const handleChecked = () => {
    if (disabled) return
    if (isChecked) {
      const newChairs = chairs.filter((item) => item !== chair)
      dispatch(setChairs(newChairs))
      dispatch(setTotal(total - price))
    } else {
      if (chairs.length >= 10) {
        toast.error('Bạn chỉ có thể chọn tối đa 10 ghế')
        return
      }
      const newChairs = [...chairs, chair]
      dispatch(setChairs(newChairs))
      dispatch(setTotal(total + price))
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

