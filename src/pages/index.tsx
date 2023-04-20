import Head from 'next/head'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { ArticleItem, CategoryItem } from '@/types'
import { reqArticleList, reqCategoryList } from '@/curl'
import { ArticleList, Aside, Category, Pagination } from '@/components'
import { Copyright } from '@/components/Copyright'

export interface HomePageProps {
  categories: CategoryItem[]
  articles: ArticleItem[]
  page: string
  total: number
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context,
) => {
  const { page = '1', category = '' } = context.query as Record<string, any>

  const [categories, articles] = await Promise.all([
    reqCategoryList(),
    reqArticleList(),
  ])

  return {
    props: {
      categories,
      articles,
      total: articles.length,
      page,
      category,
    },
  }
}

export default function HomePage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { categories, articles, total } = props

  return (
    <>
      <Head>
        <title>首页 👏 - Bee Blog</title>
      </Head>
      <div className="flex-1 py-6">
        <ArticleList articles={articles} />
        <Pagination total={total} />
      </div>
      <Aside>
        <Category categories={categories} />
        <Copyright />
      </Aside>
    </>
  )
}
