import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { reqArticleInfo, reqArticleList } from '@/curl'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import { ArticleItem } from '@/types'

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
  article: ArticleItem
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const articles = await reqArticleList()
  const paths = articles.map((item) => {
    return { params: { id: item.id } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  ArticlePageProps,
  { id: string }
> = async (context) => {
  const { params } = context

  const article = await reqArticleInfo({
    id: params?.id ?? '',
  })

  return { props: { article } }
}

export default function ArticlePage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { article } = props

  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <main className="max-w-[960px] m-auto prose prose-indigo">
        <div
          dangerouslySetInnerHTML={{
            __html: md.render(article.content),
          }}
        />
      </main>
    </>
  )
}
