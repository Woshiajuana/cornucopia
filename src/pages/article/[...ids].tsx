import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { reqArticleInfo, reqArticleList } from '@/curl'
import { ArticleItem } from '@/types'

export interface ArticlePageProps {
  article: ArticleItem
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const articles = await reqArticleList()
  const paths = articles.map((item) => {
    return { params: { title: item.title, ids: item.id.split('/') } }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<
  ArticlePageProps,
  { ids: string[] }
> = async (context) => {
  const { params } = context

  const article = await reqArticleInfo({ path: params?.ids.join('/') ?? '' })

  return { props: { article } }
}

export default function ArticlePage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { article } = props
  const { query } = useRouter()
  console.log(1)

  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div>文章详情{JSON.stringify(query)}</div>
    </>
  )
}
