import { useSelector, useDispatch } from 'react-redux'
import { PencilSVG, TrashSVG } from '@/icons'
import {
  deleteEmployee,
  fetchEmployees,
  setModalOpen,
  setSelectedEmployee,
} from '../redux/actions/employee'
import { useEffect } from 'react'
import { selectUser } from '@/redux/reducers/userReducer.ts'

export function Table() {
  const state = useSelector((state) => state.employee)
  const { token } = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])

  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          <th>Full name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody className="table__body">
        {state.employeeList.map(({ _id, name, email, address, phone }) => (
          <tr key={_id}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>
              <button
                className="btn btn__compact btn__edit"
                onClick={() => {
                  dispatch(setSelectedEmployee(_id))
                  dispatch(setModalOpen(true))
                }}
              >
                <PencilSVG />
              </button>
              <button
                className="btn btn__compact btn__delete"
                onClick={() => {
                  dispatch(deleteEmployee(_id, token))
                }}
              >
                <TrashSVG />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
