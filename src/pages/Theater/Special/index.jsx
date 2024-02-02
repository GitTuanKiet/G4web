// views components
import TheaterSpecial from 'views/theater/Special'

const data = [
  {
    id: 1,
    name: '3D',
    slug: '3d',
    cinemas: []
  },
  {
    id: 2,
    name: 'Gold Class',
    slug: 'gold-class',
    cinemas: [
      {
        id: 1,
        name: 'CGV Hùng Vương Plaza',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-hung-vuong-plaza/'
      },
      {
        id: 2,
        name: 'CGV Liberty Citypoint',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-liberty-citypoint/'
      },
      {
        id: 3,
        name: 'CGV Vincom Đồng Khởi',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-dong-khoi/'
      },
      {
        id: 4,
        name: 'CGV Indochina Plaza Hà Nội',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-iph-ha-noi/'
      },
      {
        id: 5,
        name: 'CGV Vincom Nguyễn Chí Thanh',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-nguyen-chi-thanh/'
      },
      {
        id: 6,
        name: 'CGV Vincom Xuân Khánh',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-xuan-khanh/'
      },
      {
        id: 7,
        name: 'CGV Vincom Long Biên',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-long-bien/'
      },
      {
        id: 8,
        name: 'CGV Vincom Royal City',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-royal-city/'
      },
      {
        id: 9,
        name: 'CGV Vincom Center Landmark 81',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-landmark-81/'
      },
      {
        id: 10,
        name: 'CGV Tràng Tiền Plaza',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-trang-tien-plaza/'
      },
      {
        id: 11,
        name: 'CGV Vincom Hải Phòng',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-hai-phong/'
      },
      {
        id: 12,
        name: 'CGV Aeon Hà Đông',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-aeon-ha-dong/'
      }
    ]
  }
]

const Special = () => {
  return (
    <>
      <div className="w-full h-auto page-container">
        <TheaterSpecial data={data} />
      </div>
    </>
  )
}

export default Special