import { useCallback } from 'react'
import { useLazy } from './useLazy'

export function useWindow() {
  const callback = useCallback(() => window, [])
  return useLazy<Window>(callback)
}
