import { useCallback, useReducer, useState } from 'react'

export const useStep = (): [number, () => void, () => void] => {
  const [step, setStep] = useReducer(
    (state: number, step: number) => state + step,
    0
  )

  const incrementStep = useCallback(() => {
    setStep(1)
  }, [])

  const decrementStep = useCallback(() => {
    setStep(-1)
  }, [])

  return [step, incrementStep, decrementStep]
}

export const useValue = (): [
  string,
  ({ target: { value } }: { target: { value: string } }) => void,
  (value: string) => void
] => {
  const [value, setValue] = useState('')

  const handleChange = useCallback(
    ({ target: { value } }: { target: { value: string } }) => {
      setValue(value)
    },
    []
  )

  return [value, handleChange, setValue]
}
