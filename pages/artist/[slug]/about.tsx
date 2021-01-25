// import { useRouter } from 'next/router'
import Image from 'next/image'
import { Section } from '../../../components/atoms/Section'
import { Txt } from '../../../components/atoms/Txt'
import { Layout } from '../../../components/organisms/artist/Layout'
import { data } from '../../../public/data'

const About = () => {
  // const router = useRouter()
  // const { slug } = router.query
  const userData = addHeaderInfo(data)

  return (
    <Layout user={userData}>
      <Section color="#FAFAFA">
        <div className="flex justify-center">
          <Image src={userData.image} width={500} height={500} />
        </div>
        {userData.descriptions.map((description, index) => (
          <Txt key={index} font="serif" className="mt-4">
            {description}
          </Txt>
        ))}
      </Section>
    </Layout>
  )
}

const addHeaderInfo = (data) => {
  const description = `${data.slug} portfolio | About`
  const keywords = [data.slug]

  return { ...data, description, keywords }
}

export default About
