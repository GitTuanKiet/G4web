
// mẫu login copy trên mạng
const Login = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold mt-5">Sign in to your account</h1>
        <div className="flex items-center justify-center text-sm mt-3">
          <div className="mr-2">Or</div>
          <div className="text-indigo-500">start your 14-day free trial</div>
        </div>
        <div className="w-1/3 bg-white p-10 rounded-lg shadow-md mt-10">
          <div>
            <div className="text-sm text-gray-700">Email Address</div>
            <input type="text" className="border border-gray-200 rounded-md py-1 px-3 w-full mt-1"/>

          </div>
          <div className="mt-4">
            <div className="text-sm text-gray-700">Password</div>
            <input type="password" className="border border-gray-200 rounded-md py-1 px-3 w-full mt-1"/>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center justify-start">
              <input type="checkbox"/>
              <div className="text-sm ml-2 text-gray-600">Remember me</div>
            </div>
            <a href="#" className="text-indigo-500 text-sm">Forget your password?</a>
          </div>
          <button className="w-full h-10 bg-indigo-600 rounded-md text-white mt-6 hover:bg-indigo-500 transition">Sign in</button>
          <div className="w-full flex items-center justify-between mt-8">
            <div className="border-t border-gray-200 w-full h-1"></div>
            <div className="flex-none mx-4 text-gray-500 text-sm font-light">Or continue with</div>
            <div className="border-t border-gray-200 w-full h-1"></div>
          </div>
          <div className="grid grid-cols-3 gap-3 w-full mt-5">
            <button className="bg-white rounded-md border border-gray-200 w-full p-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </button>
            <button className="bg-white rounded-md border border-gray-200 w-full p-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </button>
            <button className="bg-white rounded-md border border-gray-200 w-full p-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login