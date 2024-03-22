import Input from 'components/Input'
import * as Yup from 'yup'
import { useState } from 'react'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from 'stores/user/slice'
import { useFormSubmit } from 'utils/form'
import { format } from 'date-fns'

function AccountDetail() {
  const { info, loading } = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [gender, setGender] = useState(info?.gender)

  const schemaProfile = Yup.object({
    name: Yup.string().required('Name is required'),
    city: Yup.string().required('City is required'),
    gender: Yup.string().required('Gender is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    birthday: Yup.string().required('Birthday is required')
  })

  const call = (data) => {
    dispatch(updateProfile(data))
  }

  const { handleOnSubmit, register, control, errors } = useFormSubmit(
    schemaProfile,
    {
      name: info?.name,
      city: info?.city,
      gender: info?.gender,
      phone: info?.phone,
      address: info?.address,
      birthday: format(new Date(info?.birthday || Date.now()), 'yyyy-MM-dd')
    },
    call
  )

  return (
    <div>
      <h1 className="uppercase bg-[#222222] text-white py-3 text-center">THAY ĐỔI THÔNG TIN</h1>

      <form
        onSubmit={handleOnSubmit}
        className="w-full bg-white p-10 rounded-lg shadow-md mt-10 mobile:mt-0 mobile:p-0"
      >
        <div className="flex justify-between w-full gap-10 mobile:gap-0 mobile:flex-col">
          <Input label="Họ Tên" placeholder="Họ Tên" name="name" control={control} errors={errors} />
          <Input label="Thành Phố" placeholder="Thành Phố" name="city" control={control} errors={errors} />
        </div>
        <div className="flex justify-between w-full gap-10 mobile:gap-0 mobile:flex-col">
          <Input label="Số điện thoại" placeholder="Số điện thoại" name="phone" control={control} errors={errors} />
          <Input
            label="Ngày sinh"
            type="date"
            placeholder="Ngày sinh"
            name="birthday"
            control={control}
            errors={errors}
          />
        </div>
        <div className="flex justify-between items-center w-full mobile:flex-col gap-10 mobile:gap-0">
          <Input label="Địa chỉ" placeholder="Địa chỉ" name="address" control={control} errors={errors} />
          <div className="w-full">
            <span className="font-bold">Giới tính</span>
            <div className="py-4 w-full flex gap-1">
              <p>
                <input
                  type="radio"
                  value="male"
                  {...register('gender')}
                  className="mx-2"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />{' '}
                Nam
              </p>
              <p>
                <input
                  type="radio"
                  value="female"
                  {...register('gender')}
                  className="mx-2"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />{' '}
                Nữ
              </p>
              <p>
                <input
                  type="radio"
                  value="none"
                  {...register('gender')}
                  className="mx-2"
                  checked={gender === 'none'}
                  onChange={() => setGender('none')}
                />
                Không tiết lộ
              </p>
            </div>
          </div>
        </div>
      </form>
      <div className="mt-3">
        <h2 className="border-b-2 pb-2">Thông Tin Tùy Chọn</h2>
        <div className="mt-3 flex justify-between">
          <div className=" mobile:flex-col mb-2 flex gap-4">
            <p>
              <span className="font-bold">Email:</span> <br /> {info?.email}
            </p>
            <p>
              <span className="font-bold">Số thẻ thành viên:</span> <br /> {info?.memberCardId || 'Chưa có số thẻ'}
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 mobile:flex-col">
            <Button onClick={() => navigate(-1)}>&lt;&lt; Quay lại</Button>
            <Button onClick={handleOnSubmit} primary loading={loading}>
              Lưu lại
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AccountDetail
