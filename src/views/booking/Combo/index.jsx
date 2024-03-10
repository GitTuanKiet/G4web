import { useDispatch, useSelector } from 'react-redux'

import ComboCard from './ComboCard'

import { bookCombo } from 'stores/booking/slice'

const fake = {
  image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa55cc058528581e2ea5d261f091ced63d6477962be2ab8059c900db7871722c?apiKey=a8afef7bb7724cdfb195c3c79e17a7b1&',
  price: 50
}

const fakeData = [
  { ...fake, name: 'Combo bỏng mắt', _id: 1 },
  { ...fake, name: 'Combo bỏng + nước', _id: 2 },
  { ...fake, name: 'Combo bỏng + nước + thịt', _id: 3 },
  { ...fake, name: 'Combo bỏng + nước + thịt + rau', _id: 4 },
  { ...fake, name: 'Combo bỏng + nước + thịt + rau + cơm', _id: 5 }
]

const Combo = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.booking)

  const { combo, comboPrice } = data
  const handleSetPrice = (type, item) => {
    // check if item already in combo
    const isExist = combo.find((i) => i._id === item._id)
    if (type === '+') {
      if (isExist) {
        const newCombo = combo.map((i) => i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i)
        dispatch(bookCombo({ combo: newCombo, price: comboPrice + Number(item.price) }))
        return
      }

      const newCombo = [...combo, { ...item, quantity: 1 }]
      dispatch(bookCombo({ combo: newCombo, price: comboPrice + Number(item.price) }))
    }

    if (type === '-') {
      if (isExist.quantity === 1) {
        const newwCombo = combo.filter((i) => i._id !== item._id)
        dispatch(bookCombo({ combo: newwCombo, price: comboPrice - Number(item.price) }))
        return
      }

      const newCombo = combo.map((i) => i._id === item._id ? { ...i, quantity: i.quantity - 1 } : i)
      dispatch(bookCombo({ combo: newCombo, price: comboPrice - Number(item.price) }))
    }
  }

  return (
    <div>
      <div className="bg-rose-100 flex flex-col h-auto w-[800px] gap-4 p-4">
        {fakeData.map((item) => (
          <ComboCard key={item._id} _id={item._id} {...item} handleSetPrice={handleSetPrice} />
        ))}
      </div>
    </div>
  )
}

export default Combo