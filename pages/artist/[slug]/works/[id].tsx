import { useRouter } from 'next/router'
import Image from 'next/image'
import { Section } from '../../../../components/atoms/Section'
import { Txt, SubTxt } from '../../../../components/atoms/Txt'
import { Layout } from '../../../../components/organisms/artist/Layout'
import { data } from '../../../../public/data'

const WorkShow = () => {
  const router = useRouter()
  const { id } = router.query
  const work = getWork(id)

  if(!work) return <p>Error</p>

  const userData = addHeaderInfo(data, work)

  return (
    <Layout user={userData}>
      <Section color="#FAFAFA">
        <Txt size="l" font="sans">
          {work.title}
        </Txt>
        <SubTxt size="s">{work.completedAt}</SubTxt>
        <div className="mt-8">
          <Image src={work.image} width={500} height={500} />
        </div>
        <Txt className="mt-8">{work.description}</Txt>
        <div className="mt-8">
          <SubTxt size="s">Material: {work.material}</SubTxt>
          <SubTxt size="s">Size: {work.size}</SubTxt>
        </div>
      </Section>
    </Layout>
  )
}

const getWork = (id) => data.works.find((element) => element.id == id)

const addHeaderInfo = (data, work) => {
  const description = `${data.name} | ${work.title}`
  const keywords = [data.name, work.title]

  return { ...data, description, keywords }
}

export default WorkShow
