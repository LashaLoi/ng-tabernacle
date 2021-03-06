import { useCallback, useReducer } from 'react'
import { PrimaryButton } from '../../components/buttons'
import { Input } from '../../components/input'
import { useTimeoutShow } from '../../hooks/useTimeoutShow'
import { sendFeedback } from './api'
import { ContactNotification } from './notification'

interface State {
  name: string
  email: string
  message: string
}

type Action =
  | {
      name: string
    }
  | { email: string }
  | { message: string }

const defaultValues = {
  name: '',
  email: '',
  message: '',
}

export function ContactUsSection() {
  const [showNotification, setShowNotification] = useTimeoutShow(4000)
  const [state, setState] = useReducer(
    (prevState: State, nextState: Action) => ({ ...prevState, ...nextState }),
    defaultValues
  )
  const { name, email, message } = state

  const handleChange = useCallback(
    ({
      target: { name, value },
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setState({ [name]: value } as Action)
    },
    []
  )

  const handleSubmit = useCallback(() => {
    setShowNotification(true)
    setState(defaultValues)

    return sendFeedback(state)
  }, [state])

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Обратная связь
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Напишите что вам не хватает или что можно улучшить на сайте
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Имя
                </label>
                <Input
                  value={name}
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Электронная почта
                </label>
                <Input
                  value={email}
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Сообщение
                </label>
                <textarea
                  value={message}
                  id="message"
                  name="message"
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full flex justify-center">
              <PrimaryButton onClick={handleSubmit}>Отправить</PrimaryButton>
            </div>
          </div>
        </div>
      </div>

      <ContactNotification show={showNotification} />
    </section>
  )
}
