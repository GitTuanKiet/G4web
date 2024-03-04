import { useDispatch, useSelector } from 'react-redux'

import ComboCard from './ComboCard'

import { setCombo } from 'stores/booking/slice'

const fake = {
  image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa55cc058528581e2ea5d261f091ced63d6477962be2ab8059c900db7871722c?apiKey=a8afef7bb7724cdfb195c3c79e17a7b1&',
  price: 50
}

const fakeData = [
  { ...fake, name: 'Combo bỏng mắt', id: 1 },
  { ...fake, name: 'Combo bỏng + nước', id: 2 },
  { ...fake, name: 'Combo bỏng + nước + thịt', id: 3 },
  { ...fake, name: 'Combo bỏng + nước + thịt + rau', id: 4 },
  { ...fake, name: 'Combo bỏng + nước + thịt + rau + cơm', id: 5 }
]

const Combo = ({ price, setPrice }) => {
  const dispatch = useDispatch()
  const { combo } = useSelector((state) => state.booking)

  const handleSetPrice = (type, item) => {
    // check if item already in combo
    const isExist = combo.find((i) => i.id === item.id)
    if (type === '+') {
      if (isExist) {
        dispatch(setCombo(combo.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)))
        setPrice(price + Number(item.price))
        return
      }

      dispatch(setCombo([...combo, { ...item, quantity: 1 }]))
      setPrice(price + Number(item.price))
    }

    if (type === '-') {
      if (isExist.quantity === 1) {
        dispatch(setCombo(combo.filter((i) => i.id !== item.id)))
        setPrice(price - Number(item.price))
        return
      }

      dispatch(setCombo(combo.map((i) => i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i)))
      setPrice(price - Number(item.price))
    }
  }

  return (
    <div>
      <div className="bg-rose-100 flex flex-col h-auto w-[800px] gap-4 p-4">
        {fakeData.map((item) => (
          <ComboCard key={item.id} id={item.id} {...item} handleSetPrice={handleSetPrice} />
        ))}
      </div>
    </div>
  )
}

export default Combo