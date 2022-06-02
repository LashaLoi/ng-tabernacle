import { useState, useEffect, useMemo } from 'react'

export const useTimeoutShow = (
  timeout: number
): [boolean, (value: boolean) => void] => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (show) {
      timeoutId = setTimeout(() => setShow(false), timeout)
    }

    return () => clearTimeout(timeoutId)
  }, [show, timeout])

  return useMemo(() => [show, setShow], [show, setShow])
}
