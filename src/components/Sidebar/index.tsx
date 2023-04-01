import { Icon } from '@/components'
import { useRouter } from 'next/router'
import {
  useDocumentEle,
  useMounted,
  useScrolling,
  useScrollTo,
  useWindow,
} from '@/hooks'
import { useState } from 'react'
import { useTheme } from 'next-themes'

export interface SidebarProps {
  className?: string
}

export function Sidebar() {
  const router = useRouter()

  // 返回
  const documentEle = useDocumentEle()
  const handleReturn = useScrollTo(documentEle)
  const windowRef = useWindow()
  const [visible, setVisible] = useState(false)
  useScrolling(windowRef, (event) => {
    const { clientHeight, scrollTop } = event
    const value = scrollTop > clientHeight
    if (visible !== value) {
      setVisible(value)
    }
  })

  // 切换主题
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()

  return (
    <div className="fixed -ml-14 top-52">
      <button
        aria-label="Return"
        title="返回"
        onClick={() => router.back()}
        className="w-10 h-10 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded"
      >
        <Icon size="24" name="return" />
      </button>
      <button
        className="mt-1 w-10 h-10 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded"
        aria-label="Toggle Theme"
        title="切换主题"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        <Icon size={24} name={mounted ? resolvedTheme : 'light'} />
      </button>
      <a
        title="GitHub"
        href="https://github.com/Woshiajuana"
        target="_blank"
        className="mt-1 w-10 h-10 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded"
      >
        <Icon size="24" name="github" />
      </a>
      <a
        title="发送邮件"
        href={`mailto:979703986@qq.com`}
        className="mt-1 w-10 h-10 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded"
      >
        <Icon size="24" name="mail" />
      </a>
      <button
        title="分享链接"
        className="mt-1 w-10 h-10 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded"
      >
        <Icon size="24" name="link" />
      </button>
      {visible && (
        <button
          onClick={() => handleReturn(0)}
          type="button"
          title="回到顶部"
          className="mt-1 w-10 h-10 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded"
        >
          <Icon size="24" name="top" />
        </button>
      )}
    </div>
  )
}
