import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../redux/reducers/userReducer.ts'

function Register() {
  const router = useRouter()
  const formRef = useRef()
  const [user, setUser] = useState({
    userid: '',
    password: '',
    email: '',
    name: '',
    phone: '',
    birth: '',
    address: '',
  })
  const dispatch = useDispatch()
  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleClickLogin = () => router.push('/login')
  const handleSubmitRegister = (e) => {
    formRef.current.reportValidity()
    e.preventDefault()
    alert(' 진행 1: 회원가입 클릭 ')
    dispatch(userActions.joinRequest(user))
    router.push('/login')
  }

  return (
    <div className="flex flex-1 justify-center">
      <div className="w-11/12 md:w-1/2 lg:w-2/5">
        <form
          ref={formRef}
          className="min-w-full rounded-lg bg-white p-6 shadow-lg md:p-10"
        >
          <h1 className="mb-6 text-center font-sans text-2xl font-bold text-gray-600">
            Register
          </h1>
          <div>
            <label
              className="text-md my-3 block font-semibold text-gray-800"
              htmlFor="userid"
            >
              ID
            </label>
            <input
              className="w-full rounded-lg bg-gray-100 px-4 py-2 focus:outline-none"
              type="text"
              name="userid"
              onChange={handleChange}
              id="userid"
              required
              placeholder="userid"
            />
          </div>
          <div>
            <label
              className="text-md my-3 block font-semibold text-gray-800"
              htmlFor="name"
            >
              이름
            </label>
            <input
              className="w-full rounded-lg bg-gray-100 px-4 py-2 focus:outline-none"
              type="text"
              name="name"
              onChange={handleChange}
              id="name"
              required
              placeholder="name"
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              전화번호
            </label>
            <input
              className="w-full rounded-lg bg-gray-100 px-4 py-2 focus:outline-none"
              type="text"
              name="phone"
              onChange={handleChange}
              id="phone"
              required
              placeholder="phone"
            />
          </div>
          <div>
            <label
              className="text-md my-3 block font-semibold text-gray-800"
              htmlFor="confirm"
            >
              생년월일
            </label>
            <input
              className="w-full rounded-lg bg-gray-100 px-4 py-2 focus:outline-none"
              type="text"
              name="birth"
              onChange={handleChange}
              id="birth"
              required
              placeholder="birth"
            />
          </div>
          <div>
            <label
              className="text-md my-3 block font-semibold text-gray-800"
              htmlFor="confirm"
            >
              주소
            </label>
            <input
              className="w-full rounded-lg bg-gray-100 px-4 py-2 focus:outline-none"
              type="text"
              name="address"
              onChange={handleChange}
              id="address"
              required
              placeholder="address"
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
