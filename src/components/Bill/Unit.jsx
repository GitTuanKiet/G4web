

const Unit = ({ value, currency = 'USD' }) => {
  if (!value) return null
  const price = (value).toLocaleString('en', { style: 'currency', currency: currency })
  return (
    <span className="text-blue-500 text-[16px]">{price}</span>
  )
}

export default Unit