
import { useState } from 'react'

const Chair = ({ id, checked, vip, price, setChair }) => {
  const [isChecked, setChecked] = useState(false)

  const color = checked ? 'bg-gray-500' : vip ? 'bg-yellow-500' : 'bg-green-500'

  const handleButtonClick = () => {
    const checked = !isChecked
    setChecked(checked)
    const chairInfo = { id, checked, price }
    setChair(chairInfo)
  }
  return (
    <>
      <button
        className={`w-8 h-8 shadow-md rounded-xl text-[10px] ${color} ${checked ? 'opacity-50' : 'opacity-100'}`}
        disabled={checked}
        onClick={handleButtonClick}
      >
        <span>{isChecked ? '✔' : id}</span>
      </button>
    </>
  )
}

export default Chair

