import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { CategoryItem } from '@/types'
import { reqCategoryList } from '@/curl'

export interface HomePageProps {
  categories: CategoryItem[]
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (
  context,
) => {
  const { params } = context

  console.log('params => ', params)

  const categories = await reqCategoryList()

  return {
    props: { categories },
  }
}

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { categories } = props

  return (
    <>
      <Head>
        <title>首页 👏 - Bee Blog</title>
      </Head>
      <h1 className="text-red-600">首页</h1>
      <ul>
        {categories.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}
