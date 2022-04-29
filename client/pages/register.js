import { useRouter } from 'next/router'

function Register() {
  const router = useRouter()
  const handleClickLogin = () => router.push('/login')
  const handleSubmitRegister = (e) => {
    const currentForm = e.target.closest('form')
    currentForm.reportValidity()
    e.preventDefault()
  }

  return (
    <div className="flex flex-1 justify-center">
      <div className="w-11/12 md:w-1/2 lg:w-2/5">
        <form className="min-w-full rounded-lg bg-white p-6 shadow-lg md:p-10">
          <h1 className="mb-6 text-center font-sans text-2xl font-bold text-gray-600">
            Register
          </h1>
          <div>
            <label
              className="text-md my-3 block font-semibold text-gray-800"
              htmlFor="username"
            >
              이름
            </label>
            <input
              className="w-full rounded-lg bg-gray-100 px-4 py-2 focus:outline-none"
              type="text"
              name="username"
              id="username"
              required
              placeholder="username"
            />
          </div>
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
              placeholder="@email"
            />
          </div>
          <div>
            <label
              className="text-md my-3 block font-semibold text-gray-800"
              htmlFor="password"
            >
              비밀번호
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
          <div>
            <label
              className="text-md my-3 block font-semibold text-gray-800"
              htmlFor="confirm"
            >
              비밀번호 확인
            </label>
            <input
              className="w-full rounded-lg bg-gray-100 px-4 py-2 focus:outline-none"
              type="password"
              name="confirm"
              id="confirm"
              required
              placeholder="confirm password"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmitRegister}
            className="mt-6 mb-3 w-full rounded-lg bg-indigo-100 px-4 py-2 font-sans text-lg font-semibold tracking-wide text-gray-800"
          >
            Register
          </button>
          <p className="space-x-4 text-center">or</p>
          <button
            type="button"
            onClick={handleClickLogin}
            className="mt-3 w-full rounded-lg bg-indigo-600 px-4 py-2 font-sans text-lg font-semibold tracking-wide text-white"
          >
            로그인하러가기
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
