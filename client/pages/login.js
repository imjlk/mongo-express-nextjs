import { useRouter } from 'next/router'

function Login() {
  const router = useRouter()
  const handleClickRegister = () => router.push('/register')
  const handleSubmitLogin = (e) => {
    const currentForm = e.target.closest('form')
    currentForm.reportValidity()
    e.preventDefault()
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-11/12 md:w-1/2 lg:w-2/5">
        <form className="min-w-full rounded-lg bg-white p-6 shadow-lg md:p-10">
          <h1 className="mb-6 text-center font-sans text-2xl font-bold text-gray-600">
            Login
          </h1>
          <div>
            <label
              className="text-md my-3 block font-semibold text-gray-800"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full rounded-lg bg-gray-100 px-4 py-2 focus:outline-none"
              type="email"
              name="email"
              id="email"
              required
              placeholder="your@email.tld"
            />
          </div>
          <div>
            <label
              className="text-md my-3 block font-semibold text-gray-800"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full rounded-lg bg-gray-100 px-4 py-2 focus:outline-none"
              type="password"
              name="password"
              id="password"
              required
              placeholder="password"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmitLogin}
            className="mt-6 mb-3 w-full rounded-lg bg-indigo-100 px-4 py-2 font-sans text-lg font-semibold tracking-wide text-gray-800"
          >
            Login
          </button>
          <p className="space-x-4 text-center">or</p>
          <button
            type="button"
            onClick={handleClickRegister}
            className="mt-3 w-full rounded-lg bg-indigo-600 px-4 py-2 font-sans text-lg font-semibold tracking-wide text-white"
          >
            회원가입하기
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
