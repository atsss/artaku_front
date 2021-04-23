// import { useMutation } from '@apollo/client'
import { Section } from '../../../atoms/Section'
import { Txt, SubTxt } from '../../../atoms/Txt'
import { ImgWithModal } from '../../../molecules/ImgWithModal'
import { Artwork, Reference } from '../../../../interfaces'
// import { UPDATE_WALL } from '../../../../graphqls/mutations'
// import { GET_WALL } from '../../../../graphqls/queries'

export interface Props {
  work: Artwork
}

export const WorkSummary: React.FC<Props> = ({ work }) => {
  // const [updateWall] = useMutation(UPDATE_WALL, {
  //   update: (cache, { data: { updatedWall } }) => {
  //     cache.writeQuery({
  //       query: GET_WALL,
  //       data: { wall: updatedWall },
  //     })
  //   },
  //   variables: { id: 1, contentUrl: work.thumbnailUrl }, // FIXME: make id dynamic
  // })

  return (
    <Section isGray>
      <Txt tag="h2" size="l" font="sans">
        {work.title}
      </Txt>
      <SubTxt size="s">{work.completedDate || 'Working in progress'}</SubTxt>
      <div className="mt-8">
        <ImgWithModal src={work.thumbnailUrl} />
      </div>
      <Txt className="mt-8">{work.description}</Txt>
      {work.references && <Links references={work.references} />}
    </Section>
  )
}

interface LinksProp {
  references: Reference[]
}

const Links: React.FC<LinksProp> = ({ references }) => (
  <div className="mt-8 flex">
    {references.map((reference, index) => (
      <SubTxt
        key={reference.id}
        className={`underline ${index === 0 ? '' : 'ml-4'}`}
      >
        <a href={reference.url} target="_blank" rel="noreferrer">
          {reference.kind}
        </a>
      </SubTxt>
    ))}
  </div>
)
