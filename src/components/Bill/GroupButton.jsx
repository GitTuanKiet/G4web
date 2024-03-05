import { useSelector } from 'react-redux'

import Button from 'components/Button'


const GroupButton = ({ handleStep, start, end }) => {
  const { step } = useSelector((state) => state.booking)
  const isStart = step === start
  const isEnd = step === end
  return (
    <div className="flex justify-around">
      <Button onClick={() => handleStep(step - 1)}>{isStart ? 'Hủy' : 'Quay lại'}</Button>
      <Button primary onClick={() => handleStep(step + 1)}>{isEnd ? 'Thanh toán' : 'Tiếp tục'}</Button>
    </div>
  )
}

export default GroupButton