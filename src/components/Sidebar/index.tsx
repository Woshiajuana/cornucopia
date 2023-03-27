import { Icon } from '@/components'

export function Sidebar() {
  return (
    <div className="fixed -ml-14 top-52">
      <a
        title="返回"
        href="javascript: history.go(-1)"
        className="w-10 h-10 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded"
      >
        <Icon size="24" name="return" />
      </a>
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
