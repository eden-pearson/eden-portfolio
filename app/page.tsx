'use client'
// import { Canvas } from '@react-three/fiber'
import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import NavBar from './components/NavBar'
// import MouseEffect from './MouseImage'

export default function Home() {
  const comp = useRef(null)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {}, comp)
    return () => ctx.revert()
  })
  return (
    <main className="bg-orange-50">
      <NavBar />
      <div className="z-0 "></div>

      <div />
      <div className="">
        <div id="" className="h-screen pt-32 text-center">
          <div className="flex items-center justify-center"></div>
          <h1 className="text-8xl">Eden Pearson</h1>
          <h2 className="text-2xl text-center font-thin">
            Full Stack Software Developer
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center my-10">
          <h3 className="mb-4 text-lg font-semibold">Projects</h3>
          <ol
            id="projects-section"
            className="flex-col flex gap-y-6 items-center"
          >
            <li>
              <a href="https://www.waitangimarae.co.nz/">
                <div className="flex flex-row gap-x-4 items-center hover:text-eden-blue group">
                  <h3 className="text-lg font-semibold">
                    Waitangi Marae Website
                  </h3>
                  <i className="fa-solid fa-arrow-up rotate-45 group-hover:scale-125"></i>
                </div>
              </a>
              <ul className="flex flex-wrap gap-x-3">
                <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-eden-blue ">
                  NextJS
                </li>
                <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-eden-blue ">
                  TypeScript
                </li>
                <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-eden-blue ">
                  SilverStripe
                </li>
              </ul>
              <Image
                src="/waitangimarae-screenshot.png"
                width="400"
                height="250"
                alt="screenshot of waitangi marae website"
              ></Image>
            </li>
            <li>
              <div>
                <h3 className="text-lg font-semibold">TaskMaster</h3>
              </div>
              <ul className="flex flex-wrap gap-x-3">
                <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-eden-blue ">
                  TypeScript
                </li>
              </ul>
              <Image
                src="/taskmaster-screenshot.png"
                width="400"
                height="250"
                alt="screenshot of taskmaster website"
              ></Image>
            </li>
            <li>
              <div>
                <a href="https://chronoflow.pushed.nz/">
                  <h3 className="text-lg font-semibold">ChronoFlow</h3>
                </a>
              </div>
              <ul className="flex flex-wrap gap-x-3">
                <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-eden-blue ">
                  TypeScript
                </li>
                <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-eden-blue ">
                  ThreeJS
                </li>
                <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-eden-blue ">
                  React
                </li>
              </ul>
              <Image
                src="/chronoflow-screenshot.png"
                width="400"
                height="250"
                alt="screenshot of chronoflow website"
              ></Image>
            </li>
            <li>
              <div>
                <h3 className="text-lg font-semibold">Kura Reo</h3>
              </div>
              <ul className="flex flex-wrap gap-x-3">
                <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-eden-blue ">
                  TypeScript
                </li>
                <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-eden-blue ">
                  React
                </li>
              </ul>
              <Image
                src="/kurareo-screenshot.png"
                width="400"
                height="250"
                alt="screenshot of kura reo website"
              ></Image>
            </li>
          </ol>
        </div>
        <footer>
          {' '}
          <ul className="flex flex-row my-10 items-center justify-center">
            <li className="mx-4">
              <a href="https://github.com/eden-pearson">
                <i className="fa-brands fa-github fa-xl hover:text-eden-blue"></i>
              </a>
            </li>
            <li className="mx-4">
              <a href="https://www.linkedin.com/in/edenpearson/">
                <i className="fa-brands fa-linkedin fa-xl hover:text-eden-blue"></i>
              </a>
            </li>
            <li className="mx-4">
              <a href="https://www.linkedin.com/in/edenpearson/">
                <i className="fa-solid fa-envelope fa-xl hover:text-eden-blue"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </main>
  )
}
