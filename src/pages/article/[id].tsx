import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import matter from 'gray-matter'
import { reqArticleInfo, reqArticleList } from '@/curl'
import { ArticleItem } from '@/types'
import { Aside, Catalog } from '@/components'
import { markdown } from '@/utils'

export interface ArticlePageProps {
  article: ArticleItem
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const articles = await reqArticleList()
  const paths = articles.map((item) => {
    return { params: { id: `${item.id}.html` } }
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
    content: markdown.render(content),
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
      <div className="prose prose-indigo flex-1 pt-6 w-full">
        <header>
          <h1>{article.title}</h1>
          <time>{article.date}</time>
        </header>
        <div
          id="bee-article-content"
          dangerouslySetInnerHTML={{
            __html: article.content,
          }}
        />
      </div>
      <Aside>
        <Catalog />
      </Aside>
    </>
  )
}
