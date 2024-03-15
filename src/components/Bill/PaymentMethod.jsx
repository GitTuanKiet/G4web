import { useDispatch, useSelector } from 'react-redux'

import AtmSrc from 'assets/images/payment-methods/napas.png'
import VisaSrc from 'assets/images/payment-methods/visa-master-amex-jcb.jfif'
import MomoSrc from 'assets/images/payment-methods/momo.png'
import ZaloSrc from 'assets/images/payment-methods/zalopay.png'
import ShopeeSrc from 'assets/images/payment-methods/shopeepay.png'
import VnPaySrc from 'assets/images/payment-methods/vnpay.png'

import { setMethod } from 'stores/payment/slice'
const paymentOptionsData = [
  {
    value: 'atm',
    logoSrc: AtmSrc,
    altText: 'ATM nội địa Napas',
    description: 'Thẻ ATM nội địa Napas'
  },
  {
    value: 'visa-master',
    logoSrc: VisaSrc,
    altText: 'Thẻ quốc tế',
    description: 'Thẻ quốc tế (Visa, Master)'
  },
  {
    value: 'momo',
    logoSrc: MomoSrc,
    altText: 'MoMo',
    description: 'MoMo: Nhập MMCGV24 -5k/bill'
  },
  {
    value: 'zalopay',
    logoSrc: ZaloSrc,
    altText: 'ZaloPay',
    description: 'ZaloPay: 84k/vé + quà 50k đặt xe Be'
  },
  {
    value: 'shopeepay',
    logoSrc: ShopeeSrc,
    altText: 'ShopeePay',
    description: 'ShopeePay'
  },
  {
    value: 'vnpay',
    logoSrc: VnPaySrc,
    altText: 'VNPAY',
    description: 'VNPAY'
  }
]

const PaymentOption = ({ value, logoSrc, altText, description, selected, onSelected }) => (
  <button
    className={`flex h-14 gap-5 justify-start items-center py-2 px-4 rounded-lg ${
      selected ? 'shadow-md bg-white' : 'hover:bg-rose-500'
    } w-full max-md:flex-wrap max-md:max-w-full transition duration-150 ease-in-out`}
    onClick={onSelected}
  >
    <input type="radio" id={value} name={altText} value={value} checked={selected} onChange={onSelected} />
    <div className="h-full w-20">
      <img src={logoSrc} alt={altText} className="mix-blend-darken aspect-auto h-full" />
    </div>
    <span className="">{description}</span>
  </button>
)

const PaymentMethodCard = ({ paymentOptions = paymentOptionsData }) => {
  const dispatch = useDispatch()
  const { method } = useSelector((state) => state.payment)

  return (
    <section className="flex flex-col justify-center items-center max-w-4xl min-w-80 mx-auto py-8 w-full mobile:min-w-fit ">
      <div className="flex flex-col bg-rose-100 px-8 py-8 w-full rounded-xl border shadow-lg">
        <h2 className="text-2xl font-semibold text-left text-gray-600">Hình thức thanh toán</h2>
        <div className="my-5 h-[1px] w-full bg-gray-600"></div>
        <div className="flex flex-col gap-4 text-xl text-gray-600 font-medium">
          {paymentOptions.map((option, index) => (
            <PaymentOption
              key={index}
              value={option.value}
              logoSrc={option.logoSrc}
              altText={option.altText}
              description={option.description}
              selected={method === option.value}
              onSelected={() => dispatch(setMethod(option.value))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PaymentMethodCard
