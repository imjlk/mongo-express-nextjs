import { all, put, takeLatest } from 'redux-saga/effects'
import * as TYPES from '../types'

function* fetchEmployees() {
  try {
    const response = yield fetch('/api/employees')

    const employeeList = yield response.json()

    yield put({
      type: TYPES.EMPLOYEE_FETCH_SUCCEEDED,
      payload: employeeList.data,
    })
  } catch (error) {
    yield put({
      type: TYPES.EMPLOYEE_FETCH_FAILED,
      payload: error.message,
    })
  }
}

export function* watchFetchEmployees() {
  yield takeLatest(TYPES.EMPLOYEE_FETCH_REQUESTED, fetchEmployees)
}

function* addEmployee(action) {
  try {
    const response = yield fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    })

    const newEmployee = yield response.json()

    yield put({
      type: TYPES.EMPLOYEE_ADD_SUCCEEDED,
      payload: newEmployee.data,
    })
  } catch (error) {
    yield put({
      type: TYPES.EMPLOYEE_ADD_FAILED,
      payload: error.message,
    })
  }
}

export function* watchAddEmployee() {
  yield takeLatest(TYPES.EMPLOYEE_ADD_REQUESTED, addEmployee)
}

function* deleteEmployee(action) {
  try {
    const response = yield fetch(
      `/api/employees/${action.payload.id}?token=${action.payload.token}`,
      {
        method: 'DELETE',
      },
    )

    const deletedEmployee = yield response.json()

    yield put({
      type: TYPES.EMPLOYEE_DELETE_SUCCEEDED,
      payload: deletedEmployee.data.id,
    })
  } catch (error) {
    yield put({
      type: TYPES.EMPLOYEE_DELETE_FAILED,
      payload: error.message,
    })
  }
}

export function* watchRemoveEmployee() {
  yield takeLatest(TYPES.EMPLOYEE_DELETE_REQUESTED, deleteEmployee)
}

function* updateEmployee(action) {
  try {
    const response = yield fetch('/api/employees/' + action.payload._id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    })

    const updatedEmployee = yield response.json()

    yield put({
      type: TYPES.EMPLOYEE_UPDATE_SUCCEEDED,
      payload: updatedEmployee.data,
    })
  } catch (error) {
    yield put({
      type: TYPES.EMPLOYEE_UPDATE_FAILED,
      payload: error.message,
    })
  }
}

export function* watchUpdateEmployee() {
  yield takeLatest(TYPES.EMPLOYEE_UPDATE_REQUESTED, updateEmployee)
}
