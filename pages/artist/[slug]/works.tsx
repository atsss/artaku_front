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

  const userData = addHeaderInfo(data.artist)

  return (
    <Layout user={userData}>
      <WorkLists slug={slug} works={userData.artworks} />
    </Layout>
  )
}

const addHeaderInfo = (data) => {
  const description = `${data.slug} portfolio | Works`
  const keywords = [data.slug]

  return { ...data, description, keywords }
}

export default Works
