import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { reqArticleInfo, reqArticleList } from '@/curl'
import { ArticleItem } from '@/types'
import ReactMarkdown from 'react-markdown'

export interface ArticlePageProps {
  markdownContent: string
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

  const markdownContent = await reqArticleInfo({
    path: params?.ids.join('/') ?? '',
  })

  return { props: { markdownContent } }
}

export default function ArticlePage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { markdownContent } = props
  const { query } = useRouter()

  return (
    <>
      <Head>
        <title>文章详情</title>
      </Head>
      <div>文章详情{JSON.stringify(query)}</div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </>
  )
}
