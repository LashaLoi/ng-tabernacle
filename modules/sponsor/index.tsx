import { useCallback, useMemo, useRef } from 'react'
import { Finish, useLS, useStep, useValue } from '../registration/hooks'
import { Input } from '../../components/input'
import { questions } from './constants'
import { Progress } from '../../components/progress'

import { AnimatePresence, motion } from 'framer-motion'
import Steps from '../../components/steps'
import Final from './final'
import { quizAnimation, State, stepAnimation } from '../registration'
import { addSponsor } from './utils'
import Header from '../../components/header'

export default function Sponsor() {
  const state = useRef<State>({})

  const [step, incrementStep, decrementStep, setStep] = useStep()
  const [isFinished, setIsFinished] = useLS('sponsor')
  const [value, handleChange, setValue] = useValue()

  const handleFinish = useCallback(() => {
    setIsFinished(Finish.Yes)

    return addSponsor(state.current)
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
    <div className="h-screen relative overflow-x-hidden">
      <Header />

      {!loading && (
        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {isFinal ? (
            <Final handleReset={handleReset} />
          ) : (
            <motion.div
              key="quiz"
              className="max-w-2xl sm:p-16 p-8 mx-auto flex flex-col justify-center"
              {...quizAnimation}
            >
              <div className="mb-20">
                <h1 className="mb-2 tracking-tight font-extrabold sm:text-3xl text-2xl">
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

                <div className="mt-4">
                  <Progress percent={percent} />
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
