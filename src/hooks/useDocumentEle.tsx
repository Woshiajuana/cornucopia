import { useCallback } from 'react'
import { useLazy } from './useLazy'

export function useDocumentEle() {
  const callback = useCallback(() => document.documentElement, [])
  return useLazy(callback)
}
