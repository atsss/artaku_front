import { useRouter } from 'next/router'
import { Layout } from '../../components/organisms/artist/Layout'
import { data } from '../../public/data'

const Home = () => {
  const router = useRouter()
  const { slug } = router.query
  const userData = addHeaderInfo(data)

  return (
    <Layout user={userData}>
      <section>
        <div>Home | {slug}</div>
      </section>
    </Layout>
  )
}

const addHeaderInfo = (data) => {
  const description = `${data.slug} portfolio | Home`
  const keywords = [data.slug]

  return { ...data, description, keywords }
}

export default Home
