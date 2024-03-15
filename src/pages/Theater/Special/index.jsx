// views components
import TheaterSpecial from 'views/theater/Special'

const data = [
  {
    _id: 1,
    name: '3D',
    slug: '3d',
    cinemas: []
  },
  {
    _id: 2,
    name: 'Gold Class',
    slug: 'gold-class',
    cinemas: [
      {
        _id: 1,
        name: 'CGV Hùng Vương Plaza',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-hung-vuong-plaza/'
      },
      {
        _id: 2,
        name: 'CGV Liberty Citypoint',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-liberty-citypoint/'
      },
      {
        _id: 3,
        name: 'CGV Vincom Đồng Khởi',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-dong-khoi/'
      },
      {
        _id: 4,
        name: 'CGV Indochina Plaza Hà Nội',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-iph-ha-noi/'
      },
      {
        _id: 5,
        name: 'CGV Vincom Nguyễn Chí Thanh',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-nguyen-chi-thanh/'
      },
      {
        _id: 6,
        name: 'CGV Vincom Xuân Khánh',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-xuan-khanh/'
      },
      {
        _id: 7,
        name: 'CGV Vincom Long Biên',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-long-bien/'
      },
      {
        _id: 8,
        name: 'CGV Vincom Royal City',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-royal-city/'
      },
      {
        _id: 9,
        name: 'CGV Vincom Center Landmark 81',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-landmark-81/'
      },
      {
        _id: 10,
        name: 'CGV Tràng Tiền Plaza',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-trang-tien-plaza/'
      },
      {
        _id: 11,
        name: 'CGV Vincom Hải Phòng',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-vincom-hai-phong/'
      },
      {
        _id: 12,
        name: 'CGV Aeon Hà Đông',
        link: 'https://www.cgv.vn/default/cinox/site/cgv-aeon-ha-dong/'
      }
    ]
  }
]

const Special = () => {
  return (
    <>
      <div className="w-full h-auto ">
        <TheaterSpecial data={data} />
      </div>
    </>
  )
}

export default Special
