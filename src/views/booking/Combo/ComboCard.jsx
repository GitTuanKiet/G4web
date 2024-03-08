import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Unit from 'components/Bill/Unit'

const Image = ({ src, alt }) => (
  <img src={src} alt={alt} className="aspect-square w-[74px]" loading="lazy" />
)

const PriceAndQuantity = ({ price, imageMinus, imagePlus, quantity, handleSetQuantity }) => (
  <div className="flex gap-5 justify-between items-center my-auto">
    <div className="flex-auto">
      {Unit({ value: price })}
    </div>
    <div className="flex gap-5 text-black whitespace-nowrap">
      <button onClick={() => handleSetQuantity('-')} disabled={quantity === 0}>
        <Image src={imageMinus} alt="Decrease quantity" />
      </button>
      <div className="my-auto">{quantity}</div>
      <button onClick={() => handleSetQuantity('+')}>
        <Image src={imagePlus} alt="Increase quantity" />
      </button>
    </div>
  </div>
)

const ComboCard = ({ _id, image, name, price, handleSetPrice }) => {
  const { combo } = useSelector((state) => state.booking)
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const isExist = combo.find((i) => i._id === _id)
    if (isExist) {
      setQuantity(isExist.quantity)
    }
  }, [combo, _id])

  useEffect(() => {
    if (quantity < 0) {
      setQuantity(0)
    }
  }
  , [quantity])

  const handleSetQuantity = (type) => {
    if (type === '+') {
      setQuantity(quantity + 1)
      handleSetPrice('+', { price, _id, name })
    } else {
      setQuantity(quantity - 1)
      handleSetPrice('-', { price, _id, name })
    }
  }
  return (
    <article className="flex gap-5 justify-between px-6 py-4 text-base font-medium rounded-xl border-solid bg-zinc-300 bg-opacity-30 border-[0.5px] border-black border-opacity-30 max-w-[800px] sm:flex-wrap sm:px-5">
      <div className="flex gap-5 justify-between text-black">
        <Image src={image} alt={name} />
        <div className="flex-auto my-auto">{name}</div>
      </div>
      <PriceAndQuantity
        price={price*quantity}
        imageMinus="https://cdn.builder.io/api/v1/image/assets/TEMP/e98ee89bab86ecd750e9bb7a32729a090dddcd2e85436a01a6e230bb2847e2e2?apiKey=a8afef7bb7724cdfb195c3c79e17a7b1&"
        imagePlus="https://cdn.builder.io/api/v1/image/assets/TEMP/87fa1eb99f33082596c4e71d6f43ed162dd169cda2613cae0e16756751f3fac1?apiKey=a8afef7bb7724cdfb195c3c79e17a7b1&"
        quantity={quantity}
        handleSetQuantity={handleSetQuantity}
      />
    </article>
  )
}

export default ComboCard