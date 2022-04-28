import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="flex h-16 justify-center bg-gray-100 align-middle">
      <Link href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
        <a
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powerd by
          <span className="ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={20} />
          </span>
        </a>
      </Link>
    </footer>
  )
}

export default Footer
