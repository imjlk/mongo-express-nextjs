import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../redux/reducers/userReducer.ts'

function Login() {
  const router = useRouter()
  const formRef = useRef()
  const [loginInfo, setLoginInfo] = useState({
    userid: '',
    password: '',
  })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setLoginInfo({ ...loginInfo, [name]: value })
  }

  const handleClickRegister = () => router.push('/register')
  const handleSubmitLogin = (e) => {
    formRef.current.reportValidity()
    e.preventDefault()
    dispatch(userActions.loginRequest(loginInfo))
    router.push('/')
    setLoginInfo({
      userid: '',
      password: '',
    })
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-11/12 md:w-1/2 lg:w-2/5">
        <form
          ref={formRef}
          className="min-w-full rounded-lg bg-white p-6 shadow-lg md:p-10"
        >
          <h1 className="mb-6 text-center font-sans text-2xl font-bold text-gray-600">
            Login
          </h1>
          <div>
            <label
              className="text-md my-3 block font-semibold text-gray-800"
              htmlFor="email"
            >
              ID
            </label>
            <input
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-100 px-4 py-2 focus:outline-none"
              type="text"
              name="userid"
              id="userid"
              required
              placeholder="ID"
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
              onChange={handleChange}
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
