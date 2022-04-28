import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

/* 
  TODO: 
    1. Layout에서 계산된 값으로 calcHeight 활용하기
    2. 네비게이션 데이터 별도 관리?
*/
function SideNavBar({ children, calcHeight }) {
  const router = useRouter()
  const anchorClasses =
    'flex h-16 w-full items-center justify-center px-4 focus:text-orange-500'
  const activePath = (path) => (path === router.pathname ? 'bg-gray-200' : '')

  return (
    <main className="flex h-[calc(100vh-7em)] bg-gray-200">
      <aside className="flex flex-col items-center bg-white text-gray-700 shadow">
        <ul>
          <li className={`hover:bg-gray-100 ${activePath('/')}`}>
            <Link href="/">
              <a className={anchorClasses}>
                <Image
                  className="mx-auto h-6 w-6"
                  src="/assets/icons/Idea.svg"
                  alt="Home"
                  width={32}
                  height={32}
                />
              </a>
            </Link>
          </li>
          <li className={`hover:bg-gray-100 ${activePath('/test')}`}>
            <Link href="/test">
              <a className={anchorClasses}>
                <Image
                  className="mx-auto h-6 w-6"
                  src="/assets/icons/ID-Card.svg"
                  alt="My"
                  width={32}
                  height={32}
                />
              </a>
            </Link>
          </li>
          <li className={`hover:bg-gray-100 ${activePath('/store')}`}>
            <Link href="/store">
              <a className={anchorClasses}>
                <Image
                  className="mx-auto h-6 w-6"
                  src="/assets/icons/Report.svg"
                  alt="My"
                  width={32}
                  height={32}
                />
              </a>
            </Link>
          </li>
        </ul>

        <div className="mt-auto flex h-16 w-full items-center">
          <button
            className="mx-auto flex h-16 w-full items-center
				justify-center hover:bg-red-200 focus:text-orange-500 focus:outline-none"
          >
            <svg
              className="h-5 w-5 text-red-700"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
      </aside>
      <section className="container mx-auto flex max-w-3xl flex-1 overflow-auto p-4">
        {children}
      </section>
    </main>
  )
}

export default SideNavBar
