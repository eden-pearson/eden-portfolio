'use client'
// import { Canvas } from '@react-three/fiber'
import React, { useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { Canvas } from '@react-three/fiber'
// import gsap from 'gsap'
import NavBar from '../components/NavBar'
import EmailSection from '../components/EmailSection'
import Footer from '@/components/Footer'
import Typewriter from '@/components/Typewriter'
import Projects from '@/components/Projects'
// import MouseEffect from './MouseImage'

export default function Home() {
  return (
    <main className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <NavBar />
      <div className="z-0 "></div>

      <div />
      <div className="">
        <div className="h-screen pt-32 text-center flex flex-col items-center">
          <div className="flex items-center justify-center"></div>
          <Image
            src="/full-name.png"
            width="800"
            height="500"
            alt="eden pearson"
          ></Image>

          <Typewriter />
        </div>
        <Projects />
        <Footer />
      </div>
    </main>
  )
}
