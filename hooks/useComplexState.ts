import { useState, Dispatch, useCallback } from 'react'

export function useComplexState<S>(
  defaultValues: S
): [S, Dispatch<Partial<S>>, () => void] {
  const [value, setValue] = useState<S>(defaultValues)

  const update = useCallback((value: Partial<S>) => {
    setValue((state) => ({ ...state, ...value }))
  }, [])

  const reset = useCallback(() => setValue(defaultValues), [defaultValues])

  return [value, update, reset]
}
