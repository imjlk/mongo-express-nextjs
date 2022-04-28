import Link from 'next/link'

function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="text-center">
        <h1 className="text-center text-9xl font-extrabold tracking-widest text-gray-600">
          404
        </h1>
        <div className="mb-6 rounded  bg-[#FF6A3D] px-2 text-sm">
          Page Not Found
        </div>
        <Link href="/">
          <a className="group relative inline-block text-sm font-medium text-[#FF6A3D] focus:outline-none focus:ring active:text-orange-500">
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span className="relative block border border-current bg-[#1A2238]">
              <span className="block px-8 py-3">Go Home</span>
            </span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
