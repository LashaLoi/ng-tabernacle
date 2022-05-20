import Header from '../components/header'

export default function Program() {
  return (
    <div className="absolute">
      <section className="sm:mt-[200px] mt-[250px]">
        <div className="sm:p-8 p-0">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-[320px] lg:w-1/3 mt-2 md:mt-12 px-8">
              <h1 className="tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl text-4xl">
                Программа
              </h1>
              <h1 className="mb-4 tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl text-4xl">
                <span className="block text-indigo-600 xl:inline main-title">
                  Скиния 2022
                </span>
              </h1>
              <p className="text-sm text-gray-400">
                Конференция будет проходить 4-5 дней и тут вы можете
                ознакомиться с ней подробнее
              </p>
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
                      <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                        Регистрация - 16:00
                      </p>
                      <p className="text-sm text-black leading-snug text-opacity-100">
                        Открытие: совместный ужин, общение, «открытая пультовая»
                        (совместная настройка аппаратуры), молитва и поклонение
                        - 17:00
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
                        10:10 - Семинар - Алексей Ледяев (онлайн)
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
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-[#c850c0]">21.07 (среда)</p>
                      <h4 className="mb-3 text-stone-800  font-bold text-lg md:text-2xl">
                        День 2
                      </h4>

                      <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                        09:00 - Молитва и Поклонение
                      </p>
                      <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                        10:00 - Перерыв
                      </p>
                      <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                        10:10 - Семинар - Алексей Ледяев (онлайн)
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

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-[#c850c0]">21.07 (среда)</p>
                      <h4 className="mb-3 text-stone-800  font-bold text-lg md:text-2xl">
                        День 3
                      </h4>

                      <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                        09:00 - Молитва и Поклонение
                      </p>
                      <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                        10:00 - Перерыв
                      </p>
                      <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                        10:10 - Семинар - Алексей Ледяев (онлайн)
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
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-[#c850c0]">21.07 (среда)</p>
                      <h4 className="mb-3 text-stone-800  font-bold text-lg md:text-2xl">
                        День 2
                      </h4>

                      <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                        09:00 - Молитва и Поклонение
                      </p>
                      <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                        10:00 - Перерыв
                      </p>
                      <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                        10:10 - Семинар - Алексей Ледяев (онлайн)
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
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-[#c850c0]">21.07 (среда)</p>
                      <h4 className="mb-3 text-stone-800  font-bold text-lg md:text-2xl">
                        День 3
                      </h4>

                      <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                        09:00 - Молитва и Поклонение
                      </p>
                      <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                        10:00 - Перерыв
                      </p>
                      <p className="text-sm text-black leading-snug text-opacity-100 mb-2">
                        10:10 - Семинар - Алексей Ледяев (онлайн)
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
                </div>
                <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Header />
    </div>
  )
}
