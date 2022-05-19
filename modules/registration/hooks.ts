import { useCallback, useEffect, useMemo, useState } from 'react'

export enum Finish {
  No = 'No',
  Yes = 'Yes',
}

export const useLS = (
  key: string
): [Finish | null, (value: Finish) => void] => {
  const [value, setValue] = useState<Finish | null>(null)

  const setItem = useCallback(
    (value: Finish) => {
      localStorage.setItem(key, value)

      setValue(value)
    },
    [key]
  )

  useEffect(() => {
    const value = localStorage.getItem(key) as Finish | null

    setValue(value ?? Finish.No)
  }, [])

  return useMemo(() => [value, setItem], [value, setItem])
}

export const useStep = (): [
  number,
  (step?: number) => void,
  (step?: number) => void,
  (step: number) => void
] => {
  const [step, setStep] = useState(0)

  const incrementStep = useCallback(
    (step = 1) => setStep((currentStep) => currentStep + step),
    []
  )
  const decrementStep = useCallback(
    (step = -1) => setStep((currentStep) => currentStep + step),
    []
  )

  return [step, incrementStep, decrementStep, setStep]
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
