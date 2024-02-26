import { Link } from 'react-router-dom'

// project imports
import Button from 'components/Button'
import Input from 'components/Input'
import Logo from 'components/icons/Logo'

// third-party
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const schema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required')
})

function ForgotPassword() {
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
    <>
      <div className="w-full flex justify-center items-center gap-5 min-h-[100vh] mx-auto max-w-[800px] ">
        <div>
          <img src="/src/assets/images/forgotPassword.jpg" className='' alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <h2 className='text-4xl mb-4 font-bold'>Forgot password?</h2>
          <p>Enter the email address associated with your account.</p>
          <Input placeholder="Enter your email" name="email" control={control} errors={errors} />

          <Button primary wFull>
          Confirm
          </Button>
          <div className="my-3 float-right text-sm ">
            <Link to="/" className="text-primary !underline">
            Back to home
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default ForgotPassword
