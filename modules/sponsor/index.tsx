import { useCallback, useMemo, useRef } from 'react'
import { Finish, useLS, useStep, useValue } from '../registration/hooks'
import { Input, Progress } from 'antd'
import { questions } from './constants'
import RegistrationHeader from '../registration/header'
import { AnimatePresence, motion } from 'framer-motion'
import Steps from '../registration/steps'
import Final from './final'
import { quizAnimation, State, stepAnimation } from '../registration'

export default function Sponsor() {
  const state = useRef<State>({})

  const [step, incrementStep, decrementStep, setStep] = useStep()
  const [isFinished, setIsFinished] = useLS('sponsor')
  const [value, handleChange, setValue] = useValue()

  const handleFinish = useCallback(() => {
    setIsFinished(Finish.Yes)
  }, [])

  const handleIncrement = useCallback(async () => {
    state.current[step] = { value }

    const nextQuestion = questions[step + 1]

    if (!nextQuestion) {
      handleFinish()

      return
    }

    incrementStep()

    setValue(state.current[step + 1]?.value ?? '')
  }, [step, value])

  const handleDecrement = useCallback(() => {
    const prevQuestion = state.current[step - 1]

    decrementStep()

    setValue(prevQuestion.value)
  }, [step])

  const handleReset = useCallback(() => {
    state.current = {}

    setValue('')
    setStep(0)

    setIsFinished(Finish.No)
  }, [])

  const currentQuestion = useMemo(() => questions[step], [step])

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
    <div className="h-screen relative overflow-hidden ">
      <RegistrationHeader />

      {!loading && (
        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {isFinal ? (
            <Final handleReset={handleReset} />
          ) : (
            <motion.div
              key="quiz"
              className="max-w-2xl sm:p-16 p-8 mx-auto flex flex-col justify-center h-full"
              {...quizAnimation}
            >
              <div className="sm:h-[300px] h-inherit">
                <h1 className="sm:mt-0 mt-36 mb-16 tracking-tight font-extrabold sm:text-3xl text-2xl">
                  <span className="block xl:inline">Спонсорство</span>{' '}
                  <span className="block text-indigo-600 xl:inline main-title">
                    Скиния 2022
                  </span>
                </h1>
                <AnimatePresence initial={false} exitBeforeEnter={true}>
                  <motion.div key={step} {...stepAnimation}>
                    <div className="mb-2">
                      <p className="text-gray-600 text-lg">
                        {currentQuestion.label}
                      </p>
                    </div>
                    <Input
                      onChange={handleChange}
                      value={value}
                      autoFocus
                      placeholder={currentQuestion.placeholder}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="mt-2">
                  <Progress
                    strokeLinecap="square"
                    percent={percent}
                    strokeColor={{
                      '0%': '#c850c0',
                      '100%': '#ffcc70',
                    }}
                  />
                </div>

                <Steps
                  questionsLength={questions.length - 1}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  value={value}
                  step={step}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}
