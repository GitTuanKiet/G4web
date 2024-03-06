import memberCardImg from 'assets/images/member-card/ttv.png'
import progressBar from 'assets/images/member-card/Progressbar.png'
import noobMember from 'assets/images/member-card/Member-milestone.png'
import vipMember from 'assets/images/member-card/VIP-milestone.png'
import superVipMember from 'assets/images/member-card/VVIP-milestone.png'
import popcornMember from 'assets/images/member-card/popcorn-member.png'

function MemberCard() {
  const expense = 2000000 // chi tiêu

  // mathematic
  const maxLevel = 4000000
  let memberProgress = (expense / maxLevel) * 100
  if (memberProgress > 100) memberProgress = 100

  return (
    <div>
      <div className="flex justify-between w-full">
        <img src={memberCardImg} alt="member card image" className="block w-[300px]" />
        <div>
          <div className="w-full left-0 ">
            <div className="flex justify-between    ">
              <img src={noobMember} alt="" className="" />
              <img src={vipMember} alt="" className="" />
              <img src={superVipMember} alt="" className="" />
            </div>
            <div className="relative">
              <img src={progressBar} alt="progress bar" className=" " />
              <span
                className={'progress'}
                style={{
                  position: 'absolute',
                  left: memberProgress + '%'
                }}
              ></span>
            </div>
          </div>
          <div className="flex justify-between">
            <p>0</p>
            <p className="ml-2 block">2,000,000 đ</p>
            <p className="ml-2 block">4,000,000 đ</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full mt-6">
        <div className="w-2/4">
          <div>
            <label htmlFor="" className="block mb-2">
              Số thẻ
            </label>
            <input
              className="py-2 px-4 bg-white border rounded-lg  mb-4 w-full "
              type="text"
              value="9992-4824-0209-6425"
            />
          </div>
          <div>
            <label htmlFor="" className="block mb-2">
              Ngày đăng ký
            </label>
            <input className="py-2 px-4 bg-white border rounded-lg   mb-4 w-full" type="date" value="03-09-2003" />
          </div>
          <div>
            <label htmlFor="" className="block mb-2">
              Cấp độ thẻ
            </label>
            <input className="py-2 px-4 bg-white border rounded-lg  mb-4 w-full " type="text" value="Thành viên" />
          </div>
          <div>
            <label htmlFor="" className="block mb-2">
              Tổng chi tiêu
            </label>
            <input className="py-2 px-4 bg-white border rounded-lg  mb-4 w-full" type="text" value="800,000" />
          </div>
        </div>
        <img src={popcornMember} alt="popcorn image" className="w-[300px] h-auto" />
      </div>
    </div>
  )
}
export default MemberCard
