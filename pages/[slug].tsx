import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { Loading } from '../components/atoms/Loading'
import { Section } from '../components/atoms/Section'
import { Txt } from '../components/atoms/Txt'
import { Layout } from '../components/organisms/artist/Layout'
import { ProfileSummary } from '../components/organisms/artist/ProfileSummary'
import { GET_ARTIST } from '../graphqls/queries'

const About = () => {
  const router = useRouter()
  const { slug } = router.query

  const { loading, error, data } = useQuery(GET_ARTIST, {
    variables: { slug },
  })

  if (loading) return <Loading />
  if (error) return <div>Error</div>

  const user = data.artist

  return (
    <Layout user={user} metaData={metaData(user)}>
      <ProfileSummary user={user} />
      <Section isGray>
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
