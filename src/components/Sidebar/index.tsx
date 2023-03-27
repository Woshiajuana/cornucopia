import { Icon } from '@/components'
import { useRouter } from 'next/router'

export function Sidebar() {
  const router = useRouter()

  return (
    <div className="fixed -ml-14 top-52">
      <button
        title="返回"
        onClick={() => router.back()}
        className="w-10 h-10 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded"
      >
        <Icon size="24" name="return" />
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
      <div
        title="分享链接"
        className="mt-1 w-10 h-10 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded"
      >
        <Icon size="24" name="link" />
      </div>
      <div
        title="回到顶部"
        className="mt-1 w-10 h-10 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded"
      >
        <Icon size="24" name="top" />
      </div>
    </div>
  )
}
