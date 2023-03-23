import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { ArticleItem, CategoryItem } from '@/types'
import { reqArticleList, reqCategoryList } from '@/curl'
import { Category } from '@/components'
import Link from 'next/link'

export interface HomePageProps {
  categories: CategoryItem[]
  articles: ArticleItem[]
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (
  context,
) => {
  const { params } = context

  console.log('params => ', params)

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
        <div className="flex-1">
          {articles.map((item) => (
            <Link className="block" key={item.id} href={`/article/${item.id}`}>
              {item.title}
            </Link>
          ))}
        </div>
        <Category
          className="w-[240px] border-gray-400"
          categories={categories}
        />
      </main>
    </>
  )
}
