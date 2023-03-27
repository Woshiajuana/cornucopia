import { Icon } from '@/components'

export function Sidebar() {
  return (
    <div className="fixed -ml-14 top-52">
      <div className="w-10 h-10 flex items-center justify-center cursor-pointer bg-gray-100 hover:bg-gray-100 rounded">
        <Icon size="24" name="dark" />
      </div>
      <div className="mt-1 w-10 h-10 flex items-center justify-center cursor-pointer bg-gray-100 hover:bg-gray-100 rounded">
        <Icon size="24" name="dark" />
      </div>
      <div className="mt-1 w-10 h-10 flex items-center justify-center cursor-pointer bg-gray-100 hover:bg-gray-100 rounded">
        <Icon size="24" name="dark" />
      </div>
      <div className="mt-1 w-10 h-10 flex items-center justify-center cursor-pointer bg-gray-100 hover:bg-gray-100 rounded">
        <Icon size="24" name="dark" />
      </div>
    </div>
  )
}
