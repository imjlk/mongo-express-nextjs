import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from '@reduxjs/toolkit'
import users from './userReducer.ts'
import employee from './employee'

const rootReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }
  return combineReducers({
    users,
    employee,
  })(state, action)
}
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
