import React from 'react'
import { useParams } from 'react-router-dom'
import Gift from 'views/cultureplex/gift'
import giftData from 'pages/Cultureplex'

const Detail = () => {
  const { id } = useParams()
  const selectedItem = data[id]
  return (
    <>
      {
        selectedItem.map((item, index) => (
          <div className='w-[70rem] flex flex-col justify-start'>
            <p className='text-xl font-bold'>{item.title}</p>
            <div className='flex flex-row gap-4 my-4'>
              {
                item.img.map((imgItem, imgIndex) => (
                  <Gift title={imgItem.title} img_url={imgItem.img_url} />
                ))
              }
            </div>
          </div>
        ))

      }

    </>
  )


}
export default Detail
