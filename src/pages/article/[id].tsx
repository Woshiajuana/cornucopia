import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { reqArticleInfo, reqArticleList } from '@/curl'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import matter from 'gray-matter'
import { ArticleItem } from '@/types'
import { Catalog } from '@/components'

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

  const { content } = matter(article.content)
  Object.assign(article, {
    content: md.render(content),
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
        <title>{article.title} - Bee</title>
      </Head>
      <main className="max-w-[960px] flex items-start m-auto">
        <article className="prose prose-indigo flex-1">
          <header>
            <h1>{article.title}</h1>
            <time>{article.date}</time>
          </header>
          <div
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          />
        </article>
        <Catalog />
      </main>
    </>
  )
}
