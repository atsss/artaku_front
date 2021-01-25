import { useRouter } from 'next/router'
import { WorkLists } from '../../../components/organisms/artist/WorkLists'
import { Layout } from '../../../components/organisms/artist/Layout'
import { data } from '../../../public/data'

const Works = () => {
  const router = useRouter()
  const { slug } = router.query
  const userData = addHeaderInfo(data)

  return (
    <Layout user={userData}>
      <WorkLists slug={slug} works={userData.works} />
    </Layout>
  )
}

const addHeaderInfo = (data) => {
  const description = `${data.slug} portfolio | Works`
  const keywords = [data.slug]

  return { ...data, description, keywords }
}

export default Works
