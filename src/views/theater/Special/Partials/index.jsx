import { useParams, Navigate } from 'react-router-dom'

// project imports
import TheaterGoldClass from './GoldClass'
import Theater3D from './3D'

const Partials = ({ data }) => {
  const { slug } = useParams()
  const theater = data.filter((item) => item.slug === slug)

  if (!theater.length) {
    return <Navigate to="/theater/special/gold-class" />
  }

  const cinemas = theater[0]?.cinemas

  return (
    <>
      {slug === 'gold-class' && <TheaterGoldClass data={cinemas} />}
      {slug === '3d' && <Theater3D data={cinemas} />}
    </>
  )
}

export default Partials