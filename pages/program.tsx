import Head from 'next/head'

import Header from '../components/header'
import PageWrapper from '../components/page-wrapper'

export default function Program() {
  return (
    <PageWrapper itemKey="program">
      <Head>
        <title>Программа</title>
      </Head>
      <div className="absolute sm:overflow-x-visible overflow-x-hidden w-full pt-32">
        <div className="flex flex-col w-full text-center mt-2 md:mt-12 sm:px-20 px-10 mb-20">
          <h1 className="tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl text-4xl">
            Программа
          </h1>
          <h1 className="mb-4 tracking-tight font-extrabold sm:text-3xl md:text-4xl text-4xl">
            <span className="block xl:inline main-title">Скиния 2022</span>
          </h1>
          <p className="text-gray-600 mb-2">
            Господу Богу твоему поклоняйся и Ему одному служи
          </p>
          <p className="text-gray-400">Матфея 4:10</p>
        </div>
        <div className="container w-full mx-auto flex justify-center items-center mb-20">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
            <div className="flex flex-row-reverse md:contents">
              <div className="sm:bg-gray-100 bg-none text-black col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto sm:shadow-md shadow-none max-w-[400px]">
                <h3 className="font-semibold text-lg mb-4 text-blue-900">
                  25.07 - понедельник
                </h3>
                <p className="leading-tight mb-2">
                  16:00 - <b>Открытая пультовая</b>
                </p>
                <p className="leading-tight  mb-2">
                  18:00 -{' '}
                  <b>
                    Открытие: совместный ужин, общение, молитва и поклонение
                  </b>
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10 hidden sm:block">
                <div className="h-full w-6 flex items-center justify-center sm">
                  <div className="h-full w-1 bg-blue-900 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-900 shadow"></div>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative hidden sm:block">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-900 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-900 shadow"></div>
              </div>
              <div className="sm:bg-gray-100 bg-none text-black col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto sm:shadow-md shadow-none max-w-[400px]">
                <h3 className="font-semibold text-lg mb-4 text-blue-900">
                  26.07 - вторник
                </h3>
                <p className="leading-tight  mb-2 ">
                  10:00 - <b>Молитва и Поклонение</b>
                </p>
                <p className="leading-tight  mb-2">11:00 - Перерыв</p>
                <p className="leading-tight  mb-2">
                  11:15 - <b>Семинар | Человек - жилище Бога</b>
                </p>
                <p className="leading-tight  mb-2">12:15 - Перерыв</p>
                <p className="leading-tight  mb-2">
                  12:30 - <b>Семинар | Истоки поклонения</b>
                </p>
                <p className="leading-tight  mb-2">13:30 - Обед</p>
                <p className="leading-tight  mb-2">
                  14:30 - <b>Мастер-класс | Звук</b>
                </p>
                <p className="leading-tight  mb-2">16:00 - Перерыв</p>
                <p className="leading-tight  mb-2">
                  16:30 -{' '}
                  <b>
                    Мастер-класс | Современная композиция, белорусская культура
                  </b>
                </p>
                <p className="leading-tight  mb-2">18:00 - Ужин</p>
                <p className="leading-tight  mb-2">
                  19:30 - <b>Вечер хвалы и поклонения</b>
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse md:contents">
              <div className="sm:bg-gray-100 bg-none text-black col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto sm:shadow-md shadow-none max-w-[400px]">
                <h3 className="font-semibold text-lg mb-3 text-blue-900">
                  27.07 - среда
                </h3>
                <p className="leading-tight  mb-2">
                  10:00 - <b>Молитва и Поклонение</b>
                </p>
                <p className="leading-tight  mb-2">11:00 - Перерыв</p>
                <p className="leading-tight  mb-2">
                  11:15 - <b>Семинар | Дары Духа Святого</b>
                </p>
                <p className="leading-tight  mb-2">12:15 - Перерыв</p>
                <p className="leading-tight  mb-2">
                  12:30 - <b>Семинар | Скиния</b>
                </p>
                <p className="leading-tight  mb-2">13:30 - Обед</p>
                <p className="leading-tight  mb-2">
                  14:30 - <b>Занятие по риторике</b>
                </p>
                <p className="leading-tight  mb-2">16:00 - Перерыв</p>
                <p className="leading-tight  mb-2">
                  16:30 - <b>Танцевальный мастер-класс</b>
                </p>
                <p className="leading-tight  mb-2">18:00 - Ужин</p>
                <p className="leading-tight  mb-2">
                  19:30 - <b>Израильский вечер</b>
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10 hidden sm:block">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-900 shadow"></div>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative hidden sm:block">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-900 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-900 shadow"></div>
              </div>
              <div className="sm:bg-gray-100 bg-none text-black col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto sm:shadow-md shadow-none max-w-[400px]">
                <h3 className="font-semibold text-lg mb-4 text-blue-900">
                  28.07 - четверг
                </h3>
                <p className="leading-tight  mb-2">
                  10:00 - <b>Молитва и Поклонение</b>
                </p>
                <p className="leading-tight  mb-2">11:00 - Перерыв</p>
                <p className="leading-tight  mb-2">
                  11:15 - <b>Семинар | Песть пустыни</b>
                </p>
                <p className="leading-tight  mb-2">12:15 - Перерыв</p>
                <p className="leading-tight  mb-2">
                  12:30 - <b>Семинар | Рефлекс поклонения</b>
                </p>
                <p className="leading-tight  mb-2">13:30 - Обед</p>
                <p className="leading-tight  mb-2">
                  14:30 - <b>Творческая лаборатория</b>
                </p>
                <p className="leading-tight  mb-2">16:00 - Перерыв</p>
                <p className="leading-tight  mb-2">
                  16:30 - <b>Творческая лаборатория</b>
                </p>
                <p className="leading-tight  mb-2">18:00 - Ужин</p>
                <p className="leading-tight  mb-2">
                  19:30 - <b>Шоу талантов &quot;Твое время&quot;</b>
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse md:contents">
              <div className="sm:bg-gray-100 bg-none text-black col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto sm:shadow-md shadow-none max-w-[400px]">
                <h3 className="font-semibold text-lg mb-3 text-blue-900">
                  29.07 - пятница
                </h3>
                <p className="leading-tight  mb-2">
                  10:00 -{' '}
                  <b>Молитвенное служение, молитва за участников школы</b>
                </p>
                <p className="leading-tight  mb-2">12:15 - Перерыв</p>
                <p className="leading-tight  mb-2">
                  12:30 - <b>Личные встречи с педагогами</b>
                </p>
                <p className="leading-tight  mb-2">13:30 - Обед</p>
                <p className="leading-tight  mb-2">
                  14:30 - <b>Мастер-класс | Написание песен</b>
                </p>
                <p className="leading-tight  mb-2">16:00 - Перерыв</p>
                <p className="leading-tight  mb-2">
                  16:30 - <b>Ответы на вопросы</b>
                </p>
                <p className="leading-tight  mb-2">18:00 - Ужин</p>
                <p className="leading-tight  mb-2">
                  19:30 -{' '}
                  <b>
                    Евангелизационное служение, хвала поклонение, молитва за
                    исцеление
                  </b>
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10 hidden sm:block">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-900 shadow"></div>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative hidden sm:block">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-900 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-900 shadow"></div>
              </div>
              <div className="sm:bg-gray-100 bg-none text-black col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto sm:shadow-md shadow-none max-w-[400px]">
                <h3 className="font-semibold text-lg mb-4 text-blue-900">
                  30.07 - суббота
                </h3>
                <p className="leading-tight  mb-2">
                  10:00 - <b>Молитвенный завтрак, обратная связь</b>
                </p>
                <p className="leading-tight  mb-2">
                  13:00 - <b>До встречи на СКИНИИ 2023!</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
