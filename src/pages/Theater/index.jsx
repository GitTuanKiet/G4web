// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// views components
import Site from 'views/theater/Site'
// import GoldClass from 'views/theater/Special/GoldClass'
// import 3D from 'views/theater/Special/3D'

// ==============================|| THEATER ||============================== //

const Theater = () => {
  return (
    <>
      {/* Site */}
      <div className="w-full h-auto min-h-96 bg-gray-500">
        <Site />
      </div>
    </>
  )
}

export default Theater