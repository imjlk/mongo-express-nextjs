import React, { useEffect, useState } from 'react'

function Page() {
  const [token, setToken] = useState('')

  useEffect(() => {
    const savedToken = window.localStorage.getItem('loginUser')
    console.log('savedToken', savedToken)
    if (savedToken) {
      setToken(savedToken)
    }
  }, [])
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
