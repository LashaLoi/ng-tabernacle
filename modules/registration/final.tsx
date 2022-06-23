import Link from 'next/link'

import { motion } from 'framer-motion'

import { DefaultButton, PrimaryButton } from '../../components/buttons'

import { telegramIcon } from '../../components/icons'

interface FinalProps {
  handleReset: () => void
}

export default function Final({ handleReset }: FinalProps) {
  return (
    <motion.div
      key="final"
      initial={{ y: 50, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 50, opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2, type: 'tween' }}
    >
      <h1 className="sm:text-3xl text-lg font-bold text-gray-500 uppercase">
        Вы зарегестрировались на
      </h1>
      <h1 className="sm:text-3xl text-lg mb-6 font-bold text-gray-500 uppercase main-title">
        СКИНИЯ 2022
      </h1>
      <p className="text-gray-400 flex sm:flex-row flex-col">
        <span className="mr-2">Будьте в курсе новостей о школе</span>
        <a
          href="https://t.me/skiniaby"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer flex"
        >
          {telegramIcon} <span className="ml-2">https://t.me/skiniaby</span>
        </a>
      </p>

      <div className="flex flex-wrap sm:flex-row flex-col mt-6">
        <div className="mr-2">
          <Link href="/program" passHref>
            <PrimaryButton>Программа</PrimaryButton>
          </Link>
        </div>
        <div className="mr-2 sm:mt-0 mt-2">
          <Link href="/sponsor" passHref>
            <DefaultButton>Стать спонсором</DefaultButton>
          </Link>
        </div>
        <div className="sm:mt-0 mt-2">
          <DefaultButton onClick={handleReset}>Пройти заново</DefaultButton>
        </div>
      </div>
    </motion.div>
  )
}
