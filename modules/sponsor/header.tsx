import Link from 'next/link'
import Image from 'next/image'

import { Button, Tooltip } from 'antd'
import {
  ContactsOutlined,
  FileImageOutlined,
  HomeOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'

import logo from '../../public/logo.svg'

export default function RegistrationHeader() {
  return (
    <>
      {' '}
      <div className="gooey m-2 absolute" />
      <div className="absolute flex justify-center sm:w-[250px] w-full">
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
      <div className="absolute right-10 top-10 md:block hidden">
        <Link href="/" passHref>
          <Button type="text">Главная</Button>
        </Link>
        <Link href="/registration" passHref>
          <Button type="text">Регистрация</Button>
        </Link>
        <Link href="/program" passHref>
          <Button type="text">Программа</Button>
        </Link>
        <Link href="/about" passHref>
          <Button type="text">Контакты</Button>
        </Link>
        <Link href="/gallery" passHref>
          <Button type="text">Галерея</Button>
        </Link>
      </div>
      <div className="flex justify-between items-center absolute text-center w-full px-8 bottom-6 md:hidden block">
        <Link href="/" passHref>
          <Tooltip title="Главная">
            <Button shape="circle" icon={<HomeOutlined />} />
          </Tooltip>
        </Link>
        <Link href="/program" passHref>
          <Tooltip title="Программа">
            <Button shape="circle" icon={<UnorderedListOutlined />} />
          </Tooltip>
        </Link>
        <Link href="/about" passHref>
          <Tooltip title="Контакты">
            <Button shape="circle" icon={<ContactsOutlined />} />
          </Tooltip>
        </Link>
        <Link href="/gallery" passHref>
          <Tooltip title="Галерея">
            <Button shape="circle" icon={<FileImageOutlined />} />
          </Tooltip>
        </Link>
      </div>
    </>
  )
}
