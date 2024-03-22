import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useQueryParam } from 'hooks/useQueryParam'

import SucceededImage from 'assets/images/image_succeeded.png'
import Button from 'components/Button'

import { captureOrder } from 'stores/payment/slice'

function Congratulation({
  title = 'Congratulation',
  description = 'You have successfully completed the payment process. Thank you for choosing our service!',
  redirect = '/',
  titleBtn = 'Go back home'
}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = useQueryParam('token')
  const PayerID = useQueryParam('PayerID')

  if (token) {
    dispatch(captureOrder({ token, PayerID, navigate }))
  }

  return (
    <div className="mx-auto text-center my-10">
      <img
        src={SucceededImage}
        alt=""
        className=" ml-[50%] -translate-x-2/4 w-[300px] object-cover  flex justify-center "
      />
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{title}!</h1>
        <h2 className="mb-10">{description}</h2>
        <Button to={redirect}>{titleBtn}</Button>
      </div>
    </div>
  )
}
export default Congratulation
