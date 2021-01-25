import { useRouter } from 'next/router'
import { Layout } from '../../../components/organisms/artist/Layout'
import { data } from '../../../public/data'

const Contact = () => {
  const router = useRouter()
  const { slug } = router.query
  const userData = addHeaderInfo(data)

  return (
    <Layout user={userData}>
      <section>
        <div>Contact | {slug}</div>
      </section>
    </Layout>
  )
}

const addHeaderInfo = (data) => {
  const description = `${data.slug} portfolio | Contact`
  const keywords = [data.slug]

  return ({...data, description, keywords})
}

export default Contact
