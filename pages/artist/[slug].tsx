import { useRouter } from 'next/router'
import { Layout } from '../../components/organisms/artist/Layout'
import { data } from '../../public/data'

const Home = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Layout user={data} metaData={metaData(data)}>
      <section>
        <div>Home | {slug}</div>
      </section>
    </Layout>
  )
}

const metaData = (data) => {
  const description = `${data.slug} portfolio | Home`
  const keywords = [data.slug]

  return { description, keywords }
}

export default Home
