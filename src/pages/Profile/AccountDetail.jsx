import Input from 'components/Input'
import * as Yup from 'yup'
import { useState } from 'react'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userUpdateProfile } from 'stores/auth/authSlice'
import { useFormSubmit } from 'utils/form'

function AccountDetail() {
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [gender, setGender] = useState(user.gender)

  const schemaProfile = Yup.object({
    name: Yup.string().required('Name is required'),
    city: Yup.string().required('City is required'),
    gender: Yup.string().required('Gender is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required')
  })

  const call = (data) => dispatch(userUpdateProfile(data))

  const { handleOnSubmit, register, control, errors, isSubmitting } = useFormSubmit(schemaProfile, {
    name: user.name,
    city: user.city,
    gender: user.gender,
    phone: user.phone,
    address: user.address
  }, call)

  return (
    <div>
      <h1 className="uppercase bg-[#222222] text-white py-3 text-center">THAY ĐỔI THÔNG TIN</h1>

      <form
        onSubmit={handleOnSubmit}
        className="w-full bg-white p-10 rounded-lg shadow-md mt-10"
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
          <div className="flex w-full">
            <input type="radio" value="male" {...register('gender')} className="mx-2" checked={gender === 'male'} onChange={() => setGender('male')} /> Male
            <input type="radio" value="female" {...register('gender')} className="mx-2" checked={gender === 'female'} onChange={() => setGender('female')} /> Female
            <input type="radio" value="none" {...register('gender')} className="mx-2" checked={gender === 'none'} onChange={() => setGender('none')} /> None
          </div>
        </div>

        <p>
          <span className="font-bold">Ngày Sinh:</span> <br /> {user.birthday || 'Chưa có ngày sinh'}
        </p>
        <p className="mb-2">
          <span className="font-bold">Địa chỉ email:</span> <br /> {user.email}
        </p>
      </form>
      <div className="mt-3">
        <h2 className="border-b-2 pb-2">Thông Tin Tùy Chọn</h2>
        <div className="mt-3 flex gap-x-10">
          <div>
            <h2>Số thẻ thành viên</h2>
            <span> {user.memberCardId || 'Chưa có số thẻ'}</span>
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
        <Button onClick={handleOnSubmit} primary disabled={isSubmitting}>
          Lưu lại
        </Button>
      </div>
    </div>
  )
}
export default AccountDetail
