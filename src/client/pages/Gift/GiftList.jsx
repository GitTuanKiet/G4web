import { useParams } from 'react-router-dom'
import GiftCard from './GiftCard'

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

const GiftList = () => {
  const { slug } = useParams()
  const list = data.find(item => item.slug === slug)

  return (
    <div className="py-10 gap-5">
      <h2 className="text-3xl font-semibold uppercase">{list.title}</h2>
      <div className="flex flex-row gap-4 my-4 mobile:flex-col">
        {data.map((item, index) => (
          <GiftCard key={index} img_url={item.img_url} slug={item.slug} />
        ))}
      </div>
    </div>
  )
}

export default GiftList