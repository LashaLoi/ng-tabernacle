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
              Если у вас есть какие-нибудь вопросы по школе задайте свой вопрос
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
        {/* <div>
          <section className="text-gray-700">
            <div className="container px-5 py-24 mx-auto">
              <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                  Frequently Asked Question
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                  The most common questions about how our business works and
                  what can do for you.
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
        </div> */}
      </section>
      <section className="text-gray-600 mb-20 body-font flex justify-center flex-col w-full items-center">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold">Контактные лица</h2>
        </div>

        <div className="p-4 max-w-md  sm:p-8">
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 min-w-[400px] sm:p-0 p-12"
            >
              <li className="py-3 sm:py-4 ">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/6.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate ">
                      Эстэра
                    </p>
                    <p className="text-sm text-gray-500 truncate ">
                      tg: @esthervoronenko
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    +375292265835
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/7.jpg"
                      alt="Bonnie image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate ">
                      Анна
                    </p>
                    <p className="text-sm text-gray-500 truncate ">
                      tg: @stenova
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    +375292061132
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

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
