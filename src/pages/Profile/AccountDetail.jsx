import { Input } from 'components/Form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const schema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  name: Yup.string().required('Name is required'),
  city: Yup.string().required('City is required'),
  phone: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Address is required')
})

function AccountDetail() {
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const [isDesireChangePassword, setIsDesireChangePassword] = useState(false)
  const {
    handleSubmit,
    control,
    formState: { errors },
    submit
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user.name,
      city: user.city || '',
      password: '',
      phone: user.phone || '',
      address: user.address || ''
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

      <form
        id="form-info"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full  bg-white p-10 rounded-lg shadow-md mt-10"
      >
        <div className="flex justify-between w-full gap-10">
          <Input label="Name" placeholder="Enter your name" name="name" control={control} errors={errors} />
          <Input label="City" placeholder="Enter your City" name="city" control={control} errors={errors} />
        </div>
        <div className="flex justify-between w-full gap-10">
          <Input
            label="Phone number"
            placeholder="Enter your phone number"
            name="phone"
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
            name="password"
            control={control}
            errors={errors}
          />
        </div>

        <p>
          <span className="font-bold">Ngày Sinh:</span> <br /> {user.birthday || 'Chưa có ngày sinh'}
        </p>
        <p className="mb-2">
          <span className="font-bold">Địa chỉ email:</span> <br /> {user.email}
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
            <span> {user._id}</span>
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
        <Button type="submit" form="form-info" primary>
          Lưu lại
        </Button>
      </div>
    </div>
  )
}
export default AccountDetail
