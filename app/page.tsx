'use client'
// import { Canvas } from '@react-three/fiber'
import React, { useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import NavBar from './(components)/NavBar'
import EmailSection from './(components)/EmailSection'
// import MouseEffect from './MouseImage'

export default function Home() {
  const comp = useRef(null)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {}, comp)
    return () => ctx.revert()
  })
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/send'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)
    const resData = await response.json()

    if (response.status === 200) {
      console.log('Message sent.')
      setEmailSubmitted(true)
    }
  }

  return (
    <main>
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
                <div className="flex flex-row gap-x-4 items-center hover:text-zinc-200 group">
                  <h3 className="text-lg font-semibold">
                    Waitangi Marae Website
                  </h3>
                  <i className="fa-solid fa-arrow-up rotate-45 group-hover:scale-125"></i>
                </div>
              </a>
              <ul className="flex flex-wrap gap-x-3">
                <li className=" my-4 rounded-full bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-200 ">
                  NextJS
                </li>
                <li className="my-4 rounded-full bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-200 ">
                  TypeScript
                </li>
                <li className="my-4 rounded-full bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-200 ">
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
                <li className="rounded-full bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-200 my-4 ">
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
                <li className="my-4 rounded-full bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-200 ">
                  TypeScript
                </li>
                <li className="my-4 rounded-full bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-200 ">
                  ThreeJS
                </li>
                <li className="my-4 rounded-full bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-200 ">
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
                <li className="my-4 rounded-full bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-200 ">
                  TypeScript
                </li>
                <li className="my-4 rounded-full bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-200 ">
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
        <footer className="flex flex-col">
          <EmailSection />
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
          <p className="mb-8 text-center">
            © 2024 | Designed & Developed by Eden Pearson
          </p>
        </footer>
      </div>
    </main>
  )
}
