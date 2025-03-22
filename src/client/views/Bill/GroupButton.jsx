import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from 'components/Button'


const GroupButton = ({ handleStep, start, end }) => {
  const navigate = useNavigate()
  const { step } = useSelector((state) => state.booking)
  const { loading } = useSelector((state) => state.payment)
  const isStart = step === start
  const isEnd = step === end
  const isBooking = step === end + 1
  return (
    loading ? <Button primary wFull disabled>Loading...</Button> :
      isBooking ? <Button primary wFull onClick={() => navigate('/')} >Quay về trang chủ</Button> :
        <div className="flex justify-around">
          <Button onClick={() => handleStep(step - 1)}>{isStart ? 'Hủy' : 'Quay lại'}</Button>
          <Button primary onClick={() => handleStep(step + 1)}>{isEnd ? 'Thanh toán' : 'Tiếp tục'}</Button>
        </div>
  )
}

export default GroupButton