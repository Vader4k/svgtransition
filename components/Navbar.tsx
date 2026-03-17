import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='fixed top-6 left-1/2 -translate-x-1/2 z-50'>
        <div className='flex items-center text-black gap-8 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-200 shadow-sm'>
            <Link href="/" className='text-sm tracking-tight'>Home</Link>
            <div className='w-px h-4 bg-gray-300' />
            <Link href="/about" className='text-sm tracking-tight'>About</Link>
        </div>
    </nav>
  )
}

export default Navbar