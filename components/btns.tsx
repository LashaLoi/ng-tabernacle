import Link from 'next/link'

export const Btns = () => (
  <>
    {' '}
    {/*<motion.div*/}
    {/*  initial="init"*/}
    {/*  animate="out"*/}
    {/*  variants={{*/}
    {/*    init: {*/}
    {/*      width: 0,*/}
    {/*    },*/}
    {/*    out: {*/}
    {/*      width: 200,*/}
    {/*    },*/}
    {/*  }}*/}
    {/*  transition={{*/}
    {/*    delay: 0.5,*/}
    {/*  }}*/}
    {/*  className="h-[1px] bg-gradient-to-r from-[#c850c0] to-blue-500 mb-14"*/}
    {/*/>*/}
    <div className="flex sm:flex-row flex-col">
      <Link href="/registration">
        <a className="sm:w-[130px] w-[200px] text-white bg-gradient-to-br from-purple-600 to-blue-500  hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium text-sm sm:py-2 py-1 text-center mx-2 mb-4">
          Регистрация
        </a>
      </Link>
      <Link href="/program">
        <a className="sm:w-[130px] w-[200px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm sm:py-2 py-1 text-center mx-2 mb-4">
          Программа
        </a>
      </Link>
      <Link href="/about">
        <a className="sm:w-[130px] w-[200px] text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium text-sm sm:py-2 py-1 text-center mx-2 mb-4">
          Контакты
        </a>
      </Link>
      <Link href="/gallery">
        <a className="sm:w-[130px] w-[200px] text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-1 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm sm:py-2 py-1 text-center mx-2 mb-4">
          Галерея
        </a>
      </Link>
    </div>
  </>
)
