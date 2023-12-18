'use client'
import { Canvas } from '@react-three/fiber'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {})

  return (
    <main className="flex flex-row m-10 gap-x-6">
      <div id="left-div" className="w-1/3">
        <h1 className="text-4xl font-semibold">Eden Pearson</h1>
        <h2 className="text-lg ">Full Stack Software Developer</h2>
        <p className="my-6">
          I build beautiful and accessible digital experiences for the web
        </p>
        <nav>
          <ul id="nav-bar" className="font-light text-sm tracking-wider">
            <li className="flex flex-row items-center group">
              {
                // TODO make the hr lines become longer on hover and click
              }
              <hr className="h-1 w-8 mr-2 group-hover:w-16"></hr>
              <Link href="#about-section">ABOUT</Link>
            </li>
            <li className="flex flex-row items-center">
              <hr className="h-1 w-8 mr-2 group-hover:w-16"></hr>
              <Link href="#projects-section">PROJECTS</Link>
            </li>
          </ul>
        </nav>
        <ul className="flex flex-row my-10">
          <li className="mx-4">
            <a href="https://github.com/eden-pearson">
              <i className="fa-brands fa-github fa-xl hover:text-teal-300"></i>
            </a>
          </li>
          <li className="mx-4">
            <a href="https://www.linkedin.com/in/edenpearson/">
              <i className="fa-brands fa-linkedin fa-xl hover:text-teal-300"></i>
            </a>
          </li>
          <li className="mx-4">
            <a href="https://www.linkedin.com/in/edenpearson/">
              <i className="fa-solid fa-envelope fa-xl hover:text-teal-300"></i>
            </a>
          </li>
        </ul>
        <div>
          <Canvas></Canvas>
        </div>
      </div>
      <div id="right-div" className="w-2/3">
        <div className="mb-20">
          <p className="mb-6 text-justify">
            Tēnā Koe! I&apos;m a full-stack developer from Northland who is
            fuelled by creating accessible software for Kiwis. <br />
            <br />
            My journey into tech began during my time in a small digital team at
            GSK (a global pharmaceutical company), where I saw the possibilities
            for technology to revolutionize New Zealand&apos;s healthcare
            system. I decided that I wanted to get in on the action by being a
            creator of technology rather than just a user.
          </p>
          <a
            className="group hover:underline-offset-8 decoration-teal-300 hover:underline"
            href="/resume.pdf"
            download
          >
            Download My Resume
            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 ml-4"></i>
          </a>
        </div>
        <ol id="projects-section" className="flex-col flex gap-y-6">
          <li>
            {' '}
            <a href="https://www.waitangimarae.co.nz/">
              <div className="flex flex-row gap-x-4 items-center hover:text-teal-300 group">
                <h3 className="text-lg font-semibold">
                  Waitangi Marae Website
                </h3>
                <i className="fa-solid fa-arrow-up rotate-45 group-hover:scale-125"></i>
              </div>
            </a>
            <ul className="flex flex-wrap gap-x-3">
              <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 ">
                NextJS
              </li>
              <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 ">
                TypeScript
              </li>
              <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 ">
                SilverStripe
              </li>
            </ul>
          </li>
          <li>
            <div>
              <h3 className="text-lg font-semibold">TaskMaster</h3>
            </div>
            <ul className="flex flex-wrap gap-x-3">
              <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 ">
                TypeScript
              </li>
            </ul>
          </li>
          <li>
            <div>
              <h3 className="text-lg font-semibold">ChronoFlow</h3>
            </div>
            <ul className="flex flex-wrap gap-x-3">
              <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 ">
                TypeScript
              </li>
              <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 ">
                ThreeJS
              </li>
              <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 ">
                React
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </main>
  )
}
