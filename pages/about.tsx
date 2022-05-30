import Header from '../components/header'
import { useCallback, useEffect, useState } from 'react'
import { addQuestion } from '../modules/about/utils'

import { PrimaryButton } from '../components/buttons'
import { Input } from '../components/input'
import { AnimatePresence, motion } from 'framer-motion'

export default function About() {
  const [fullName, setFullName] = useState('')
  const [message, setMessage] = useState('')
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (showNotification) {
      timeoutId = setTimeout(() => setShowNotification(false), 4000)
    }

    return () => clearTimeout(timeoutId)
  }, [showNotification])

  const handleSubmit = useCallback(() => {
    setFullName('')
    setMessage('')
    setShowNotification(true)

    return addQuestion({
      fullName,
      message,
    })
  }, [fullName, message, setMessage])

  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />

      <section className="text-gray-600 body-font relative">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold mb-2">Где мы находимся</h2>
          <p>Смоленская 28 - Барановичи - Беларусь</p>
        </div>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 w-full sm:h-[500px] h-[400px] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.9171224462784!2d26.026471415711562!3d53.12963329862263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d8cfe1a9c1c715%3A0x2844f8b8b22c6888!2sUlitsa%20Smolenskaya%2028%2C%20Baranavi%C4%8Dy%2C%20Belarus!5e0!3m2!1sen!2sus!4v1653587038964!5m2!1sen!2sus"
            ></iframe>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Задайте вопрос
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Если у вас есть какие-нибудь вопросы по конференции задайте свой
              вопрос
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Электронная почта
              </label>
              <Input
                value={fullName}
                onChange={({ target: { value } }) => setFullName(value)}
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Вопрос
              </label>
              <textarea
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <PrimaryButton
              disabled={!fullName || !message}
              onClick={handleSubmit}
            >
              Отправить
            </PrimaryButton>
          </div>
        </div>
      </section>
      <div>
        <section className="text-gray-700">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How Long is this site live?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Can I install/upload anything I want on there?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How can I migrate to another site?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Can I change the domain you give me?
                  </summary>

                  <span className="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How many sites I can create at once?
                  </summary>

                  <span className="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How can I communicate with you?
                  </summary>

                  <span className="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="text-gray-600 body-font">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold">Основные направления</h2>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 w-full">
              <div className=" h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Категория
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-10">
                  ВАЖНЫЕ ТЕМЫ
                </h1>

                <p className="leading-relaxed mb-2">
                  - истоки и природа поклонения
                </p>
                <p className="leading-relaxed mb-2">
                  - восстановление скинии Давида
                </p>
                <p className="leading-relaxed mb-2">
                  - рождение мелодий и песен
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 w-full">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Категория
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-10">
                  МАСТЕР-КЛАССЫ
                </h1>
                <p className="leading-relaxed mb-2">
                  - открытая пультовая/звукорежиссура
                </p>
                <p className="leading-relaxed mb-2">- аранжировка</p>
                <p className="leading-relaxed mb-2">- танец как поклонение</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 w-full">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Категория
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  ВЕЧЕРА ХВАЛЫ И ПОКЛОНЕНИЯ
                </h1>
                <p className="leading-relaxed mb-3">
                  В этом году мы меняем формат вечеров для того, чтобы больше и
                  больше погружаться в глубины Божьи! Это особенные вечера
                  атмосферы открытых небес и движения Духа Святого!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-12">Приглашенные спикеры</h2>

          <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
            <div className="mb-6 lg:mb-0">
              <div className="bg-white block rounded-lg shadow-lg">
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    className="w-full rounded-t-lg"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                  </a>
                  <svg
                    className="absolute"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    style={{ left: 0, bottom: 0 }}
                  >
                    <path
                      fill="#fff"
                      d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold mb-4">Maria Smith</h5>
                  <p className="text-gray-500 mb-4">Frontend Developer</p>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="bg-white block rounded-lg shadow-lg">
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    className="w-full rounded-t-lg"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                  </a>
                  <svg
                    className="absolute"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    style={{ left: 0, bottom: 0 }}
                  >
                    <path
                      fill="#fff"
                      d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold mb-4">Darren Randolph</h5>
                  <p className="text-gray-500 mb-4">Marketing expert</p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="bg-white block rounded-lg shadow-lg">
                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                    className="w-full rounded-t-lg"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                  </a>
                  <svg
                    className="absolute"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    style={{ left: 0, bottom: 0 }}
                  >
                    <path
                      fill="#fff"
                      d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold mb-4">Ayat Black</h5>
                  <p className="text-gray-500 mb-4">Web designer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font mb-32">
          <div className="container px-5  mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90&apos;s cronut +1 kinfolk. Single-origin
                coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar
                cronut adaptogen squid fanny pack vaporware. Man bun next level
                coloring book skateboard four loko knausgaard. Kitsch keffiyeh
                master cleanse direct trade indigo juice before they sold out
                gentrify plaid gastropub normcore XOXO 90&apos;s pickled cindigo
                jean shorts. Slow-carb next level shoindigoitch ethical
                authentic, yr scenester sriracha forage franzen organic drinking
                vinegar.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font flex justify-center flex-col w-full items-center">
          <div className="w-full text-center">
            <h2 className="text-3xl font-bold">Контактные лица</h2>
          </div>

          <div className="p-4 max-w-md  sm:p-8">
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 min-w-[400px] sm:p-0 p-8"
              >
                <li className="py-3 sm:py-4 ">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Эстэра Вороненко
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        tg: email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                      +375 33 123 45 67
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Анна Захаренко
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        tg: email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                      +375 33 123 45 67
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <AnimatePresence initial={false}>
        {showNotification && (
          <motion.div
            className="sm:block hidden bg-gray-100 flex justify-center items-center px-6 py-4 fixed right-4 bottom-4 shadow-lg rounded"
            initial={{ opacity: 0, x: 100, scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              delay: 0.7,
            }}
          >
            <p className="text-lg">Ваш вопрос отправлен!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
