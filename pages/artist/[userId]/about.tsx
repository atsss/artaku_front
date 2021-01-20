import { useRouter } from 'next/router'
import { Layout } from '../../../components/organisms/artist/Layout'

const About = () => {
  const router = useRouter()
  const { userId } = router.query

  return (
    <Layout description={`${userId} portfolio | About`} keywords={[userId]}>
      <section>
        <div>About | {userId}</div>
      </section>
    </Layout>
  )
}

export default About
