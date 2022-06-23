import Image from 'next/image'
import logo from '../../public/skinia.svg'

import { useRouter } from 'next/router'
import { useCycle } from 'framer-motion'

import { arrow, menu } from '../../components/icons'
import { Links } from './links'
import { Menu } from './menu'
import { FadeIn } from '../fade-in'
import { useEffect, useState } from 'react'

const ignorePathnames = ['/']

const Header = () => {
  const [open, cycleOpen] = useCycle(false, true)
  const [close, setClose] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const escFn = (event: any) => {
      if (event.key === 'Escape') {
        cycleOpen()
      }
    }

    document.addEventListener('keydown', escFn, false)

    return () => {
      document.removeEventListener('keydown', escFn, false)
    }
  }, [])

  useEffect(() => {
    if (close) {
      cycleOpen()

      setClose(false)
    }
  }, [close])

  if (ignorePathnames.includes(router.pathname)) {
    return null
  }

  return (
    <>
      {!close && (
        <Menu
          open={open}
          handleClick={cycleOpen}
          handleClose={() => setClose(true)}
        />
      )}

      {!open && (
        <FadeIn delay={0.8}>
          <div className="fixed top-0 w-full z-50 h-20 backdrop-blur-md bg-white/30">
            <div className="flex justify-between w-full items-center px-10 h-full">
              <div
                className="w-[20px] rotate-180 text-gray-500 cursor-pointer"
                onClick={router.back}
              >
                {arrow}
              </div>

              <div className="invert">
                <Image src={logo.src} height={120} width={120} alt="logo" />
              </div>

              <div
                className="w-[20px] text-blue-900 cursor-pointer"
                onClick={() => cycleOpen()}
              >
                {menu}
              </div>
            </div>
          </div>
        </FadeIn>
      )}

      <Links />
    </>
  )
}

export default Header
