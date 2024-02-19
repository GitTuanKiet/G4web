import { Input } from 'components/Form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

const schema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
})

function AccountDetail() {
  const navigate = useNavigate()

  const [isDesireChangePassword, setIsDesireChangePassword] = useState(false)
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  // console.log(errors)
  const onSubmit = (data) => {
    // waiting for backend
    console.log(data)
  }

  return (
    <div>
      <h1 className="uppercase bg-[#222222] text-white py-3 text-center">THAY ĐỔI THÔNG TIN</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full  bg-white p-10 rounded-lg shadow-md mt-10">
        <div className="flex justify-between w-full gap-10">
          <Input label="Name" placeholder="Enter your name" name="name" control={control} errors={errors} />
          <Input label="City" placeholder="Enter your City" name="City" control={control} errors={errors} />
        </div>
        <div className="flex justify-between w-full gap-10">
          <Input
            label="Phone number"
            placeholder="Enter your phone number"
            name="phoneNumber"
            control={control}
            errors={errors}
          />
          <Input label="address" placeholder="Enter your address" name="address" control={control} errors={errors} />
        </div>
        <div className="flex justify-between w-full gap-10">
          <div className="flex w-full gap-3">
            <div>
              <input type="radio" name="gender" className="mx-2" />
              Male
            </div>
            <div>
              <input type="radio" name="gender" className="mx-2" />
              Female
            </div>
            <div>
              <input type="radio" name="gender" className="mx-2" />
              None
            </div>
          </div>
          <Input
            label="Old password"
            placeholder="Enter your old password"
            name="old password"
            control={control}
            errors={errors}
          />
        </div>

        <p>
          <span className="font-bold">Ngày Sinh:</span> <br /> FEB 08 2003
        </p>
        <p className="mb-2">
          <span className="font-bold">Địa chỉ email:</span> <br /> johndoe@example.com
        </p>
        <label className="select-none ">
          <input type="checkbox" onClick={() => setIsDesireChangePassword(!isDesireChangePassword)} /> Tôi muốn thay đổi
          mật khẩu
        </label>
        {isDesireChangePassword && (
          <div className="flex justify-between w-full gap-10">
            <Input
              label="Mật khẩu mới"
              placeholder="Mật khẩu mới"
              name="newPassword"
              control={control}
              errors={errors}
            />
            <Input label="Nhập lại mật khẩu mới" placeholder="... " name="" control={control} errors={errors} />
          </div>
        )}
      </form>
      <div className="mt-3">
        <h2 className="border-b-2 pb-2">Thông Tin Tùy Chọn</h2>
        <div className="mt-3 flex gap-x-10">
          <div>
            <h2>Số thẻ thành viên</h2>
            <span> 9992-4334-9306-2508</span>
          </div>
          <div>
            <h2>Rạp yêu thích</h2>
            <select className="outline">
              <option value="">CGV Aeon Hai PHong</option>
              <option value="">CGV Pham Ngoc Thach</option>
              <option value="">Lotte Nam Dinh</option>
            </select>
          </div>
        </div>
      </div>
      <div className="float-right">
        <button className="text-rose-500 mr-5" onClick={() => navigate(-1)}>
          &lt;&lt; Quay lại
        </button>
        <Button primary>Lưu lại</Button>
      </div>
    </div>
  )
}
export default AccountDetail
