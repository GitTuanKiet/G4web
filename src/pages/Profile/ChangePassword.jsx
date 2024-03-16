import Input from 'components/Input'
import * as Yup from 'yup'
import Button from 'components/Button'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { changePassword } from 'stores/user/slice'
import { useFormSubmit } from 'utils/form'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

function ChangePassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.user)

  const schemaProfile = Yup.object({
    oldPassword: Yup.string().required('Old password is required'),
    newPassword: Yup.string().required('New password is required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
  })

  const call = (data) => {
    if (data.oldPassword === data.newPassword) {
      toast.info('Mật khẩu mới không được trùng với mật khẩu cũ')
      return
    }
    dispatch(changePassword(data))
  }

  const { handleOnSubmit, control, errors } = useFormSubmit(
    schemaProfile,
    {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    call
  )

  return (
    <div>
      <h1 className="uppercase bg-[#222222] text-white py-3 text-center">THAY ĐỔI MẬT KHẨU</h1>

      <form onSubmit={handleOnSubmit} className="w-full bg-white p-10 rounded-lg shadow-md mt-10">
        <div className="flex justify-between w-full gap-10">
          <Input
            label="Mật khẩu cũ"
            type="password"
            placeholder="Mật khẩu cũ"
            name="oldPassword"
            control={control}
            errors={errors}
          />
        </div>
        <div className="flex justify-between w-full gap-10">
          <Input
            label="Mật khẩu mới"
            type="password"
            placeholder="Mật khẩu mới"
            name="newPassword"
            control={control}
            errors={errors}
          />
        </div>
        <div className="flex justify-between w-full gap-10">
          <Input
            label="Xác nhận mật khẩu"
            type="password"
            placeholder="Xác nhận mật khẩu"
            name="confirmPassword"
            control={control}
            errors={errors}
          />
        </div>

        <Link to="/auth/forgot-password" className="text-primary hover:underline float-right">
          Quên mật khẩu?
        </Link>
        <div className="flex justify-center items-center mobile:justify-between mt-5 w-full ">
          <Button onClick={() => navigate(-1)}>&lt;&lt; Quay lại</Button>
          <Button onClick={handleOnSubmit} primary loading={loading}>
            Xác nhận
          </Button>
        </div>
      </form>
    </div>
  )
}
export default ChangePassword
