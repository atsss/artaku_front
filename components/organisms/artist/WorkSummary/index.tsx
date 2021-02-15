import { Section } from '../../../atoms/Section'
import { Txt, SubTxt } from '../../../atoms/Txt'
import { ImgWithModal } from '../../../molecules/ImgWithModal'
import { Artwork } from '../../../../interfaces'

export interface Props {
  work: Artwork
}

export const WorkSummary: React.FC<Props> = ({ work }) => (
  <Section isGray>
    <Txt tag="h2" size="l" font="sans">
      {work.title}
    </Txt>
    <SubTxt size="s">{work.completedAt || 'Working in progress'}</SubTxt>
    <div className="mt-8">
      <ImgWithModal src={work.thumbnailUrl} />
    </div>
    <Txt className="mt-8">{work.description}</Txt>
    <div className="mt-8">
      <SubTxt size="s">Material: {work.paintingMethod}</SubTxt>
      <SubTxt size="s">Size: {work.size}</SubTxt>
    </div>
  </Section>
)
