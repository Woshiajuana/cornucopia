import { DocSearch } from '@docsearch/react'
import { translations } from './translations'

import '@docsearch/css'

export function SearchBox() {
  return (
    <DocSearch
      placeholder="搜索文档"
      translations={translations}
      searchParameters={{
        facetFilters: ['language:en', 'version:1.0.0'],
      }}
      appId="YMMTJ6XYBU"
      indexName="nextjs-blog"
      apiKey="0394e3cca91b65cb33911ed93ee8801d"
    />
  )
}
