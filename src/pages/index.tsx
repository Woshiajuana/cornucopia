import Head from 'next/head'
import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'

export interface HomePageProps {
  //
}

export const getStaticProps: GetStaticProps<{
  x: string
}> = async (context) => {
  const { params } = context
  return {
    props: { x: '1' },
  }
}


export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { x } = props
  console.log('home => ', props)

  return (
    <>
      <Head>
        <title>首页 👏 - Bee Blog</title>
      </Head>
      <main>
        <h1 className="text-red-600">首页</h1>
      </main>
    </>
  )
}
