import { watchJoin, watchLogin, watchLogout } from './userSaga.ts'

import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([watchJoin(), watchLogin(), watchLogout()])
}
