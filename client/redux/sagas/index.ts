import { watchJoin, watchLogin, watchLogout } from './userSaga.ts'
import {
  watchAddEmployee,
  watchFetchEmployees,
  watchRemoveEmployee,
  watchUpdateEmployee,
} from './employee'

import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    watchJoin(),
    watchLogin(),
    watchLogout(),
    watchFetchEmployees(),
    watchAddEmployee(),
    watchRemoveEmployee(),
    watchUpdateEmployee(),
  ])
}
