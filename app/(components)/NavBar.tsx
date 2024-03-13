import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [navMenu, setNavMenu] = useState(false)

  const handleClick = () => {
    setNavMenu(!navMenu)
    console.log(navMenu)
  }
  return (
    <div>
      <nav className="fixed top-0 w-full flex justify-between items-center h-18 text-gray-300 px-4 z-10 bg-[#1f1f1f]">
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
        <ul className="flex flex-row my-10 items-center justify-center">
          <li className="mx-4">
            <a href="https://github.com/eden-pearson">
              <i className="fa-brands fa-github fa-xl hover:text-zinc-200"></i>
            </a>
          </li>
          <li className="mx-4">
            <a href="https://www.linkedin.com/in/edenpearson/">
              <i className="fa-brands fa-linkedin fa-xl hover:text-zinc-200"></i>
            </a>
          </li>
          <li className="mx-4">
            <a href="https://www.linkedin.com/in/edenpearson/">
              <i className="fa-solid fa-envelope fa-xl hover:text-zinc-200"></i>
            </a>
          </li>
        </ul>
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
