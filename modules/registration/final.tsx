import Link from 'next/link'

import { motion } from 'framer-motion'
import {
  DefaultButton,
  LinkButton,
  PrimaryButton,
} from '../../components/buttons'

interface FinalProps {
  handleReset: () => void
  price: number
}

export default function Final({ handleReset, price }: FinalProps) {
  return (
    <motion.div
      key="final"
      initial={{ y: 50, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 50, opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2, type: 'tween' }}
      className="relative lg:max-w-3xl md:max-w-2xl sm:p-16 p-8 mx-auto flex flex-col justify-center"
    >
      <h1 className="tracking-tight font-extrabold sm:text-3xl text-2xl">
        <span className="block xl:inline">Вы зарегистрированы на</span>{' '}
        <span className="block text-indigo-600 xl:inline main-title">
          Скиния 2022
        </span>
      </h1>
      <p className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
        Поздравляем вас с успешной регистрацией на Скинию 2022! Предлагаем вам
        ознакомиться с программой или зарегистрировать вашего друга.
      </p>
      <div className="mt-2 text-lg">
        <p>
          Стоимость пакета: <span className="text-gray-500">{price} BYN</span>
        </p>
      </div>

      <div className="flex flex-wrap sm:flex-row flex-col mt-6 mb-20">
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
