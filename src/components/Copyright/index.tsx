export function Copyright() {
  return (
    <div className="text-[13px] text-gray-500 mt-4">
      <a
        className="hover:underline hover:text-gray-800"
        href="https://beian.miit.gov.cn/"
        target="_blank"
      >
        湘ICP备2022023602号-1
      </a>
      <p>Copyright © {new Date().getFullYear()} daysnap.cn</p>
    </div>
  )
}
