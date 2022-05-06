import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/reducers/userReducer.ts'

function Page() {
  const { token } = useSelector(selectUser)

  if (!token) {
    return <div>Not Authenticated</div>
  }
  return (
    <div>
      <button
        onClick={async () => {
          const response = await (
            await fetch(`http://127.0.0.1:3333/user/verifyToken/${token}`)
          ).text()
          console.log(JSON.parse(response))
        }}
      >
        TEST VERIFY TOKEN
      </button>
    </div>
  )
}

export default Page
