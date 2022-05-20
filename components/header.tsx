import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.svg'
import { Button, Tooltip } from 'antd'
import {
  ContactsOutlined,
  DollarCircleOutlined,
  FacebookOutlined,
  HomeOutlined,
  InstagramOutlined,
  UnorderedListOutlined,
  YoutubeOutlined,
} from '@ant-design/icons'
import { useRouter } from 'next/router'

const routes = [
  {
    title: 'Главная',
    route: '/',
    icon: <HomeOutlined />,
  },
  { title: 'Регистрация', route: '/registration', icon: <ContactsOutlined /> },
  {
    title: 'Стать спонсором',
    route: '/sponsor',
    icon: <DollarCircleOutlined />,
  },
  { title: 'Программа', route: '/program', icon: <UnorderedListOutlined /> },
]

export default function Header() {
  const router = useRouter()

  return (
    <>
      <div className="gooey m-2 fixed top-0" />
      <div className="fixed flex justify-center sm:w-[250px] w-full top-0">
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
      <div className="fixed right-10 top-10 md:block hidden">
        {routes.map(({ route, title }) => (
          <Link href={route} passHref key={title}>
            <Button
              type="text"
              style={{
                color: router.pathname === route ? '#ffcc70' : undefined,
              }}
            >
              {title}
            </Button>
          </Link>
        ))}
      </div>
      <div className="flex justify-between items-center fixed text-center w-full px-8 bottom-6 md:hidden block">
        {routes.map(({ route, title, icon }) => (
          <Link href={route} passHref key={title}>
            <Tooltip title={title}>
              <Button
                shape="circle"
                icon={icon}
                style={{
                  color: router.pathname === route ? '#ffcc70' : undefined,
                }}
              />
            </Tooltip>
          </Link>
        ))}
      </div>

      <div className="fixed left-10 bottom-10 md:flex hidden">
        <div className="mr-4 cursor-pointer">
          <InstagramOutlined style={{ fontSize: '20px' }} />
        </div>
        <div className="mr-4 cursor-pointer">
          <FacebookOutlined style={{ fontSize: '20px' }} />
        </div>
        <div className="mr-4 cursor-pointer">
          <YoutubeOutlined style={{ fontSize: '20px' }} />
        </div>
      </div>
    </>
  )
}
