import GiftCard from './GiftCard'

const List = ({ data }) => {
  return (
    <div className="flex flex-row gap-4 my-4">
      {data.map((item, index) => (
        <GiftCard key={index} img_url={item.img_url} slug={item.slug} />
      ))}
    </div>
  )
}

export default List