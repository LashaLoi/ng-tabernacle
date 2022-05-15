import { useCallback, useEffect, useReducer, useState, useRef } from 'react'

import { Input, Button, Typography, DatePicker } from 'antd'
import { motion, AnimatePresence } from 'framer-motion'
import { useStep, useValue } from '../modules/registration/hooks'
import { FadeIn } from '../components/fade-in'

const questions = [
  {
    label: 'ФИО',
    placeholder: 'Лой Алексей Павлович',
    component: 'input',
  },

  {
    label: 'Дата рождения',
    placeholder: '14/10/1998',
    component: 'datepicker',
  },
  {
    label: 'Город',
    placeholder: 'Минск',
    component: 'input',
  },
  {
    label: 'Телефон',
    placeholder: '+375 33 603 80 02',
    component: 'input',
  },
  {
    label: 'Email',
    placeholder: 'lashaloi1409@gmail.com',
    component: 'input',
  },
  {
    label: 'Церковь',
    placeholder: 'Новое поколение Минск',
    component: 'input',
  },
  {
    label: 'Ваше служение в церкви',
    placeholder: 'Выберите ваше служение',
    component: 'input',
    dependField: {
      value: 'other',
      label: 'Введите название другого служения',
      placeholder: 'Стулья раставляю',
      component: 'input',
    },
  },
  {
    label: 'Количество дней',
    placeholder: '2',
    component: 'input',
  },
]

export default function Registration() {
  const state = useRef<{ [key in number]: string }>({})
  const [hasDependField, setHasDependField] = useState(false)

  const [step, incrementStep, decrementStep] = useStep()
  const [value, handleChange, setValue] = useValue()

  const handleIncrement = useCallback(() => {
    state.current[step] = value

    incrementStep()
  }, [incrementStep, step, value])

  useEffect(() => {
    setValue(state.current[step] ?? '')
  }, [setValue, step])

  return (
    <div className="">
      <div className="max-w-2xl sm:p-16 p-8 mx-auto flex flex-col justify-center h-screen">
        {questions.map(({ label, placeholder, component, dependField }, i) => {
          return (
            <AnimatePresence exitBeforeEnter key={i}>
              {i === step && (
                <motion.div
                  key="child"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, display: 'none' }}
                >
                  <>
                    <div className="mb-2">
                      <Typography.Text>{label}</Typography.Text>
                    </div>
                    {/*{component === 'datepicker' ? (*/}
                    {/*  <DatePicker*/}
                    {/*    autoFocus*/}
                    {/*    style={{ width: '100%' }}*/}
                    {/*    onChange={handleDatePicker}*/}
                    {/*  />*/}
                    {/*) : (*/}
                    <Input
                      onChange={handleChange}
                      value={value}
                      autoFocus
                      placeholder={placeholder}
                    />
                    {/*)}*/}
                  </>
                </motion.div>
              )}
            </AnimatePresence>
          )
        })}

        {step === questions.length ? (
          <pre>{JSON.stringify(state.current, undefined, 2)}</pre>
        ) : (
          <div className="mt-4 flex">
            <Button
              className="mr-2"
              onClick={handleIncrement}
              disabled={!value}
            >
              {step === questions.length - 1 ? 'Завершить' : 'Далее'}
            </Button>

            {step > 0 && (
              <FadeIn>
                <Button onClick={decrementStep}>Назад</Button>
              </FadeIn>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
