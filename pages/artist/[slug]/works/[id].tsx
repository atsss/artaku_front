import { useRouter } from 'next/router'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { Section } from '../../../../components/atoms/Section'
import { Txt, SubTxt } from '../../../../components/atoms/Txt'
import { Layout } from '../../../../components/organisms/artist/Layout'
import { GET_ARTWORK } from '../../../../graphqls/queries'

const WorkShow = () => {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(GET_ARTWORK, {
    variables: { id },
  })

  if (loading) return <p>Loading ...</p>
  if (error) return <div>Error</div>

  const work = data.artwork
  const user = work.author

  return (
    <Layout user={user} metaData={metaData(user, work)}>
      <Section color="#FAFAFA">
        <Txt size="l" font="sans">
          {work.title}
        </Txt>
        <SubTxt size="s">{work.completedAt}</SubTxt>
        <div className="mt-8">
          <Image src={work.thumbnailUrl} width={500} height={500} />
        </div>
        <Txt className="mt-8">{work.description}</Txt>
        <div className="mt-8">
          <SubTxt size="s">Material: {work.paintingMethod}</SubTxt>
          <SubTxt size="s">Size: {work.size}</SubTxt>
        </div>
      </Section>
    </Layout>
  )
}

const metaData = (user, work) => {
  const description = `${user.name} | ${work.title}`
  const keywords = [user.name, work.title]

  return { description, keywords }
}

export default WorkShow
