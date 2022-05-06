import axios, { AxiosResponse } from 'axios'

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'JWT fefege...',
}
export interface UserType {
  userid: string
  password: string
  email: string
  name: string
  phone: string
  birth: string
  address: string
}
export const joinApi = async (payload: {
  userid: string
  password: string
  email: string
  name: string
  phone: string
  birth: string
  address: string
}) => {
  try {
    alert('진행 4: API진입')
    const response: AxiosResponse<unknown, UserType[]> = await axios.post(
      `http://127.0.0.1:3333/user/join`,
      payload,
      { headers },
    )
    alert('진행 6 : 응답성공 ' + JSON.stringify(response.data))
    return response.data
  } catch (err) {
    console.log(err)
    return err
  }
}
export const loginApi = async (payload: {
  userid: string
  password: string
}) => {
  try {
    alert('진행 4: API진입')
    const response: AxiosResponse<unknown, UserType[]> = await axios.post(
      `http://127.0.0.1:3333/user/login`,
      payload,
      { headers },
    )
    const token = JSON.stringify(response.data)
    alert('진행 6 : 응답성공 ' + JSON.stringify(token))
    localStorage.setItem('token', token)

    return response.data
  } catch (err) {
    return err
  }
}
export const logoutApi = async () => {
  try {
    const response: AxiosResponse<unknown, UserType[]> = await axios.post(
      `http://127.0.0.1:3333/user/logout`,
      { headers },
    )
  } catch (err) {
    return err
  }
}
