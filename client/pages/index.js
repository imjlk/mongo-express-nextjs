import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

const SERVER = process.env.SERVER

export default function Home({ serverTimestamp }) {
  const [timestamp, setTimestamp] = useState(serverTimestamp)
  const ONE_SECOND = 1000

  useInterval(() => {
    setTimestamp(timestamp + ONE_SECOND)
  }, ONE_SECOND)

  return (
    <div className="flex-1">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>현재 서버 시간</p>
      <h1>{new Date(timestamp).toLocaleString()}</h1>
    </div>
  )
}

export async function getServerSideProps() {
  // FIX: 에러 핸들링 어떻게?
  const response = await fetch(SERVER + '/api/now')
  const data = await response.json()
  const serverTimestamp = data.now
  return {
    props: { serverTimestamp },
  }
}

/* 
  참고: [번역 / 리액트 훅스 컴포넌트에서 setInterval 사용 시의 문제점](https://velog.io/@jakeseo_me/번역-리액트-훅스-컴포넌트에서-setInterval-사용-시의-문제점)
*/
function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
