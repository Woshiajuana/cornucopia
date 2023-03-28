import { useEffect, useRef } from 'react'

export function useLazy<T>(cb: () => T) {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = cb()
    return () => {
      ref.current = undefined
    }
  }, [cb])

  return ref
}
