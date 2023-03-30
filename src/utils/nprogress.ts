import { Router } from 'next/router'
import np from 'nprogress'
import 'nprogress/nprogress.css'

np.configure({
  showSpinner: false,
})

export const nprogress = np

export function setupNprogress() {
  // Binding events.
  Router.events.on('routeChangeStart', () => nprogress.start())
  Router.events.on('routeChangeComplete', () => nprogress.done())
  Router.events.on('routeChangeError', () => nprogress.done())
}
