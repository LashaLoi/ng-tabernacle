import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import router from 'next/router'
import { closeIcon } from '../icons'

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
}

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
}

const routes = [
  {
    title: 'Главная',
    route: '/',
  },
  {
    title: 'О школе',
    route: '/about',
  },
  { title: 'Регистрация', route: '/registration' },
  {
    title: 'Стать спонсором',
    route: '/sponsor',
  },
  { title: 'Программа', route: '/program' },
  { title: 'Контакты', route: '/contacts' },
  // { title: 'Галерея', route: '/gallery },
]

export const Menu = ({
  open,
  handleClick,
  handleClose,
}: {
  open: boolean
  handleClick: () => void
  handleClose: () => void
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{
            width: '100%',
          }}
          exit={{
            width: 0,
            transition: { delay: 1, duration: 0.5 },
          }}
          className="z-50 fixed h-screen backdrop-blur-md bg-black/40 "
        >
          <>
            <div
              className="absolute right-8 top-8 text-white cursor-pointer"
              onClick={handleClick}
            >
              {closeIcon}
            </div>
            <motion.div
              className="fixed text-white flex flex-col mt-20"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {routes.map(({ route, title }) => {
                const isActive = route === router.pathname

                return (
                  <Link href={route} passHref key={title}>
                    <motion.a
                      onClick={handleClose}
                      whileHover={{ x: 20 }}
                      variants={itemVariants}
                      className={`sm:ml-20 ml-10 sm:text-3xl text-lg mb-10 font-bold uppercase hover:underline ${
                        isActive ? 'text-yellow-100 line-through' : ''
                      }`}
                    >
                      {title}
                    </motion.a>
                  </Link>
                )
              })}
            </motion.div>
          </>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
