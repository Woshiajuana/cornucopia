import { MutableRefObject, useCallback, useEffect, useRef } from 'react'

export function useScrollTo(
  ref: MutableRefObject<HTMLElement | null | undefined>,
) {
  const timerRef = useRef<number>()

  useEffect(() => {
    const timer = timerRef.current
    return () => window.clearInterval(timer)
  }, [timerRef])

  return useCallback(
    (position = 0) => {
      window.clearInterval(timerRef.current)
      if (ref.current) {
        timerRef.current = window.setInterval(() => {
          if (ref.current) {
            if (ref.current.scrollTop <= position) {
              ref.current.scrollTop = position
              return window.clearInterval(timerRef.current)
            }
            ref.current.scrollTop = Math.floor(ref.current.scrollTop / 1.1)
          }
        }, 10)
      }
    },
    [ref, timerRef],
  )
}
