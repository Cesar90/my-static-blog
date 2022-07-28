import Link from 'next/link'

export default function Header() {
    return (
        <header 
            className='
                bg-green-900 
                text-gray-100 
                shadow w-full'>
            <div className='
                container mx-auto 
                flex flex-wrap 
                p-5 flex-col 
                md:flex-row 
                items-center'>
                <Link href='/'>
                    <a className='flex md:w-1/5 title-font font-medium items-center md:justify md:justify-start mb-4 md:mb-0'>
                        <span className="ml-3 text-xl">
                            My Static Blog
                        </span>
                    </a>
                </Link>
                <nav className='flex flex-wrap md:w-4/5 items-center justify-end'>
                    <Link href='/blog'>
                        <a className="mx-5 cursor-pointer
                        uppercase hover:text-indigo-300">
                            Blog
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a className="
                        mx-5 cursor-pointer
                        uppercase hover:text-indigo-300">
                            About
                        </a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}