import { useState } from 'react'
const CoupleChair = ({ id, checked, price, setChair }) => {
  const color = checked ? 'bg-gray-500' : 'bg-red-500'
  const [isChecked, setChecked] = useState(false)
  const handleButtonClick = () => {
    const checked = !isChecked
    setChecked(checked)
    const chairInfo = { id, checked, price }
    setChair(chairInfo)
  }
  return (
    <>
      <button
        className={`w-16 h-8 shadow-md rounded-xl text-[10px] ${color} ${checked ? 'opacity-50' : 'opacity-100'}`}
        disabled={checked}
        onClick={handleButtonClick}
      >
        <span>{isChecked ? '✔' : id}</span>
      </button>
    </>
  )
}
export default CoupleChair
