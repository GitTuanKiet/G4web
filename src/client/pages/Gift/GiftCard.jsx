import { Link } from 'react-router-dom'

const GiftCard = ({ img_url, slug }) => {
  return (
    <Link to={`/gifts/detail/${slug}`}>
      <img src={img_url} alt={slug} className='border rounded-2xl w-50 h-40 object-fill hover:-translate-y-3 transition-transform transform duration-300' />
    </Link>
  )
}

export default GiftCard