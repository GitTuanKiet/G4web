

const StaticWidget = [
  {
    id: 1,
    title: 'cgv theater',
    link: 'https://www.cgv.vn/default/cinox/site/'
  },
  {
    id: 2,
    title: 'now showing',
    link: 'https://www.cgv.vn/default/movies/now-showing.html/'
  },
  {
    id: 3,
    title: 'cgv special',
    link: 'https://www.cgv.vn/default/theaters/special/gold-class'
  },
  {
    id: 4,
    title: 'Mua voucher, thẻ quả tặng CGV',
    link: 'https://www.cgv.vn/default/cinemas/sale/'
  },
  {
    id: 5,
    title: 'my ticket info',
    link: 'https://www.cgv.vn/default/contacts/'
  },
  {
    id: 6,
    title: 'discount info',
    link: 'https://www.cgv.vn/default/newsoffer/'
  },
  {
    id: 7,
    title: 'create account quick',
    link: 'https://www.cgv.vn/default/customer/account/create/'
  }
]

const Widget = () => {
  return (
    <>
      <div className="flex flex-row ">
        {StaticWidget.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="hover:text-yellow-500 w-[100px] h-[100px] border"
            style={{backgroundImage : 'url() link ảnh'}}
          >
            {item.title}
          </a>
        ))}
      </div>
    </>
  )
}

export default Widget