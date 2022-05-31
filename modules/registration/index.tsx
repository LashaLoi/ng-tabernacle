import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Select from 'react-select'

import { Modal } from '../../components/modal'

import { Finish, useLocalStorage, useLS, useStep, useValue } from './hooks'

import Header from '../../components/header'
import { Input } from '../../components/input'
import Steps from '../../components/steps'
import Final from './final'

import { createAnimation, register } from './utils'
import { questions } from './constants'
import { Progress } from '../../components/progress'
import { PrimaryButton } from '../../components/buttons'

export const quizAnimation = createAnimation(50)
export const stepAnimation = createAnimation(10)

export type State = {
  [key in number]: { value: string; ignored?: boolean }
}

export default function Registration() {
  const state = useRef<State>({})
  const [price, setPrice] = useLocalStorage('priced', 120)
  const [showNotification, setShowNotification] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [show, setShow] = useState(true)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (showNotification) {
      timeoutId = setTimeout(() => setShowNotification(false), 4000)
    }

    return () => clearTimeout(timeoutId)
  }, [showNotification])

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

    if (nextQuestion?.depend && nextQuestion.value !== value) {
      state.current[step + 1] = { value: '', ignored: true }

      incrementStep(2)

      setValue(state.current[step + 2]?.value ?? '')

      return
    }

    console.log(currentQuestion.value, value)

    if (currentQuestion.price && currentQuestion.value !== value) {
      setPrice(price + 20)
    }

    if (!nextQuestion) {
      handleFinish()

      return
    }

    incrementStep()

    setValue(state.current[step + 1]?.value ?? '')
  }, [step, value, currentQuestion])

  const handleDecrement = useCallback(() => {
    let prevQuestion = state.current[step - 1]

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
    setPrice(120)

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
      <Header show={show} />

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
                    <Select
                      onFocus={() => setShow(false)}
                      onBlur={() => setShow(true)}
                      autoFocus
                      defaultValue={value || undefined}
                      placeholder={currentQuestion.placeholder}
                      onChange={({ value }: any) => {
                        !show && setShow(true)

                        handleChange({ target: { value } })
                      }}
                      options={
                        currentQuestion.options!.map((option) => ({
                          value: option,
                          label: option,
                        })) as any
                      }
                    />
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
            className="sm:block hidden bg-gray-100 flex justify-center items-center px-6 py-4 fixed right-4 bottom-4 shadow-lg rounded"
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

      <AnimatePresence initial={false}>
        {showModal && (
          <Modal onClose={handleModalClose}>
            <div className="flex flex-col text-lg ">
              <p className="font-extrabold mb-4 text-2xl text-center">
                ВНИМАНИЕ!
              </p>

              <p className="mb-2">
                Команда школы не предоставляет бесплатный ночлег, если вам нужна
                помощь в поиске жилья в аренду, свяжитесь с нами +375 (29)
                206-11-32 Анна
              </p>
              <p className="mb-2">
                Приятный бонус для каждого участника - бесплатный обед!
              </p>
              <p className="mb-2">На месте будет работать платное кафе</p>
              <p className="mb-4">
                В этом году мы делаем открытый вечер хвалы в пятницу в 19:30,
                остальные вечера только для участников школы!
              </p>
              <div className="text-center">
                <PrimaryButton onClick={handleModalClose}>
                  Понятно
                </PrimaryButton>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  )
}
