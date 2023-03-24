import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { reqArticleInfo, reqArticleList } from '@/curl'
import { ArticleItem } from '@/types'
import ReactMarkdown, { Components } from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react'

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

  const customerComponents: Components = {
    code(code) {
      let language = ''

      if (code.className) {
        language = code.className.split('-')[1]
      }

      return (
        <SyntaxHighlighter language={language} style={darcula}>
          {code.children as any}
        </SyntaxHighlighter>
      )
    },
  }

  return (
    <>
      <Head>
        <title>文章详情</title>
      </Head>
      <ReactMarkdown components={customerComponents}>{content}</ReactMarkdown>
    </>
  )
}
