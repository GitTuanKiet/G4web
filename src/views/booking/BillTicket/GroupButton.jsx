import { useSelector } from 'react-redux'

import Button from 'components/Button'


const GroupButton = ({ handleStep }) => {
  const { step } = useSelector((state) => state.booking)
  const start = step === 0
  const end = step === 4
  return (
    <div className="flex justify-around">
      <Button onClick={() => handleStep(step - 1)}>{start ? 'Hủy' : 'Quay lại'}</Button>
      <Button primary onClick={() => handleStep(step + 1)}>{end ? 'Thanh toán' : 'Tiếp tục'}</Button>
    </div>
  )
}

export default GroupButton