import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { ArticleItem, CategoryItem } from '@/types'
import { reqArticleList, reqCategoryList } from '@/curl'
import { ArticleList, Category } from '@/components'

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
      <main className="flex mx-auto max-w-[960px] items-start bg-red-300">
        <ArticleList articles={articles} />
        <Category categories={categories} />
      </main>
    </>
  )
}
