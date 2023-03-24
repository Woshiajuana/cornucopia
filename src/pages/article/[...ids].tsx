import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { reqArticleInfo, reqArticleList } from '@/curl'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

const md = new MarkdownIt({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      // https://github.com/highlightjs/highlight.js/issues/2277
      return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
    }

    return ''
  },
})

export interface ArticlePageProps {
  content: string
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const articles = await reqArticleList()
  const paths = articles.map((item) => {
    return { params: { title: item.title, ids: item.id.split('/') } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  ArticlePageProps,
  { ids: string[] }
> = async (context) => {
  const { params } = context

  const content = await reqArticleInfo({
    path: params?.ids.join('/') ?? '',
  })

  return { props: { content } }
}

export default function ArticlePage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { content } = props

  return (
    <>
      <Head>
        <title>文章详情</title>
      </Head>
      <main className="max-w-[960px] m-auto prose prose-indigo">
        <div
          dangerouslySetInnerHTML={{
            __html: md.render(content),
          }}
        />
      </main>
    </>
  )
}
