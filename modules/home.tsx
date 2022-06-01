import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeIn } from '../components/fade-in'

import { DefaultButton, PrimaryButton } from '../components/buttons'

export const instagramIcon = (
  <motion.svg
    fill="#64748b"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    whileHover={{
      scale: 1.2,
    }}
    whileTap={{ scale: 0.9 }}
  >
    <motion.path
      initial={{
        opacity: 0,
        pathLength: 0,
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      animate={{
        opacity: 1,
        pathLength: 1,
      }}
      d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
    />
  </motion.svg>
)

export const vkIcon = (
  <motion.svg
    fill="#64748b"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    whileHover={{
      scale: 1.2,
    }}
    whileTap={{ scale: 0.9 }}
  >
    <motion.path
      initial={{
        opacity: 0,
        pathLength: 0,
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      animate={{
        opacity: 1,
        pathLength: 1,
      }}
      d="M 12 2 C 6.4889941 2 2 6.4889982 2 12 C 2 17.511002 6.4889941 22 12 22 C 17.511006 22 22 17.511002 22 12 C 22 6.4889982 17.511006 2 12 2 z M 12 4 C 16.430126 4 20 7.5698765 20 12 C 20 16.430123 16.430126 20 12 20 C 7.5698737 20 4 16.430123 4 12 C 4 7.5698765 7.5698737 4 12 4 z M 6.4453125 8.5 C 6.0643125 8.5 6 8.6867187 6 8.8867188 C 6 9.2477188 6.2995 11.1965 7.9375 13.4375 C 9.1245 15.0635 10.689219 16 12.074219 16 C 12.913219 16 13 15.786125 13 15.453125 L 13 13.966797 C 13 13.565797 13.092375 13.5 13.359375 13.5 C 13.550375 13.5 13.9375 13.625 14.6875 14.5 C 15.5525 15.509 15.709078 16 16.205078 16 L 17.515625 16 C 17.819625 16 17.994953 15.873 18.001953 15.625 C 18.002953 15.562 17.993656 15.490109 17.972656 15.412109 C 17.875656 15.124109 17.431953 14.421 16.876953 13.75 C 16.568953 13.378 16.265953 13.009547 16.126953 12.810547 C 16.031953 12.679547 15.996 12.588 16 12.5 C 16.004 12.408 16.052 12.318312 16.125 12.195312 C 16.112 12.195312 17.80375 9.8214844 17.96875 9.0214844 C 17.99175 8.9454844 18.003 8.8745 18 8.8125 C 17.992 8.6315 17.867219 8.5 17.574219 8.5 L 16.265625 8.5 C 15.935625 8.5 15.782359 8.6993906 15.693359 8.9003906 C 15.693359 8.9003906 14.8785 10.5795 13.9375 11.6875 C 13.6325 12.0075 13.4775 12 13.3125 12 C 13.2245 12 13 11.893609 13 11.599609 L 13 9.0078125 C 13 8.6608125 12.914766 8.5 12.634766 8.5 L 10.310547 8.5 C 10.106547 8.5 10 8.6593125 10 8.8203125 C 10 9.1533125 10.449 9.2349219 10.5 10.169922 L 10.5 11.980469 C 10.5 12.420469 10.424766 12.5 10.259766 12.5 C 9.8147656 12.5 8.9385625 10.999203 8.3515625 9.0332031 C 8.2245625 8.6462031 8.0975781 8.5 7.7675781 8.5 L 6.4453125 8.5 z"
    />
  </motion.svg>
)

export const facebookIcon = (
  <motion.svg
    fill="#64748b"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    whileHover={{
      scale: 1.2,
    }}
    whileTap={{ scale: 0.9 }}
  >
    <motion.path
      initial={{
        opacity: 0,
        pathLength: 0,
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      animate={{
        opacity: 1,
        pathLength: 1,
      }}
      d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"
    />
  </motion.svg>
)

export const youtubeIcon = (
  <motion.svg
    fill="#64748b"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    whileHover={{
      scale: 1.2,
    }}
    whileTap={{ scale: 0.9 }}
  >
    <motion.path
      initial={{
        opacity: 0,
        pathLength: 0,
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      animate={{
        opacity: 1,
        pathLength: 1,
      }}
      d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z"
    />
  </motion.svg>
)

export const telegramIcon = (
  <motion.svg
    fill="#64748b"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    whileHover={{
      scale: 1.2,
    }}
    whileTap={{ scale: 0.9 }}
  >
    <motion.path
      initial={{
        opacity: 0,
        pathLength: 0,
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      animate={{
        opacity: 1,
        pathLength: 1,
      }}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M 20.572266 3.0117188 C 20.239891 2.9764687 19.878625 3.028375 19.515625 3.171875 C 19.065625 3.348875 12.014406 6.3150313 5.4414062 9.0820312 L 3.2695312 9.9960938 C 2.4285313 10.337094 2.0039062 10.891672 2.0039062 11.638672 C 2.0039062 12.161672 2.22525 12.871063 3.28125 13.289062 L 6.9472656 14.757812 C 7.2642656 15.708813 8.0005469 17.916906 8.1855469 18.503906 C 8.2955469 18.851906 8.5733906 19.728594 9.2753906 19.933594 C 9.4193906 19.982594 9.5696563 20.007813 9.7226562 20.007812 C 10.165656 20.007812 10.484625 19.801641 10.640625 19.681641 L 12.970703 17.710938 L 15.800781 20.328125 C 15.909781 20.439125 16.486719 21 17.261719 21 C 18.228719 21 18.962234 20.195016 19.115234 19.416016 C 19.198234 18.989016 21.927734 5.2870625 21.927734 5.2890625 C 22.172734 4.1900625 21.732219 3.6199531 21.449219 3.3769531 C 21.206719 3.1694531 20.904641 3.0469688 20.572266 3.0117188 z M 19.910156 5.171875 C 19.533156 7.061875 17.478016 17.378234 17.166016 18.865234 L 13.029297 15.039062 L 10.222656 17.416016 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.272669 8.8885973 10.404094 11.662239 8.0078125 13.025391 L 4.53125 11.636719 L 6.21875 10.927734 C 10.51775 9.1177344 18.174156 5.893875 19.910156 5.171875 z"
    />
  </motion.svg>
)

export const arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <motion.path
      initial={{
        opacity: 0,
        pathLength: 0,
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      animate={{
        opacity: 1,
        pathLength: 1,
      }}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
)

export default function Home() {
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
            зарегистрироваться на школу, стать спонсором и оставить свой отзыв!
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
            <div className="sm:block hidden mr-2 my-2">
              <Link href="/registration" passHref>
                <PrimaryButton>Регистрация</PrimaryButton>
              </Link>
            </div>

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

            <Link href="/registration">
              <a className="mb-4 sm:hidden block flex items-center">
                <span className="mr-2 text-lg">Регистрация</span>
                {arrow}
              </a>
            </Link>

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
