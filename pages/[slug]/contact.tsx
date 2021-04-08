import { useRouter } from 'next/router'
import { Layout } from '../../../components/organisms/artist/Layout'
import { data } from '../../../public/data'

const Contact = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Layout user={data} metaData={metaData(data)}>
      <section>
        <div>Contact | {slug}</div>
      </section>
    </Layout>
  )
}

const metaData = (data) => {
  const description = `${data.slug} portfolio | Contact`
  const keywords = [data.slug]

  return { description, keywords }
}

export default Contact
