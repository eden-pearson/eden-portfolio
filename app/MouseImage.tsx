import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function MouseEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentImage, setCurrentImage] = useState('splotch-1')

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    let num = 1
    const interval = setInterval(() => {
      num = num < 4 ? num + 1 : 1
      setCurrentImage(`splotch-${num}`)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <Image
      src={`/${currentImage}.png`}
      alt="Floating Image"
      style={{
        position: 'fixed',
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translate(-50%, -50%)',
        zIndex: -1,
      }}
      className="pointer-events-none"
      width={1000}
      height={1000}
    />
  )
}
