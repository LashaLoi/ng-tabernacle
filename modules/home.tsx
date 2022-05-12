import Link from 'next/link'
import { FadeIn } from '../components/fade-in'

const arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
)

export default function Home() {
  return (
    <FadeIn>
      <div className="h-screen w-full flex flex-col justify-center items-center p-2">
        <div className="p-12">
          <h1 className="tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl text-4xl">
            <span className="block xl:inline">Data enrich</span>{' '}
            <span className="block text-indigo-600 xl:inline main-title">
              Скиния 2022
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl  md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="flex sm:flex-row flex-col mt-10 flex-wrap">
            <div className="sm:block hidden">
              <Link href="/registration">
                <a className="text-center cursor-pointer sm:w-[140px] w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span className="sm:w-[140px] w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white group-hover:bg-opacity-0">
                    Регистрация
                  </span>
                </a>
              </Link>
            </div>

            <Link href="/registration">
              <a className="mb-4 sm:hidden block flex items-center">
                <span className="mr-2">Регистрация</span>
                {arrow}
              </a>
            </Link>

            <div className="sm:block hidden">
              <Link href="/program">
                <a className="text-center cursor-pointer sm:w-[140px] w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span className="sm:w-[140px] w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                    Программа
                  </span>
                </a>
              </Link>
            </div>

            <Link href="/program">
              <a className="mb-4 sm:hidden block flex items-center">
                <span className="mr-2">Программа</span>
                {arrow}
              </a>
            </Link>

            <div className="sm:block hidden">
              <Link href="/about">
                <a className="text-center cursor-pointer sm:w-[140px] w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span className="sm:w-[140px] w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                    Контакты
                  </span>
                </a>
              </Link>
            </div>

            <Link href="/about">
              <a className="mb-4 sm:hidden block flex items-center">
                <span className="mr-2">Контакты</span>
                {arrow}
              </a>
            </Link>

            <div className="sm:block hidden">
              <Link href="/gallery">
                <a className="text-center cursor-pointer sm:w-[140px] w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span className="sm:w-[140px] w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                    Галерея
                  </span>
                </a>
              </Link>
            </div>

            <Link href="/gallery">
              <a className="mb-4 sm:hidden block flex items-center">
                <span className="mr-2">Галерея</span>
                {arrow}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
