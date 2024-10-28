import Image from 'next/image'

export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center my-10 text-white">
      <h3 className="mb-4 text-3xl font-semibold text-blue-600">Projects</h3>
      <ol id="projects" className="flex-col flex gap-y-6 items-center">
        <li>
          <a href="https://www.waitangimarae.co.nz/">
            <div className="flex flex-row gap-x-4 items-center hover:text-zinc-200 group">
              <h3 className="text-lg font-semibold">Waitangi Marae Website</h3>
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
  )
}
