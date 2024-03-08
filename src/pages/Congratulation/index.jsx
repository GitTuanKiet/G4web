import { useEffect } from 'react'

import OrderApi from 'apis/orderApi'
import { toast } from 'react-toastify'


import SucceededImage from 'assets/images/image_succeeded.png'
import Button from 'components/Button'

function Congratulation() {

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
      <img src={SucceededImage} alt="" className="w-full " />
      <div className="mt-4">
        <h1 className="text-2xl font-bold">Congratulation!</h1>
        <h2 className="mb-10">
          You have successfully completed the payment process. Thank you for choosing our service!
        </h2>
        <Button to="/">Go back home</Button>
      </div>
    </div>
  )
}
export default Congratulation
