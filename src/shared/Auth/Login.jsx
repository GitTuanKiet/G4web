import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
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
import { login } from 'stores/auth/slice'


const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const schema = Yup.object({
  email: Yup.string().matches(emailRegex, 'Email không hợp lệ').required('Email không được để trống'),
  password: Yup.string().required('Mật khẩu là bắt buộc!')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .matches(/^\S*$/, 'Mật khẩu không thể có khoảng trắng')
})


function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading } = useSelector((state) => state.auth)
  const [remember, setRemember] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: localStorage.getItem('email') || '',
      password: ''
    }
  })

  const onSubmit = (data) => {
    dispatch(login({ data, navigate }))

    if (remember) {
      localStorage.setItem('email', data.email)
    } else {
      localStorage.removeItem('email')
    }
  }

  return (
    <>
      <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center mt-10">
        <Link to="/" className="flex items-center justify-center mobile:h-[60px]">
          <Logo />
        </Link>
        <h1 className="text-xl font-semibold mt-5">Đăng nhập</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[500px] bg-white p-5 rounded-lg shadow-md mt-10"
        >
          <Input label="Email" placeholder="Nhập email của bạn" name="email"
            control={control} errors={errors} />
          <Input
            label="Mật khẩu"
            placeholder="Nhập mật khẩu của bạn"
            name="password"
            type="password"
            control={control}
            errors={errors}
          />

          <div className="mt-4 flex items-center justify-between mb-4">
            <div className="flex items-center justify-start">
              <input type="checkbox" onChange={() => setRemember(!remember)} />
              <div className="text-sm ml-2 text-gray-600">Nhớ tài khoản</div>
            </div>
            <div className="my-3 float-right text-sm ">
              <Link to="/auth/forgot-password" className="text-primary ">
                Quên mật khẩu?
              </Link>
            </div>
          </div>
          <Button primary wFull loading={loading}>
            Đăng nhập
          </Button>
          <div className="my-3 float-right text-sm ">
            <span> Bạn chưa có tài khoản? </span>
            <Link to="/auth/register" className="text-primary ">
              Đăng ký ngay
            </Link>
          </div>
          <div className="w-full flex items-center justify-between mt-8">
            <div className="border-t border-gray-200 w-full h-1"></div>
            <div className="flex-none mx-4 text-gray-500 text-sm font-light">Hoặc</div>
            <div className="border-t border-gray-200 w-full h-1"></div>
          </div>
          <div className="mt-4 flex justify-between items-center gap-y-3 mobile:flex-col">
            <a className="flex gap-x-2 items-center p-3 h-[38px] w-[180px] shadow rounded-lg cursor-pointer hover:shadow-md ">
              <div>
                <img src={ggLogo} alt="" className="w-4" />
              </div>
              <span className="text-xs">Đăng nhập với Google</span>
            </a>
            <a className="flex gap-x-2 items-center p-3 h-[38px] w-[180px] shadow rounded-lg cursor-pointer hover:shadow-md ">
              <div>
                <img src={fbLogo} alt="" className="w-4" />
              </div>
              <span className="text-xs">Đăng nhập với Facebook</span>
            </a>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
