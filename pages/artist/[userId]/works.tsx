import { useRouter } from 'next/router'
import { Layout } from '../../../components/organisms/artist/Layout'
import { data } from '../../../public/data'

const Works = () => {
  const router = useRouter()
  const { userId } = router.query
  const userData = addHeaderInfo(data)

  return (
    <Layout user={userData}>
      <section>
        <div>Works | {userId}</div>
      </section>
    </Layout>
  )
}

const addHeaderInfo = (data) => {
  const description = `${data.userId} portfolio | Works`
  const keywords = [data.userId]

  return ({...data, description, keywords})
}

export default Works
