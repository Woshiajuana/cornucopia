import Head from 'next/head'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { ArticleItem, CategoryItem } from '@/types'
import { reqArticleList, reqCategoryList } from '@/curl'
import { ArticleList, Aside, Category, Pagination } from '@/components'
import { Copyright } from '@/components/Copyright'

export interface HomePageProps {
  categories: CategoryItem[]
  articles: ArticleItem[]
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (
  context,
) => {
  const { params } = context

  const [categories, articles] = await Promise.all([
    reqCategoryList(),
    reqArticleList(),
  ])

  return {
    props: { categories, articles },
  }
}

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { categories, articles } = props

  return (
    <>
      <Head>
        <title>首页 👏 - Bee Blog</title>
      </Head>
      <div className="flex-1 py-6">
        <ArticleList articles={articles} />
        <Pagination />
      </div>
      <Aside>
        <Category categories={categories} />
        <Copyright />
      </Aside>
    </>
  )
}
