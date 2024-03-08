
import SucceededImage from 'assets/images/image_succeeded.png'
import Button from 'components/Button'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import OrderApi from 'services/api/orderApi'

function Congratulation({
  title = 'Congratulation',
  description = 'You have successfully completed the payment process. Thank you for choosing our service!',
  redirect = '/',
  titleBtn = 'Go back home'
}) {
  useEffect(() => {
    if (window.location.search) {
      const search = new URLSearchParams(window.location.search)
      const token = search.get('token')
      const PayerID = search.get('PayerID')
      if (token) {
        if (PayerID) {
          OrderApi.checkOrder('paypal', token)
            .then((res) => {
              if (res.status === 200) {
                toast.success(res.data.message)
              }
            })
            .catch((err) => {
              toast.error(err.response.data.message)
            })
        } else {
          OrderApi.cancelOrder('paypal', token)
            .then((res) => {
              if (res.status === 200) {
                toast.info(res.data.message)
              }
            })
            .catch((err) => {
              toast.error(err.response.data.message)
            })
        }
      }
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [])
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
