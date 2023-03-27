import { CatalogItem } from '@/types'

export function parseHtml(el: HTMLElement) {
  const objHLevel = ['H2', 'H3', 'H4', 'H5', 'H6', 'H7']

  const children = Array.from(el.children)
    .filter((item) => objHLevel.indexOf(item.nodeName) > -1)
    .map((item, index) => {
      return {
        start: 0,
        end: 0,
        level: objHLevel.indexOf(item.nodeName) + 1,
        title: item.innerHTML,
        offsetTop: (item as any).offsetTop - 70,
        parent: false,
        children: [],
      }
    })
    .reverse()

  const arrSourceCatalog = [...children].reverse()
  arrSourceCatalog.forEach((item, index) => {
    item.start = index === 0 ? 0 : item.offsetTop
    item.end =
      arrSourceCatalog.length === index + 1
        ? Infinity
        : arrSourceCatalog[index + 1].offsetTop
  })

  // state.arrSourceCatalog = arrSourceCatalog
  let result: CatalogItem[] = []
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
      result.unshift(node)
    }
    loop(nodes)
  })(children)

  return result
}
