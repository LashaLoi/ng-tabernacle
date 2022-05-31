import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/skinia.svg'
import { useRouter } from 'next/router'
import { LinkButton } from './buttons'

import {
  facebookIcon,
  instagramIcon,
  telegramIcon,
  vkIcon,
  youtubeIcon,
} from '../modules/home'

const infoIcon = (
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
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const galleryIcon = (
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
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const homeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
)

const userIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const moneyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

const listIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    />
  </svg>
)

const contactIcon = (
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
      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
    />
  </svg>
)

const routes = [
  {
    title: 'Главная',
    route: '/',
    icon: homeIcon,
  },
  {
    title: 'О школе',
    route: '/about',
    icon: infoIcon,
  },
  { title: 'Регистрация', route: '/registration', icon: userIcon },
  {
    title: 'Стать спонсором',
    route: '/sponsor',
    icon: moneyIcon,
  },
  { title: 'Программа', route: '/program', icon: listIcon },
  { title: 'Контакты', route: '/contacts', icon: contactIcon },
  // { title: 'Галерея', route: '/gallery', icon: galleryIcon },
]

export default function Header() {
  const router = useRouter()

  return (
    <>
      <div className="gooey m-2 absolute top-0" />
      <div className="flex justify-center sm:w-[250px] w-full top-0">
        <Link href="/">
          <span className="cursor-pointer">
            <Image
              src={logo.src}
              alt="logo"
              height={250}
              width={250}
              priority
            />
          </span>
        </Link>
      </div>
      <div className="absolute ml-[550px] right-10 top-10 md:block hidden flex">
        {routes.map(({ route, title }) => (
          <Link href={route} passHref key={title}>
            <LinkButton
              style={{
                color: router.pathname === route ? '#ffcc70' : undefined,
              }}
            >
              {title}
            </LinkButton>
          </Link>
        ))}
      </div>

      <svg
        className="fixed bottom-0 z-20 md:hidden block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 320"
        style={{ left: 0, bottom: 0 }}
      >
        <path
          fill="#f8fafc"
          d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <div className="flex justify-between items-center fixed text-center w-full bottom-0 md:hidden block z-30">
        {routes.map(({ route, title, icon }) => (
          <Link href={route} passHref key={title}>
            <LinkButton
              style={{
                color: router.pathname === route ? '#ffcc70' : undefined,
              }}
            >
              {icon}
            </LinkButton>
          </Link>
        ))}
      </div>

      <div className="fixed left-10 bottom-10 md:flex hidden z-30">
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
    </>
  )
}
