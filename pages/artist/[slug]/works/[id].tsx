import { useRouter } from 'next/router'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { Section } from '../../../../components/atoms/Section'
import { Txt, SubTxt } from '../../../../components/atoms/Txt'
import { Layout } from '../../../../components/organisms/artist/Layout'
import { ProcessLists } from '../../../../components/organisms/artist/ProcessLists'
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
  const processes = work.processes

  return (
    <Layout user={user} metaData={metaData(user, work)}>
      <Section isGray>
        <Txt tag="h2" size="l" font="sans">
          {work.title}
        </Txt>
        <SubTxt size="s">{work.completedAt || 'Working in progress'}</SubTxt>
        <div className="mt-8">
          <Image src={work.thumbnailUrl} width={600} height={400} />
        </div>
        <Txt className="mt-8">{work.description}</Txt>
        <div className="mt-8">
          <SubTxt size="s">Material: {work.paintingMethod}</SubTxt>
          <SubTxt size="s">Size: {work.size}</SubTxt>
        </div>
      </Section>
      {processes && <ProcessLists processes={processes} />}
    </Layout>
  )
}

const metaData = (user, work) => {
  const description = `${user.name} | ${work.title}`
  const keywords = [user.name, work.title]

  return { description, keywords }
}

export default WorkShow
