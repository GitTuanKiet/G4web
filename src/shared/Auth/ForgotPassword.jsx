import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// project imports
import Button from 'components/Button'
import Input from 'components/Input'
import Logo from 'components/icons/Logo'

import ForgotPasswordImg from 'assets/images/forgotPassword.jpg'

// third-party
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { forgotPassword } from 'stores/auth/slice'
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const schema = Yup.object({
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Email không được để trống')
    .matches(emailRegex, 'Email không hợp lệ')
})

function ForgotPassword() {
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
      email: ''
    }
  })

  const onSubmit = (email) => {
    dispatch(forgotPassword({ email, navigate }))
  }

  return (
    <>
      <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mobile:h-[60px]">
          <Logo />
        </div>
        <div className="w-full flex justify-center items-center gap-5 mx-auto max-w-[800px] mobile:flex-col px-4 ">
          <div>
            <img src={ForgotPasswordImg} alt="Forgot password" className="mobile:w-60" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
            <h2 className="text-4xl mb-4 font-bold">Forgot password?</h2>
            <p className="text-gray-400 italic">Enter the email address associated with your account.</p>
            <Input placeholder="Enter your email" name="email" control={control} errors={errors} />

            <Button primary wFull loading={loading}>
              Confirm
            </Button>
            <div className="my-3 float-right text-sm ">
              <Link to="/" className="text-primary !underline">
                Back to home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
