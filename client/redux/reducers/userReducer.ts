import { createSlice } from '@reduxjs/toolkit'

export interface UserType {
  userid: string
  password: string
  email: string
  name: string
  phone: string
  birth: string
  address: string
}

export interface UserState {
  loading: boolean
  data: UserType | null
  error: any
}

const initialState: UserState = {
  loading: false,
  data: null,
  error: null,
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    joinRequest(state: UserState, payload) {
      alert('진행 2: 리듀서 내부 ')
      state.loading = true
    },
    joinSuccess(state: UserState, { payload }) {
      state.data = { ...state.data, ...payload }
      state.loading = false
    },
    joinFailure(state: UserState, { payload }) {
      state.data = payload
      state.loading = false
    },
    loginRequest(state: UserState, payload) {
      alert('진행 2: 리듀서 내부 ')
      state.loading = true
    },
    loginSuccess(state: UserState, { payload }) {
      console.log('loginSuccess payload> ', payload)
      state.data = { ...state.data, ...payload }
      state.loading = false
    },
    loginFailure(state: UserState, { payload }) {
      state.data = payload
      state.loading = false
    },
    logoutRequest(state: UserState, payload) {
      state.loading = false
    },
    logoutSuccess(state: UserState) {
      state.loading = false
    },
  },
})
const { reducer, actions } = userSlice
export const userActions = actions
export const selectUser = (state) => state.user.data
export default reducer