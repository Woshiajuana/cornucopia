import { useEffect, MutableRefObject } from 'react'

export const useScrolling = (
  ref: MutableRefObject<HTMLElement | Window | undefined>,
  onScroll: (options: {
    scrollTop: number
    scrollHeight: number
    clientHeight: number
  }) => void,
) => {
  useEffect(() => {
    const handler: EventListenerOrEventListenerObject = (event) => {
      const { scrollTop, scrollHeight, clientHeight } =
        (event.target as any).scrollingElement || event.target
      onScroll({ scrollTop, scrollHeight, clientHeight })
    }
    const refEl = ref.current
    refEl?.addEventListener('scroll', handler)
    return () => {
      refEl?.removeEventListener('scroll', handler)
    }
  }, [ref, onScroll])
}
