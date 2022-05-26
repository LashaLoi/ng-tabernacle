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

export function useLocalStorage(key: string, initialValue: unknown) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: unknown) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }
  return [storedValue, setValue]
}
