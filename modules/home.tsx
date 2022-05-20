import Link from 'next/link'
import { FadeIn } from '../components/fade-in'
import { Button } from 'antd'

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
            <span className="block text-indigo-600 xl:inline main-title">
              Скиния 2022
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl  md:mt-5 md:text-xl lg:mx-0">
            Добро пожаловать на Скинию 2022! Здесь вы можете разегестрироваться
            на конференцию, стать спонсором, а так же узнать программу
          </p>
          <div className="flex sm:flex-row flex-col mt-10 flex-wrap">
            <div className="sm:block hidden mr-2 my-2">
              <Link href="/registration" passHref>
                <Button>Регистрация</Button>
              </Link>
            </div>

            <Link href="/registration">
              <a className="mb-4 sm:hidden block flex items-center">
                <span className="mr-2 text-lg">Регистрация</span>
                {arrow}
              </a>
            </Link>

            <div className="sm:block hidden mr-2 my-2">
              <Link href="/sponsor" passHref>
                <Button>Стать спонсором</Button>
              </Link>
            </div>

            <Link href="/sponsor">
              <a className="mb-4 sm:hidden block flex items-center">
                <span className="mr-2 text-lg">Стать спонсором</span>
                {arrow}
              </a>
            </Link>

            <div className="sm:block hidden mr-2 my-2">
              <Link href="/program" passHref>
                <Button>Программа</Button>
              </Link>
            </div>

            <Link href="/program">
              <a className="mb-4 sm:hidden block flex items-center">
                <span className="mr-2 text-lg">Программа</span>
                {arrow}
              </a>
            </Link>

            {/*<div className="sm:block hidden mr-2 my-2">*/}
            {/*  <Link href="/about" passHref>*/}
            {/*    <Button>Контакты</Button>*/}
            {/*  </Link>*/}
            {/*</div>*/}

            {/*<Link href="/about">*/}
            {/*  <a className="mb-4 sm:hidden block flex items-center">*/}
            {/*    <span className="mr-2 text-lg">Контакты</span>*/}
            {/*    {arrow}*/}
            {/*  </a>*/}
            {/*</Link>*/}

            {/*<div className="sm:block hidden mr-2 my-2">*/}
            {/*  <Link href="/gallery" passHref>*/}
            {/*    <Button>Галерея</Button>*/}
            {/*  </Link>*/}
            {/*</div>*/}

            {/*<Link href="/gallery">*/}
            {/*  <a className="mb-4 sm:hidden block flex items-center">*/}
            {/*    <span className="mr-2 text-lg">Галерея</span>*/}
            {/*    {arrow}*/}
            {/*  </a>*/}
            {/*</Link>*/}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
