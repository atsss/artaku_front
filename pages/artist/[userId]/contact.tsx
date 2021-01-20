import { useRouter } from 'next/router'
import { Layout } from '../../../components/organisms/artist/Layout'

const Contact = () => {
  const router = useRouter()
  const { userId } = router.query

  return (
    <Layout description={`${userId} portfolio | Contact`} keywords={[userId]}>
      <section>
        <div>Contact | {userId}</div>
      </section>
    </Layout>
  )
}

export default Contact
