import { MutableRefObject, useCallback, useEffect, useRef } from 'react'

export function useScrollTo(
  ref: MutableRefObject<HTMLElement | null | undefined>,
) {
  const timerRef = useRef<number>()

  useEffect(() => {
    return () => {
      window.clearInterval(timerRef.current)
    }
  }, [timerRef])

  return useCallback(
    (position = 0, duration = 300) => {
      window.clearInterval(timerRef.current)
      if (!ref.current) {
        return
      }
      const { scrollTop } = ref.current
      const zt = Date.now()
      timerRef.current = window.setInterval(() => {
        const t = Date.now()
        const p = (t - zt) / duration
        if (t >= duration + zt) {
          window.clearInterval(timerRef.current)
          ref.current?.scrollTo(0, position)
        } else {
          const t =
            (-Math.cos(p * Math.PI) / 2 + 0.5) * (position - scrollTop) +
            scrollTop

          ref.current?.scrollTo(0, t)
        }
      }, 13)
    },
    [ref],
  )
}
