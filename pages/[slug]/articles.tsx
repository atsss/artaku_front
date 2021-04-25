import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { Loading } from '../../components/atoms/Loading'
import { ArticleLists } from '../../components/organisms/artist/ArticleLists'
import { Layout } from '../../components/organisms/artist/Layout'
import { GET_ARTIST } from '../../graphqls/queries'

const Articles = () => {
  const router = useRouter()
  const { slug } = router.query

  const { loading, error, data } = useQuery(GET_ARTIST, {
    variables: { slug },
  })

  if (loading) return <Loading />
  if (error) return <div>Error</div>

  const user = data.artist

  return (
    <Layout user={user} metaData={metaData(user)}>
      {user.articles && <ArticleLists articles={user.articles} />}
    </Layout>
  )
}

const metaData = (user) => {
  const description = `${user.slug} portfolio | Articles`
  const keywords = [user.slug]

  return { description, keywords }
}

export default Articles
