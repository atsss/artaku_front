import { useRouter } from 'next/router'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { Section } from '../../../components/atoms/Section'
import { Txt } from '../../../components/atoms/Txt'
import { Layout } from '../../../components/organisms/artist/Layout'
import { GET_ARTIST } from '../../../graphqls/queries'

const About = () => {
  const router = useRouter()
  const { slug } = router.query

  const { loading, error, data } = useQuery(GET_ARTIST, {
    variables: { slug },
  })

  if (loading) return <p>Loading ...</p>
  if (error) return <div>Error</div>

  const user = data.artist

  return (
    <Layout user={user} metaData={metaData(user)}>
      <Section isGray>
        <div className="flex justify-center">
          <Image src={user.imageUrl} width={500} height={500} />
        </div>
        {user.descriptions &&
          user.descriptions.map((description, index) => (
            <Txt key={index} font="serif" className="mt-4">
              {description}
            </Txt>
          ))}
      </Section>
    </Layout>
  )
}

const metaData = (user) => {
  const description = `${user.slug} portfolio | About`
  const keywords = [user.slug]

  return { description, keywords }
}

export default About
