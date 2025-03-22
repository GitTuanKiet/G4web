const ListCinema = ({ listCinema }) => {
  return (
    <div className="w-full h-auto px-20 grid grid-cols-3 gap-2 mobile:grid-cols-none mobile:px-0">
      {listCinema.map((item, index) => (
        <div className="w-full h-auto flex items-center justify-start gap-2" key={item._id}>
          <span className="bg-slate-500 px-3 py-1 rounded-full">{index + 1}</span>
          <h4 className="text-xl cursor-pointer hover:text-red-500">{item.name}</h4>
        </div>
      ))}
    </div>
  )
}

export default ListCinema
