// src/components/Typewriter.tsx
import { useEffect, useState } from 'react'

const words = [
  'Kia Ora!',
  'I am a Software Developer!',
  'I specialize in TypeScript and React!',
  'I can help you build amazing projects!',
  'Scroll down to get in contact!',
]

export default function Typewriter() {
  const [index, setIndex] = useState(0) // Tracks which word we're on
  const [text, setText] = useState('') // Current text to display
  const [isDeleting, setIsDeleting] = useState(false) // Tracks if we're deleting text

  useEffect(() => {
    let typingSpeed = 100 // Typing speed in milliseconds

    if (isDeleting) {
      typingSpeed /= 2 // Speed up when deleting
    }

    const timeout = setTimeout(() => {
      const currentWord = words[index]

      // Update the text by adding or removing a letter
      setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)))

      // Check if word is complete
      if (!isDeleting && text === currentWord) {
        setIsDeleting(true)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setIndex((prevIndex) => (prevIndex + 1) % words.length) // Move to the next word
      }
    }, typingSpeed)

    return () => clearTimeout(timeout) // Cleanup timeout on unmount
  }, [text, isDeleting, index])

  return <h2 className="text-4xl font-thin text-blue-600">{text}</h2>
}
