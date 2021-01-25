import { useRouter } from 'next/router'
import { Layout } from '../../../components/organisms/artist/Layout'
import { data } from '../../../public/data'

const Contact = () => {
  const router = useRouter()
  const { userId } = router.query
  const userData = addHeaderInfo(data)

  return (
    <Layout user={userData}>
      <section>
        <div>Contact | {userId}</div>
      </section>
    </Layout>
  )
}

const addHeaderInfo = (data) => {
  const description = `${data.userId} portfolio | Contact`
  const keywords = [data.userId]

  return ({...data, description, keywords})
}

export default Contact
