import { useRouter } from 'next/router'
import { WorkLists } from '../../../components/organisms/artist/WorkLists'
import { useQuery } from '@apollo/client'
import { Layout } from '../../../components/organisms/artist/Layout'
import { GET_ARTIST } from '../../../graphqls/queries'

const Works = () => {
  const router = useRouter()
  const { slug } = router.query

  const { loading, error, data } = useQuery(GET_ARTIST, {
    variables: { slug },
  })

  if (loading) return <p>Loading ...</p>
  if (error) return <div>Error</div>

  const user = data.artist

  return (
    <Layout user={user} metaData={metaData(user)}>
      <WorkLists slug={slug} works={user.artworks} />
    </Layout>
  )
}

const metaData = (user) => {
  const description = `${user.slug} portfolio | Works`
  const keywords = [user.slug]

  return { description, keywords }
}

export default Works
