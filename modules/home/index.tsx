import Link from 'next/link'
import { FadeIn } from '../../components/fade-in'
import { DefaultButton, PrimaryButton } from '../../components/buttons'
import {
  arrow,
  instagramIcon,
  facebookIcon,
  youtubeIcon,
  vkIcon,
  telegramIcon,
} from '../../components/icons'

export function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-2 relative">
      <div className="p-12">
        <FadeIn delay={0.3}>
          <h1 className="tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl text-3xl">
            <span className="block text-indigo-600 xl:inline main-title">
              Скиния 2022
            </span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.5}>
          <p className="mt-3 mb-2 sm:text-base text-sm text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl  md:mt-5 md:text-xl lg:mx-0">
            Привет, поклонник Иисуса Христа! На этом сайте ты сможешь
            {/* зарегистрироваться на школу,  */} стать спонсором и оставить
            свой отзыв!
          </p>
          <p className="text-gray-400 sm:text-base text-sm">
            В ближайшие дни появится галерея
          </p>
        </FadeIn>
        <FadeIn delay={0.7}>
          <p className="mt-2 text-gray-400">25.07 - 30.07</p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex sm:flex-row  flex-col mt-10 flex-wrap max-w-[400px]">
            {/* <div className="sm:block hidden mr-2 my-2">
              <Link href="/registration" passHref>
                <PrimaryButton>Регистрация</PrimaryButton>
              </Link>
            </div> */}

            <div className="sm:block hidden mr-2 my-2">
              <Link href="/about" passHref>
                <PrimaryButton>О школе</PrimaryButton>
              </Link>
            </div>

            <div className="sm:block hidden mr-2 my-2">
              <Link href="/sponsor" passHref>
                <DefaultButton>Стать спонсором</DefaultButton>
              </Link>
            </div>

            <div className="sm:block hidden mr-2 my-2">
              <Link href="/program" passHref>
                <DefaultButton>Программа</DefaultButton>
              </Link>
            </div>

            <div className="sm:block hidden mr-2 my-2">
              <Link href="/contacts" passHref>
                <DefaultButton>Контакты</DefaultButton>
              </Link>
            </div>

            {/*<div className="sm:block hidden mr-2 my-2">*/}
            {/*  <Link href="/gallery" passHref>*/}
            {/*    <DefaultButton>Галерея</DefaultButton>*/}
            {/*  </Link>*/}
            {/*</div>*/}

            {/*//*/}

            {/* <Link href="/registration">
              <a className="mb-4 sm:hidden block flex items-center">
                <span className="mr-2 text-lg">Регистрация</span>
                {arrow}
              </a>
            </Link> */}

            <Link href="/about">
              <a className="mb-4 sm:hidden block flex items-center">
                <span className="mr-2 text-lg">О школе</span>
                {arrow}
              </a>
            </Link>

            <Link href="/sponsor">
              <a className="mb-4 sm:hidden block flex items-center">
                <span className="mr-2 text-lg">Стать спонсором</span>
                {arrow}
              </a>
            </Link>

            <Link href="/program">
              <a className="mb-4 sm:hidden block flex items-center">
                <span className="mr-2 text-lg">Программа</span>
                {arrow}
              </a>
            </Link>

            <Link href="/contacts">
              <a className="mb-4 sm:hidden block flex items-center">
                <span className="mr-2 text-lg">Контакты</span>
                {arrow}
              </a>
            </Link>

            {/*<Link href="/gallery" passHref>*/}
            {/*  <a className="mb-4 sm:hidden block flex items-center">*/}
            {/*    <span className="mr-2 text-lg">Галерея</span>*/}
            {/*    {arrow}*/}
            {/*  </a>*/}
            {/*</Link>*/}
          </div>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="absolute bottom-10 flex">
            <a
              href="https://www.instagram.com/ngbelarus/"
              target="_blank"
              rel="noreferrer"
              className="mr-4 cursor-pointer"
            >
              {instagramIcon}
            </a>
            <a
              href="https://www.facebook.com/NGBelarus"
              target="_blank"
              rel="noreferrer"
              className="mr-4 cursor-pointer"
            >
              {facebookIcon}
            </a>
            <a
              href="https://www.youtube.com/user/NewGenerationBY"
              target="_blank"
              rel="noreferrer"
              className="mr-4 cursor-pointer"
            >
              {youtubeIcon}
            </a>
            <a
              href="https://vk.com/skinia2022"
              target="_blank"
              rel="noreferrer"
              className="mr-4 cursor-pointer"
            >
              {vkIcon}
            </a>
            <a
              href="https://t.me/skiniaby"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              {telegramIcon}
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
