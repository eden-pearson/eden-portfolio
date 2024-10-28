import EmailSection from './EmailSection'

export default function Footer() {
  return (
    <div className="flex flex-col">
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
    </div>
  )
}
