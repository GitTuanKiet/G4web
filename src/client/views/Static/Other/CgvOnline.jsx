import MixCard from 'assets/images/mix-card.png'
const CgvOnline = () => {
  return (
    <div className="h-auto">
      <div className="w-full bg-rose-600">
        <img
          src="https://www.cgv.vn/skin/frontend/cgv/default/images/vn-microsite-app.png"
          alt=""
          className="mx-auto"
        />
      </div>
      <div className="bg-yellow-400">
        <img
          src="https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/banner/vn-microsite-photo.png"
          alt=""
          className="mx-auto"
        />
      </div>
      <div className="bg-green-500">
        <img
          src="https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/banner/vn-microsite-kiosk.png"
          alt=""
          className="mx-auto"
        />
      </div>
      <div className="bg-blue-300">
        <img src={MixCard} alt="" className="mx-auto" />
      </div>
    </div>
  )
}

export default CgvOnline
