import { useParams } from 'react-router-dom'

const data = [
  {
    id: 1,
    poster: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg',
    name: 'Harry porter',
    slug: 'harry-porter',
    director: 'John Doe',
    releaseDate: '25/01/2024',
    genre: 'Hành động, nhập vai, tình cảm',
    duration: '120p',
    language: 'tiếng anh',
    description:
        'No Way Up xoay quanh các nhân vật có xuất thân rất khác nhau gặp nhau khi chiếc máy bay họ đang di chuyển đâm xuống Thái Bình Dương. Chiếc máy bay gặp sự cố phải dừng lại một cách nguy hiểm gần rìa của một khe núi không đáy. Khi nguồn cung cấp không khí của họ nhanh chóng cạn kiệt, một cuộc chiến sinh tồn khi họ phải đối mặt với các hung thần đại dương - Cá Mập.',
    trailer: 'https://www.youtube.com/embed/5g4lY8Y3eoo'
  }
]


const GiftDetail = () => {
  const { slug } = useParams()
  const gift = data.find((item) => item.slug === slug)

  return (
    <>
      {/** Gift Detail */}
    </>
  )
}

export default GiftDetail