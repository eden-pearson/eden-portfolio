import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [navMenu, setNavMenu] = useState(false)

  const handleClick = () => {
    setNavMenu(!navMenu)
    console.log(navMenu)
  }
  return (
    <div className="text-blue-800 bg-transparent sticky z-0">
      <nav className="sticky top-0 py-6 top-0 w-full flex justify-between items-center h-18  px-4 z-10 ">
        <div className="flex items-center">
          <span className="font-semibold text-xl">EP</span>
        </div>
        <button
          onClick={() => {
            handleClick()
          }}
        >
          {navMenu === false ? (
            <i className="fa-solid fa-bars sm:hidden"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </button>
        <div className="hidden sm:flex items-center gap-4">
          <Link href="#about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="#projects" className="hover:text-gray-300">
            Projects
          </Link>
          <a className="" href="/resume.pdf" download>
            Resume
          </a>
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </nav>
      <div id="mobile-menu" className={navMenu === true ? '' : 'hidden'}>
        <div className="flex flex-col fixed top-20 w-full pl-10 bg-white py-6 gap-3">
          <Link href="#about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="#projects" className="hover:text-gray-300">
            Projects
          </Link>
          <a className="" href="/resume.pdf" download>
            Resume
          </a>
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
