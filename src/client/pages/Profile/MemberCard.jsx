import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormSubmit } from 'utils/form'
import Input from 'components/Input'
import * as Yup from 'yup'
import Button from 'components/Button'
import { format } from 'date-fns'

import { registerMemberCard, lostMemberCard } from 'stores/user/slice'

import memberCardImg from 'assets/images/member-card/ttv.png'
import progressBar from 'assets/images/member-card/Progressbar.png'
import noobMember from 'assets/images/member-card/Member-milestone.png'
import vipMember from 'assets/images/member-card/VIP-milestone.png'
import superVipMember from 'assets/images/member-card/VVIP-milestone.png'
import popcornMember from 'assets/images/member-card/popcorn-member.png'

function MemberCard() {
  const { memberCard, loading, history } = useSelector((state) => state.user)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const schemaProfile = Yup.object({
    number: Yup.string().required('Number is required').min(16).max(16, 'Number must be 16 characters'),
    pin: Yup.string().required('PIN is required').min(6, 'PIN must be at least 6 characters')
  })

  const call = (data) => {
    dispatch(registerMemberCard(data))
  }

  const { handleOnSubmit, control, errors } = useFormSubmit(schemaProfile, {
    number: '',
    pin: ''
  }, call)

  const isCompleted = (item) => item?.status === 'COMPLETED'

  const total = history?.ticket.reduce((acc, cur) => { return isCompleted(cur) ? acc + cur.price : acc }, 0) + history?.voucher.reduce((acc, cur) => { return isCompleted(cur) ? acc + cur.price : acc }, 0) + history?.gift.reduce((acc, cur) => { return isCompleted(cur) ? acc + cur.price : acc }, 0) || 0
  const fixedTotal = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  // mathematic
  const maxLevel = 10000
  let memberProgress = (total / maxLevel) * 100
  if (memberProgress > 100) memberProgress = 100

  return (
    memberCard ?
      <div>
        <div className="flex justify-between w-full">
          <img src={memberCardImg} alt="member card image" className="block w-[400px]" />
          <div>
            <div className="w-full left-0">
              <div className="flex justify-between">
                {/* <img src={noobMember} alt="" className="" />
                <img src={vipMember} alt="" className="" />
                <img src={superVipMember} alt="" className="" /> */}
                <p className="text-[15px]">iron</p>
                <p className="text-[15px]">bronze</p>
                <p className="text-[15px]">silver</p>
                <p className="text-[15px]">gold</p>
                <p className="text-[15px]">platinum</p>
              </div>
              <div className="relative">
                <div className="h-5 rounded-lg w-[400px]" style={{ backgroundImage: `url(${progressBar})` }}>
                  <div className='h-full bg-red-500 rounded-lg w-full' style={{ width: memberProgress + '%' }}>
                    <span
                      className='progress'
                      style={{
                        position: 'absolute',
                        left: memberProgress + '%',
                        top: '16px'
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <p>0</p>
              <p className="ml-2 block">$1,000</p>
              <p className="ml-2 block">$2,000</p>
              <p className="ml-2 block">$4,000</p>
              <p className="ml-2 block">$10,000</p>
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
                readOnly value={memberCard?.number || 'Chưa có'}
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2">
              Ngày đăng ký
              </label>
              <input className="py-2 px-4 bg-white border rounded-lg   mb-4 w-full" type="date" readOnly value={format(new Date(memberCard?.registeredDate), 'yyyy-MM-dd') || ''} />
            </div>
            <div>
              <label htmlFor="" className="block mb-2">
              Cấp độ thẻ
              </label>
              <input className="py-2 px-4 bg-white border rounded-lg  mb-4 w-full " type="text" readOnly value={memberCard?.level || 'Chưa có'} />
            </div>
            <div>
              <label htmlFor="" className="block mb-2">
              Tổng chi tiêu
              </label>
              <input className="py-2 px-4 bg-white border rounded-lg  mb-4 w-full" type="text" readOnly value={fixedTotal} />
            </div>
          </div>
          <img src={popcornMember} alt="popcorn image" className="w-[300px] h-auto" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <Button onClick={() => navigate(-1)}>
          &lt;&lt; Quay lại
          </Button>
          <Button onClick={() => dispatch(lostMemberCard())} primary loading={loading}>
              Xoá thẻ
          </Button>
        </div>
      </div> :
      <div>
        {/* Đăng ký thẻ thành viên */}
        <h1 className="uppercase bg-[#222222] text-white py-3 text-center">Đăng ký thẻ thành viên</h1>

        <form onSubmit={handleOnSubmit} className="w-full bg-white p-10 rounded-lg shadow-md mt-10">
          <div className="flex justify-between w-full gap-10">
            <Input label="Số thẻ" placeholder="Số thẻ" name="number" control={control} errors={errors} />
          </div>

          <div className="flex justify-between w-full gap-10">
            <Input label="Mã PIN" placeholder="Mã PIN" name="pin" control={control} errors={errors} />
          </div>

          <div className="flex justify-center items-center gap-4">
            <Button onClick={() => navigate(-1)}>
          &lt;&lt; Quay lại
            </Button>
            <Button onClick={handleOnSubmit} primary loading={loading}>
              Xác nhận
            </Button>
          </div>
        </form>


      </div>
  )
}
export default MemberCard
