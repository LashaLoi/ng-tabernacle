import { useCallback, useMemo, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import 'moment/locale/ru'
import locale from 'antd/lib/date-picker/locale/ru_RU'

import { DatePicker, Input, notification, Progress, Select, Modal } from 'antd'

import { Finish, useLS, useStep, useValue } from './hooks'

import Header from '../../components/header'
import Steps from '../../components/steps'
import Final from './final'

import { createAnimation, register } from './utils'
import { questions } from './constants'
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from '@ant-design/icons'

export const quizAnimation = createAnimation(50)
export const stepAnimation = createAnimation(10)

export type State = {
  [key in number]: { value: string; ignored?: boolean }
}

export default function Registration() {
  const state = useRef<State>({})

  const [step, incrementStep, decrementStep, setStep] = useStep()
  const [isFinished, setIsFinished] = useLS('finished')
  const [value, handleChange, setValue] = useValue()

  const handleFinish = useCallback(() => {
    Modal.info({
      centered: true,
      title: 'Важная информация!',
      content: (
        <div className="flex flex-col">
          <p>Команда школы СКИНИЯ 2021 не сможет обеспечить вас ночлегом.</p>
          <p>Пожалуйста, учитывайте это в Ваших планах.</p>
          <p>
            На месте будет работать платное кафе, где вы сможете купить чай,
            кофе, печенье
          </p>
        </div>
      ),
      onOk() {
        notification.info({
          message: 'Регистрация прошла успешно!',
          placement: 'bottomRight',
        })

        setIsFinished(Finish.Yes)
      },
      okButtonProps: {
        type: 'default',
      },
    })

    return register(state.current)
  }, [])

  const handleIncrement = useCallback(async () => {
    state.current[step] = { value }

    const nextQuestion = questions[step + 1]

    if (nextQuestion?.depend && nextQuestion.value !== value) {
      state.current[step + 1] = { value: '', ignored: true }

      incrementStep(2)

      return setValue(state.current[step + 2]?.value ?? '')
    }

    if (!nextQuestion) {
      handleFinish()

      return
    }

    incrementStep()

    setValue(state.current[step + 1]?.value ?? '')
  }, [step, value])

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
                <h1 className="sm:mt-0 mt-36 mb-2 tracking-tight font-extrabold sm:text-3xl text-2xl">
                  <span className="block xl:inline">Регистрация</span>{' '}
                  <span className="block text-indigo-600 xl:inline main-title">
                    Скиния 2022
                  </span>
                </h1>
                <p className="mb-10 text-gray-400">
                  Зарегестрируйтесь и следите за обновлениями!
                </p>
                <AnimatePresence initial={false} exitBeforeEnter={true}>
                  <motion.div key={step} {...stepAnimation}>
                    <div className="mb-2">
                      <p className="text-gray-600 text-lg">
                        {currentQuestion.label}
                      </p>
                    </div>
                    {currentQuestion.component === 'select' ? (
                      <Select
                        autoFocus
                        defaultValue={value || undefined}
                        style={{ width: '100%' }}
                        placeholder={currentQuestion.placeholder}
                        onChange={(value) =>
                          handleChange({ target: { value } })
                        }
                      >
                        {currentQuestion.options!.map((option) => (
                          <Select.Option key={option} value={option}>
                            {option}
                          </Select.Option>
                        ))}
                      </Select>
                    ) : currentQuestion.component === 'datepicker' ? (
                      <DatePicker
                        locale={locale}
                        autoFocus
                        placeholder={value || currentQuestion.placeholder}
                        style={{ width: '100%' }}
                        onChange={(_: unknown, value: string) =>
                          handleChange({ target: { value } })
                        }
                      />
                    ) : (
                      <Input
                        onChange={handleChange}
                        value={value}
                        autoFocus
                        placeholder={currentQuestion.placeholder}
                      />
                    )}
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

      <Header />
    </div>
  )
}
