'use client'
// import { Canvas } from '@react-three/fiber'
import React, { useLayoutEffect, useRef, useState } from 'react'

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
        <div id="" className="h-screen pt-32 text-center">
          <div className="flex items-center justify-center"></div>
          <h1 className="text-8xl text-white">Eden Pearson</h1>

          <Typewriter />
        </div>
        <Projects />
        <Footer />
      </div>
    </main>
  )
}
