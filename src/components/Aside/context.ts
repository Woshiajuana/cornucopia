import { createContext, useContext } from 'react'

export interface AsideContextValue {
  onScroll: (options: { scrollTop: number }) => void
}

export const AsideContext = createContext({} as AsideContextValue)

export const useAsideContext = () => {
  return useContext(AsideContext)
}
