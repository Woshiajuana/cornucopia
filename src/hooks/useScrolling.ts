import { useEffect, MutableRefObject, useState } from 'react'

export const useScrolling = (
  ref: MutableRefObject<HTMLElement | Window | undefined>,
) => {
  const [state, setState] = useState<Element>()

  useEffect(() => {
    const handler: EventListenerOrEventListenerObject = (event) => {
      setState(event.target as any)
    }
    const refEl = ref.current
    refEl?.addEventListener('scroll', handler)
    return () => {
      refEl?.removeEventListener('scroll', handler)
    }
  }, [ref])

  return state
}
