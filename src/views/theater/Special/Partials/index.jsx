import { useParams } from 'react-router-dom'

// project imports
import TheaterGoldClass from './GoldClass'
import Theater3D from './3D'
import { useSelector } from 'react-redux'

const Partials = () => {
  const { slug } = useParams()
  const { theaters, cinemas } = useSelector((state) => state.data)
  const listCinemaIdHaveTheater3D = theaters.map((item) => { if (item.type === '3D') return item.cinemaId })
  const listCinemaIdHaveTheater2D = theaters.map((item) => { if (item.type === '2D') return item.cinemaId })

  const listCinema3D = cinemas.filter((item) => listCinemaIdHaveTheater3D.includes(item._id))
  const listCinema2D = cinemas.filter((item) => listCinemaIdHaveTheater2D.includes(item._id))

  return (
    <>
      {!slug && <TheaterGoldClass data={listCinema2D} />}
      {slug === 'gold-class' && <TheaterGoldClass data={listCinema2D} />}
      {slug === '3d' && <Theater3D data={listCinema3D} />}
    </>
  )
}

export default Partials