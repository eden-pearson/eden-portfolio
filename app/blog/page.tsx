import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="z-0 "></div>
      <div />
      <div className="flex flex-col md:flex-row m-10 gap-x-6 h-screen">
        <div id="left-div" className="md:w-1/3 w-full">
          <div className="flex items-center justify-center">
            <Image
              src="/eden.png"
              alt="eden software developer"
              height={200}
              width={400}
              className="mb-2"
            />
          </div>
          <h2 className="text-2xl text-center font-thin">My blog!</h2>
          
          <p>
            I am going to start an honest documentation of my journey from
            complete novice (excluding my successful completion of a boot camp)
            to a full-time software dev
          </p>
        </div>
      </div>
    </main>
  )
}
