// import { useMutation } from '@apollo/client'
import { Section } from '../../../atoms/Section'
import { Txt, SubTxt } from '../../../atoms/Txt'
import { ImgWithModal } from '../../../molecules/ImgWithModal'
import { Artwork } from '../../../../interfaces'
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
    </Section>
  )
}
