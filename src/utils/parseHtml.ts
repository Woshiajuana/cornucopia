import { CatalogItem } from '@/types'

export function parseHtml(el: HTMLElement) {
  const objHLevel = ['H2', 'H3', 'H4', 'H5', 'H6', 'H7']

  const children = Array.from(el.children)
    .filter((item) => objHLevel.indexOf(item.nodeName) > -1)
    .map((item, index) => {
      const label = item.innerHTML
      item.id = label
      return {
        key: `title-${index}`,
        start: 0,
        end: 0,
        level: objHLevel.indexOf(item.nodeName) + 1,
        label,
        offsetTop: (item as any).offsetTop - 70,
        parent: false,
        children: [],
      }
    })
    .reverse()

  const sourceCatalogs = [...children].reverse()
  sourceCatalogs.forEach((item, index) => {
    item.start = index === 0 ? 0 : item.offsetTop
    item.end =
      sourceCatalogs.length === index + 1
        ? Infinity
        : sourceCatalogs[index + 1].offsetTop
  })

  const catalogs: CatalogItem[] = []
  let loop: any
  ;(loop = (nodes: typeof children) => {
    const node = nodes.splice(0, 1)[0]
    if (!node) return
    for (let i = 0, len = nodes.length; i < len; i++) {
      let item = nodes[i]
      if (item.level < node.level) {
        node.parent = true
        if (!item.children) {
          item.children = []
        }
        ;(item.children as any).unshift(node)
        break
      }
    }
    if (!node.parent) {
      catalogs.unshift(node)
    }
    loop(nodes)
  })(children)

  return { catalogs, sourceCatalogs }
}
