import Image from 'next/image'
import { Section } from '../../../atoms/Section'
import { Txt, SubTxt } from '../../../atoms/Txt'
import { Youtube } from '../../../atoms/Youtube'
import { Process } from '../../../../interfaces'

export interface Props {
  processes: Process[]
}

export const ProcessLists: React.FC<Props> = ({ processes }) => (
  <>
    {processes.map((pro) => (
      <Section key={pro.id} className="mt-16" isGray>
        <Txt tag="h3" font="sans">
          {pro.doneAt}
        </Txt>
        {pro.summaryVideoId && (
          <Youtube id={pro.summaryVideoId} className="mt-4" />
        )}
        {pro.descriptions &&
          pro.descriptions.map((description, index) => (
            <SubTxt key={index} size="s" className="mt-4">
              {description}
            </SubTxt>
          ))}
        {pro.imageUrls &&
          pro.imageUrls.map((imageUrl, index) => (
            <div key={index} className="mt-8">
              <Image src={imageUrl} width={800} height={500} />
            </div>
          ))}
        {pro.videoIds &&
          pro.videoIds.map((videoId, index) => (
            <div key={index} className="mt-8">
              <Youtube id={videoId} />
            </div>
          ))}
      </Section>
    ))}
  </>
)
