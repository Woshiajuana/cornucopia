import dayjs, { ConfigType } from 'dayjs'
import type { TimeHTMLAttributes } from 'react'

export interface DateTimeProps extends TimeHTMLAttributes<HTMLTimeElement> {
  time?: ConfigType
  template?: string
}

export function DateTime(props: DateTimeProps) {
  const { time, template, ...rest } = props

  return <time {...rest}>{dayjs(time).format(template)}</time>
}
