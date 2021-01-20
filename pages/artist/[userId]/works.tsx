import { useRouter } from 'next/router'
import { Layout } from '../../../components/organisms/artist/Layout'

const Works = () => {
  const router = useRouter()
  const { userId } = router.query

  return (
    <Layout description={`${userId} portfolio | Works`} keywords={[userId]}>
      <section>
        <div>Works | {userId}</div>
      </section>
    </Layout>
  )
}

export default Works
