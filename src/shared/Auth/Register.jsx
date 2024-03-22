import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// project imports
import Button from 'components/Button'
import Input from 'components/Input'
import Logo from 'components/icons/Logo'

import ggLogo from 'assets/images/ggLogo.png'
import fbLogo from 'assets/images/fbLogo.png'

// third-party
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { register } from 'stores/auth/slice'

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

const schema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Tên phải có ít nhất 3 ký tự')
    .max(50, 'Tên không quá dài 50 ký tự')
    .matches(/^[^\W\d_][^\W_]*$/, 'Tên không được chứa kí tự đặc biệt và không bắt đầu bằng kí tự số'),
  birthday: Yup.string().required('Ngày sinh không được để trống '),
  email: Yup.string()
    .email('Email không hợp lệ')
    .matches(emailRegex, 'Email không hợp lệ')
    .required('Email không được để trống'),
  password: Yup.string()
    .required('Mật khẩu không được để trống')
    .min(8, 'Mật khẩu phải tối thiếu 8 kí tự')
    .matches(/^\S*$/, 'Mật khẩu không thể có khoảng trắng')
    .matches(
      /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-zA-Z])/,
      'Mật khẩu phải chứa ít nhất một kí tự đặc biệt, một số và một chữ cái'
    )
})

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading } = useSelector((state) => state.auth)
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      birthday: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = async (data) => {
    data.email = data?.email?.toLowerCase()
    dispatch(register({ data, navigate }))
  }

  return (
    <>
      <div className="w-full mt-10 bg-gray-50 flex flex-col items-center justify-center">
        <Link to="/" className="flex items-center justify-center mobile:h-[60px]">
          <Logo />
        </Link>
        <h1 className="text-xl font-semibold mt-5">Sign up to your account</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[500px] bg-white p-5 rounded-lg shadow-md mt-10"
        >
          <Input label="Tên" placeholder="Enter your name" name="name" control={control} errors={errors} />
          <Input
            label="Ngày sinh"
            type="date"
            placeholder="Enter your birthday"
            name="birthday"
            control={control}
            errors={errors}
          />
          <Input label="Email" placeholder="Enter your email" name="email" control={control} errors={errors} />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
            control={control}
            errors={errors}
          />

          <div className="my-3 float-right">
            <p href="#" className=" text-sm">
              Already have an account?{' '}
              <Link to="/auth/login" className="text-primary">
                Sign in
              </Link>
            </p>
          </div>
          <Button primary wFull loading={loading}>
            Sign up
          </Button>
          <div className="w-full flex items-center justify-between mt-8">
            <div className="border-t border-gray-200 w-full h-1"></div>
            <div className="flex-none mx-4 text-gray-500 text-sm font-light">Or continue with</div>
            <div className="border-t border-gray-200 w-full h-1"></div>
          </div>
          <div className="mt-4 flex justify-between items-center gap-y-3 mobile:flex-col">
            <a className="flex gap-x-2 items-center p-3 h-[38px] w-[180px] shadow rounded-lg cursor-pointer hover:shadow-md ">
              <div>
                <img src={ggLogo} alt="" className="w-4" />
              </div>
              <span className="text-xs">Continue with Google</span>
            </a>
            <a className="flex gap-x-2 items-center p-3 h-[38px] w-[180px] shadow rounded-lg cursor-pointer hover:shadow-md ">
              <div>
                <img src={fbLogo} alt="" className="w-4" />
              </div>
              <span className="text-xs">Continue with Facebook</span>
            </a>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
