import { useRouter } from 'next/router'
import { Layout } from '../../components/organisms/artist/Layout'

const Home = () => {
  const router = useRouter()
  const { userId } = router.query

  return (
    <Layout description={`${userId} portfolio | Home`} keywords={[userId]}>
      <section>
        <div>About | {userId}</div>
      </section>
    </Layout>
  )
}

export default Home
