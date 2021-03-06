import Link from 'next/link'

import { motion } from 'framer-motion'
import {
  DefaultButton,
  LinkButton,
  PrimaryButton,
} from '../../components/buttons'

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
      className="relative lg:max-w-3xl md:max-w-2xl sm:p-16 p-8 mx-auto flex flex-col justify-center"
    >
      <p className="tracking-tight font-bold text-gray-600 sm:text-3xl text-2xl sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0 mb-2">
        Вы стали спонсором на{' '}
        <span className="block text-indigo-600 xl:inline main-title">
          СКИНИЯ 2022!
        </span>
      </p>
      <p className="text-gray-400 flex mb-4 sm:flex-row flex-col">
        Спасибо большое что решили стать спонсором на скинии!
      </p>

      <div className="flex flex-wrap sm:flex-row flex-col mt-6 mb-10">
        <div className="mr-2">
          <Link href="/program" passHref>
            <PrimaryButton>Программа</PrimaryButton>
          </Link>
        </div>
        <div className="mr-2 sm:mt-0 mt-2">
          <Link href="/registration" passHref>
            <DefaultButton type="dashed">Регистрация</DefaultButton>
          </Link>
        </div>
        <div className="sm:mt-0 mt-2">
          <DefaultButton onClick={handleReset}>Пройти заново</DefaultButton>
        </div>
      </div>
    </motion.div>
  )
}
