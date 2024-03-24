import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Content from './Content'
import Divider from 'components/Divider'
import Button from 'components/Button'
// ==============================|| THEATER ||============================== //

const Theater = () => {
  const { cities, cinemas } = useSelector((state) => state.data)
  const [selectedCity, setSelectedCity] = useState(null)
  const [showCinemas, setShowCinemas] = useState([])
  const [selectedCinema, setSelectedCinema] = useState(null)

  useEffect(() => {
    if (cinemas) {
      const filters = cinemas.filter((item) => item.city === selectedCity?.name)
      setShowCinemas(filters)
    }
  }, [selectedCity, cinemas])

  return (
    <div>
      {/* Site */}
      <div className="w-full h-auto min-h-96 ">
        <div className="bg-gray-400 my-20 p-2 rounded-xl">
          <div className="w-full border-4 p-5 rounded-xl">
            {/* Title */}
            <h1 className="text-6xl text-center font-mono text-red-500">CGV CINEMAS</h1>
            <Divider border white />
            {/* City */}
            <List data={cities} selected={selectedCity} setSelected={setSelectedCity} />
            <Divider border white />
            {/* List */}
            <List data={showCinemas} selected={selectedCinema} setSelected={setSelectedCinema} />
          </div>
        </div>
        {/* Content */}
        {selectedCinema && <Content cinema={selectedCinema} />}
      </div>
    </div>
  )
}

export default Theater

const List = ({ data, selected, setSelected }) => {
  return (
    <div className="w-full h-auto">
      <div className="grid grid-cols-4 gap-2 mobile:grid-cols-2">
        {data ? (
          data.map((item) => (
            <Button noborder key={item._id} primary={item === selected} onClick={() => setSelected(item)}>
              {item.name}
            </Button>
          ))
        ) : (
          <div>Không có dữ liệu</div>
        )}
      </div>
    </div>
  )
}
