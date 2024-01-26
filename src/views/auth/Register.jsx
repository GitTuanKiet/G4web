import Button from 'components/Button'
import { Input } from 'components/Form'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'

const schema = Yup.object({
  name: Yup.string().required('Name is required').min(3, 'Name must be at least 8 characters '),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
})

function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
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
      <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </div>
        <h1 className="text-xl font-semibold mt-5">Sign up to your account</h1>
        <div className="flex items-center justify-center text-sm mt-3">
          <div className="mr-2">Or</div>
          <div className="text-primary">start your 14-day free trial</div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[500px] bg-white p-10 rounded-lg shadow-md mt-10"
        >
          <Input label="Name" placeholder="Enter your name" name="name" control={control} errors={errors} />
          <Input label="Email" placeholder="Enter your email" name="email" control={control} errors={errors} />
          <Input label="Password" placeholder="Enter your password" name="password" control={control} errors={errors} />

          <div className="my-3 float-right">
            <p href="#" className=" text-sm">
              Already have an account? <Link to="/" className='text-primary'>Sign in</Link>
            </p>
          </div>
          <Button primary wFull>
            Sign up
          </Button>
          <div className="w-full flex items-center justify-between mt-8">
            <div className="border-t border-gray-200 w-full h-1"></div>
            <div className="flex-none mx-4 text-gray-500 text-sm font-light">Or continue with</div>
            <div className="border-t border-gray-200 w-full h-1"></div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <a className="flex gap-x-2 items-center p-3 shadow rounded-lg cursor-pointer hover:shadow-md ">
              <div>
                <img src="/src/assets/images/ggLogo.png" alt="" className="w-4" />
              </div>{' '}
              <span className="text-xs">Continue with Google</span>
            </a>
            <a className="flex gap-x-2 items-center p-3 shadow rounded-lg cursor-pointer hover:shadow-md ">
              <div>
                <img src="/src/assets/images/fbLogo.png" alt="" className="w-4" />
              </div>{' '}
              <span className="text-xs">Continue with Facebook</span>
            </a>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
