import { useCallback, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Finish, useLS, useStep, useValue } from './hooks'

import Header from '../../components/header'
import { Input } from '../../components/input'
import Steps from '../../components/steps'
import Final from './final'

import { createAnimation, register } from './utils'
import { questions } from './constants'
import { Progress } from '../../components/progress'
import { FadeIn } from '../../components/fade-in'
import { RegistrationModal } from './modal'
import { useTimeoutShow } from '../../hooks/useTimeoutShow'

export const quizAnimation = createAnimation(50)
export const stepAnimation = createAnimation(10)

export type State = {
  [key in number]: { value: string; ignored?: boolean }
}

const defaultPrice = 120

export default function Registration() {
  const state = useRef<State>({})

  const [price, setPrice] = useState(defaultPrice)
  const [showNotification, setShowNotification] = useTimeoutShow(4000)
  const [showModal, setShowModal] = useState(false)

  const [step, incrementStep, decrementStep, setStep] = useStep()
  const currentQuestion = useMemo(() => questions[step], [step])

  const [isFinished, setIsFinished] = useLS('finished')
  const [value, handleChange, setValue] = useValue()

  const handleFinish = useCallback(() => {
    setShowModal(true)

    return register(state.current)
  }, [])

  const handleIncrement = useCallback(async () => {
    state.current[step] = { value }

    const nextQuestion = questions[step + 1]

    // ignore logic
    if (nextQuestion?.depend && nextQuestion.value !== value) {
      state.current[step + 1] = { value: '', ignored: true }

      incrementStep(2)

      setValue(state.current[step + 2]?.value ?? '')

      return
    }

    // price logic
    if (currentQuestion.price && currentQuestion.value !== value) {
      setPrice(price + 20)
    }

    // last question logic
    if (!nextQuestion) {
      handleFinish()

      return
    }

    incrementStep()

    setValue(state.current[step + 1]?.value ?? '')
  }, [step, value, currentQuestion])

  const handleDecrement = useCallback(() => {
    let prevQuestion = state.current[step - 1]

    // ignore logic
    if (prevQuestion.ignored) {
      prevQuestion = state.current[step - 2]

      decrementStep()
    }

    decrementStep()

    setValue(prevQuestion.value)
  }, [step])

  const handleReset = useCallback(() => {
    state.current = {}

    setValue('')
    setStep(0)
    setPrice(defaultPrice)

    setIsFinished(Finish.No)
  }, [])

  const handleModalClose = useCallback(() => {
    setShowModal(false)
    setShowNotification(true)
    setIsFinished(Finish.Yes)
  }, [])

  const isFinal = useMemo(
    () => !currentQuestion || isFinished === Finish.Yes,
    [currentQuestion, isFinished]
  )

  const percent = useMemo(
    () => Math.round((100 * step) / questions.length),
    [step]
  )

  const loading = useMemo(() => isFinished === null, [isFinished])

  return (
    <div className="h-screen relative overflow-x-hidden">
      <Header />

      {!loading && (
        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {isFinal ? (
            <Final handleReset={handleReset} price={price} />
          ) : (
            <motion.div
              key="quiz"
              className="max-w-2xl sm:px-16 px-8 mx-auto flex flex-col justify-center"
              {...quizAnimation}
            >
              <h1 className="mb-2 tracking-tight font-extrabold sm:text-3xl text-2xl">
                <span className="block xl:inline">Регистрация</span>{' '}
                <span className="block text-indigo-600 xl:inline main-title">
                  Скиния 2022
                </span>
              </h1>
              <AnimatePresence initial={false} exitBeforeEnter={true}>
                <motion.div key={step} {...stepAnimation}>
                  <div className="mb-2">
                    <p className="text-gray-500 text-lg">
                      {currentQuestion.label}
                    </p>
                  </div>
                  {currentQuestion.description && (
                    <div className="mb-2">
                      <p className="text-gray-500 text-sm">
                        {currentQuestion.description}
                      </p>
                    </div>
                  )}
                  {currentQuestion.component === 'select' ? (
                    <>
                      {currentQuestion.options!.map((option) => (
                        <label
                          key={option}
                          className="flex justify-start items-start  my-4"
                        >
                          <div className="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-900">
                            <input
                              checked={value === option}
                              type="checkbox"
                              className="opacity-0 absolute"
                              onChange={() =>
                                handleChange({ target: { value: option } })
                              }
                            />
                            <AnimatePresence exitBeforeEnter>
                              {value === option && (
                                <motion.div
                                  key={option}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                >
                                  <FadeIn delay={0.1}>
                                    <svg
                                      className={`fill-current ${
                                        value === option ? 'block' : 'hidden'
                                      } w-4 h-4 text-blue-900 pointer-events-none`}
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                    </svg>
                                  </FadeIn>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <div className="select-none">{option}</div>
                        </label>
                      ))}
                    </>
                  ) : (
                    <Input
                      className="rounded form-control block w-full px-3 py-1.5 text-base font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-900 focus:outline-none"
                      onChange={handleChange}
                      value={value}
                      autoFocus
                      placeholder={currentQuestion.placeholder}
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-4">
                <Progress percent={percent} />
              </div>

              <div className="my-2 text-gray-700 text-lg">
                <p>
                  Стоимость пакета:{' '}
                  <span className="text-gray-500">{price} BYN</span>
                </p>
              </div>

              <Steps
                questionsLength={questions.length - 1}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                optional={!!currentQuestion.optional}
                value={value}
                step={step}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <AnimatePresence initial={false}>
        {showNotification && (
          <motion.div
            className="sm:flex hidden bg-gray-100 justify-center items-center px-6 py-4 fixed right-4 bottom-4 shadow-lg rounded"
            initial={{ opacity: 0, x: 100, scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              delay: 0.7,
            }}
          >
            <p className="text-lg">Вы успешно зарегестрировались!</p>
          </motion.div>
        )}
      </AnimatePresence>

      <RegistrationModal show={showModal} onClose={handleModalClose} />
    </div>
  )
}
