import { useRouter } from 'next/router'
import { Layout } from '../../../components/organisms/artist/Layout'

const Events = () => {
  const router = useRouter()
  const { userId } = router.query

  return (
    <Layout description={`${userId} portfolio | Events`} keywords={[userId]}>
      <section>
        <div>Events | {userId}</div>
      </section>
    </Layout>
  )
}

export default Events
