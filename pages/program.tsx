import Header from '../components/header'
import { FadeIn } from '../components/fade-in'
import { motion } from 'framer-motion'
import { defaultVariants } from './index'

export default function Program() {
  return (
    <motion.div
      key="program"
      variants={defaultVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="absolute sm:overflow-x-visible overflow-x-hidden"
    >
      <Header />

      <div className="sm:p-8 p-0 ">
        <div className="w-full mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-[320px] lg:w-1/3 mt-2 md:mt-12 sm:px-20 px-10">
            <h1 className="tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl text-4xl">
              Программа
            </h1>
            <h1 className="mb-4 tracking-tight font-extrabold sm:text-3xl md:text-4xl text-4xl">
              <span className="block text-indigo-600 xl:inline main-title">
                Скиния 2022
              </span>
            </h1>
            <p className="text-gray-600 mb-2">
              Господу Богу твоему поклоняйся и Ему одному служи
            </p>
            <p className="text-gray-400">Матфея 4:10</p>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="absolute w-[4px] bg-gradient-to-b from-[#c850c0] to-[#ffcc70] h-full sm:block hidden"
                  style={{
                    right: '50%',
                    borderRadius: '10%',
                  }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 sm:w-5/12"></div>
                  <div className="order-1 sm:w-5/12 sm:px-1 py-4 sm:text-right">
                    <p className="mb-3 text-[#c850c0]">20.07 (вторник)</p>
                    <h4 className="mb-3 text-stone-800 font-bold text-lg md:text-2xl">
                      Регистрация
                    </h4>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      <span>Регистрация</span> <span className="mx-1">-</span>{' '}
                      <span>16:00</span>
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 flex justify-end flex-row-reverse sm:block">
                      <span>
                        Открытие: совместный ужин, общение, «открытая пультовая»
                        (совместная настройка аппаратуры), молитва и поклонение
                      </span>
                      <span className="mx-1">-</span> <span>17:00</span>
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between sm:flex-row flex-row-reverse items-center w-full right-timeline">
                  <div className="order-1 sm:w-5/12"></div>
                  <div className="order-1 sm:w-5/12 sm:px-1 py-4 text-left">
                    <p className="mb-3 text-[#c850c0]">21.07 (среда)</p>
                    <h4 className="mb-3 text-stone-800  font-bold text-lg md:text-2xl">
                      День 1
                    </h4>

                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                      09:00 - Молитва и Поклонение
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                      10:00 - Перерыв
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                      10:10 - Семинар - ?
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                      11:00 - Перерыв
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                      11:10 - Семинар
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                      12:00 - Обед
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                      14:00 - Семинар
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                      15:30 - Перерыв
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                      16:00 - Обратная связь
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                      17:00 - Ужин
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                      18:30 - Вечер Хвалы и Поклонения
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between sm:flex-row-reverse flex-row items-center w-full left-timeline">
                  <div className="order-1 sm:w-5/12 sm:block hidden"></div>
                  <div className="order-1 sm:w-5/12 px-1 py-4 sm:text-right text-left">
                    <p className="mb-3 text-[#c850c0]">22.07 (четверг)</p>
                    <h4 className="mb-3 text-stone-800 font-bold text-lg md:text-2xl">
                      День 2
                    </h4>

                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      Молитва и Поклонение <span className="mx-1">-</span> 09:00
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      Перерыв <span className="mx-1">-</span> 10:00
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      Семинар <span className="mx-1">-</span> 10:10
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      Перерыв <span className="mx-1">-</span> 11:00
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      ? <span className="mx-1">-</span> 11:10
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      Обед <span className="mx-1">-</span> 12:00
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      Мастер-класс (Аранжировка) <span className="mx-1">-</span>{' '}
                      14:00
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      Перерыв <span className="mx-1">-</span> 15:30
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      Танцевальный мастер-класс <span className="mx-1">-</span>{' '}
                      16:00
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      Ужин <span className="mx-1">-</span> 17:00
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      Вечер Хвалы и Поклонения <span className="mx-1">-</span>{' '}
                      18:30
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between sm:flex-row flex-row-reverse items-center w-full right-timeline">
                  <div className="order-1 sm:w-5/12"></div>
                  <div className="order-1 sm:w-5/12 sm:px-1 py-4 text-left">
                    <p className="mb-3 text-[#c850c0]">23.07 (пятница)</p>
                    <h4 className="mb-3 text-stone-800  font-bold text-lg md:text-2xl">
                      День 3
                    </h4>

                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      09:00 - Молитва и Поклонение
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      10:00 - Перерыв
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      10:10 - Семинар
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      11:00 - Перерыв
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      11:10 - Семинар
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      12:00 - Обед
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      14:00 - Творческая лаборатория
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2 flex justify-end flex-row-reverse sm:block">
                      15:30 - Перерыв
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                      16:00 - Вопросы и ответы
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                      17:00 - Ужин
                    </p>
                    <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                      18:30 - Вечер Хвалы и Поклонения, Закрытие
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
