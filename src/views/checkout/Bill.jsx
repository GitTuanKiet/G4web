
const data = [
  {
    idCinema: 'Cinema1',
    logo: 'https://s3-alpha-sig.figma.com/img/3112/bfa1/a3a4337c36f6bd2bfc476abff4da69e0?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jfakF-eyeLPlbEPkD3mfULTmahHGxH4-5TSFTO8Fsxg0OOatiLpIPWeISIi4kqlD5mKz22eYvzwem0SzFyhRP5O0jRJ~bkPZJ0vkVfaq~ivM4ktjp-WDpNIbuh29IV4L6ydoJdGi3nLWqVQ4xNpIABkdDb9mcnT2~jfynH7IQl1~HjErXEZWvjU996gLbBhT1TgPuffnY5r0afYRNBFSI93qB~L6ukwsskwZ0Bq653-6LQvTbtWtNHaBJwAEXPR5ShQhx9J4RHAmEf3UaOSv25F4Ncz4RcnGdPsQwfICU1LY9SieQq-gCky-6fMVMnrttV64NfenwebqfQCjGnAjQw__',
    NameCinema: 'CGV Vincom Trần Duy Hưng'
  },
  {
    idFilm: 'Film1',
    NameFilm: 'Xứ sở các nguyên tố',
    ImgFilm: 'https://s3-alpha-sig.figma.com/img/9ac3/e245/56a81bb7940147701a3fc5172296b0a7?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lz2zlEhgTnG9LdpF-zmN6ApYpxJLFS-dvCnqjlLmhBgGy4ansd4AxRaSobFV-yts0pbroQeVeGGA8lyXiyF~XaMo61syaJNKE5LCtTHMQdrhYdyzjE4Um8mlShIpIi6JMzOO5s50dz-yrT-PPqQ34D~0CVBjzix~joAsAIvd8FetoGLvqih6CGycafZbHTHmx2SPT0kPOoIXPkna8IOmelb3BQLCIgNDxjfUGOS-2joy4uSWTBohASEBJ3ZdWvt4IF6o87MNbt0RRcduqv0tGT9Po1WLlrzbVQY6Ae5DQeRCqqIPWSKoPyButr6uzpeP1Gbujh6yx3yULf3bP4hcEg__',
    CategoryFilm: 'Gia đình , Hoạt hình',
    TimeFilm: '109',
    ShowDate: '15/02/2024',
    ScreeningRate: '19:00',
    Room: 'P1'
  }
]
const Bill = () => {
  const NameFilm = data[1]?.NameFilm
  const NameCinema = data[0]?.NameCinema
  const LogoCinema = data[0]?.logo
  const ImgFilm = data[1]?.ImgFilm
  const CategoryFilm = data[1]?.CategoryFilm
  const Time = data[1]?.TimeFilm
  const ShowDate = data[1]?.ShowDate
  const ScreeningRate = data[1]?.ScreeningRate
  const Room = data[1]?.Room

  return (
    <section className="max-w-4xl min-w-80 mx-auto py-8">
      <div className="border ml-10 w-[244px] rounded-xl bg-[#FAEBE9] ">
        <div className="p-4 text-[15px]">
          <div className="flex gap-2">
            <img src={LogoCinema} alt="Cinema-logo" className="w-[45px]" />
            <p className="text-[16px]">{NameCinema}</p>
          </div>
          <hr className="border-t border-dashed border-black my-4" />
          <div className="flex gap-2">
            <img src={ImgFilm} alt="Img-film" className="w-[111px] rounded-xl" />
            <p className="uppercase ">{NameFilm}</p>
          </div>
          <div className="mt-4 text-gray-500">
            <p className="mt-1">Thể loại :     {CategoryFilm}</p>
            <p className="mt-1">Thời lượng :    {Time} phút</p>
            <p className="mt-1">Ngày chiếu :    {ShowDate}</p>
            <p className="mt-1">Suất chiếu :    {ScreeningRate}</p>
            <p className="mt-1">Phòng chiếu :   {Room}</p>
            <p className="mt-1">Số lượng vé :   vé</p>
            <p className="mt-1">Số ghế :    </p>
            {

            }

          </div>
          <hr className="border-t border-dashed border-black my-4" />
          <div className="mt-2 flex text-[14px]">
            <p className="text-gray-500">Tổng tiền thanh toán</p>
            <div className="flex-c">
              <p className="text-blue-500 text-[14px]"> VNĐ</p>
              <p className="text-gray-500 text-[12px]">Đã bao gồm VAT</p>
            </div>

          </div>
          <button className="py-2 px-16 rounded-xl bg-red-500 text-white block mx-auto mt-4 ">Tiếp tục</button>
        </div>

      </div>
    </section>
  )
}
export default Bill