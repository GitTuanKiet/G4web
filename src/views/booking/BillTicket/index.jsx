
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Content from './Content'
import Divider from 'components/Divider'
import Line from 'components/Bill/Line'
import Unit from 'components/Bill/Unit'
import GroupButton from 'components/Bill/GroupButton'
import Info from 'components/Bill/Info'
import Logo from 'components/icons/Logo'

const BillTicket = ({ handleStep }) => {
  const { slug } = useParams()
  const { movies, cinemas } = useSelector((state) => state.data)
  const { voucher, showtime, total } = useSelector((state) => state.booking)

  const movie = movies.find((item) => item.slug === slug)
  const cinema = cinemas.find((item) => item._id === showtime?.cinemaId)

  const { poster, title } = movie || { poster: '', title: '' }
  const { discount } = voucher || { discount: 0 }

  const totalEnd = total >= discount ? total - discount : 0
  const dataTotal = [
    {
      key: 'Giảm giá',
      value: Unit({ value: discount })
    },
    {
      key: 'Phí VAT',
      value: Unit({ value: totalEnd * 0.1 })
    },
    {
      key: 'Tổng',
      value: Unit({ value: totalEnd * 1.1 })
    }
  ]

  return (
    <div>
      <div className="rounded-xl h-auto w-80 bg-rose-100 p-4 text-[15px]">
        {/* Title */}
        <div className="flex justify-between items-center">
          <div className='w-16'>
            <Logo />
          </div>
          <p className="font-sans text-xl">{cinema?.name || ''}</p>
        </div>
        <Divider />
        {/* Info */}
        <Info
          image={poster}
          title={title}
          other={movie ? [movie.language, movie.duration, movie.ageRestriction] : []}
          ticket
        />
        {/* Content */}
        <Content />
        {/* Total */}
        {total > 0 ?
          <>
            <div>
              {dataTotal.map((item, index) => (
                <Line key={index} keyName={item.key} value={item.value} />
              ))}
            </div>
            <Divider />
          </> : null}
        {/* group button */}
        <GroupButton handleStep={handleStep} start={0} end={4} />
      </div>
    </div>
  )
}
export default BillTicket