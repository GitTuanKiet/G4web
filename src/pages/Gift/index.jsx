import { Link } from 'react-router-dom'
import GiftCard from 'views/cultureplex/GiftCard'

const data = [
  {
    url: 'https://www.cgv.vn/media/cinemas/cms//1/_/1_cgv_tet.png',
    title: 'year of the dragon',
    slug: 'year-of-the-dragon',
    img: [
      {
        slug: 'anh1',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//1/_/1_cgv_tet.png'
      },
      {
        slug: 'anh2',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//3/_/3_dragon.png'
      },
      {
        slug: 'anh3',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//2/_/2_tet_2024.png'
      }
    ]
  },
  {
    url: 'https://www.cgv.vn/media/cinemas/cms//t/h/thank_you_3-1.jpg',
    title: 'thank you',
    slug: 'thank-you',
    img: [
      {
        slug: 'anh4',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//t/h/thank_you_3-1.jpg'
      },
      {
        slug: 'anh5',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//t/h/thank_you_4-1.jpg'
      }
    ]
  }
  ,
  {
    url: 'https://www.cgv.vn/media/cinemas/cms//b/i/birthday_2-1.jpg',
    title: 'birthday',
    slug: 'birthday',
    img: [
      {
        slug: 'anh6',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//b/i/birthday_2-1.jpg'
      },
      {
        slug: 'anh7',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//b/i/birthday_4-1.jpg'
      }
    ]
  },
  {
    url: 'https://www.cgv.vn/media/cinemas/cms//a/u/autumn_2.jpg',
    title: 'FALL-ING FOR YOU',
    slug: 'fall-ing-for-you',
    img: [
      {
        slug: 'anh8',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//a/u/autumn_2.jpg'
      },
      {
        slug: 'anh9',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//a/u/autumn_1.jpg'
      }
    ]
  }
  ,
  {
    url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_5-1.jpg',
    title: 'CINE',
    slug: 'cine',
    img: [
      {
        slug: 'anh10',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_5-1.jpg'
      },
      {
        slug: 'anh11',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_3-1.jpg'
      },
      {
        slug: 'anh12',
        img_url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_1-1.jpg'
      }
    ]
  }
]


const Gift = () => {
  return (
    <>
      <p className='text-[30px] my-5'>Bạn chưa có thẻ quà tặng nào </p>
      <button className='uppercase bg-red-500 p-2 text-white border rounded-xl text-[14px] font-bold mb-16'>Thêm thẻ mới</button>


      <div className="w-[70rem] flex flex-col">
        {/* Lấy các dữ liệu */}
        {
          data.map((item, index) => (
            <div key={index}>
              <hr className="border-t-2 border-gray-400 mb-3" />
              <div>
                <div className='flex justify-between'>
                  <div className='flex'>
                    <a href={`/gifts/${item.slug}`}><img src={item.url} alt="" className='w-[50px] h-[50px] object-cover border rounded-3xl'/></a>
                    <h1 className='uppercase ml-5 text-[20px] my-auto'>{item.title}</h1>
                  </div>
                  <div>
                    <Link to={`/gifts/${item.slug}`} >
                      <button className='uppercase font-bold text-red-500 border-red-500 px-4 py-2 border rounded-xl ' >
                                            Tất cả
                      </button>
                    </Link>

                  </div>
                </div>

                <div className='flex flex-row gap-4 my-4'>
                  {
                    item.img.map((item, index) => (
                      <GiftCard key={index} slug={item.slug} img_url={item.img_url} />
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default Gift