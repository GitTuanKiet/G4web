import { useParams } from 'react-router-dom'

// project imports
import TheaterGoldClass from './GoldClass'
import Theater3D from './3D'
import { useSelector } from 'react-redux'

const Partials = () => {
  const { slug } = useParams()
  const { cinemas } = useSelector((state) => state.data)
  const theater3D = cinemas.filter((item) => item.type === '3D')
  const theater2D = cinemas.filter((item) => item.type === '2D')

  return (
    <>
      {!slug && <TheaterGoldClass data={theater2D} />}
      {slug === 'gold-class' && <TheaterGoldClass data={theater2D} />}
      {slug === '3d' && <Theater3D data={theater3D} />}
    </>
  )
}

export default Partials