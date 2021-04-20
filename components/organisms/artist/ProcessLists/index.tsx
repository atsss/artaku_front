// import { useMutation } from '@apollo/client'
import { Section } from '../../../atoms/Section'
import { SubTxt } from '../../../atoms/Txt'
import { Youtube } from '../../../atoms/Youtube'
import { ImgWithModal } from '../../../molecules/ImgWithModal'
import { Process } from '../../../../interfaces'
// import { UPDATE_WALL } from '../../../../graphqls/mutations'
// import { GET_WALL } from '../../../../graphqls/queries'

export interface Props {
  processes: Process[]
}

const ImageList = ({ imageUrl }) => {
  // const [updateWall] = useMutation(UPDATE_WALL, {
  //   update: (cache, { data: { updatedWall } }) => {
  //     cache.writeQuery({
  //       query: GET_WALL,
  //       data: { wall: updatedWall },
  //     })
  //   },
  //   variables: { id: 1, contentUrl: imageUrl }, // FIXME: make id dynamic
  // })

  return (
    <div className="mt-8">
      <ImgWithModal src={imageUrl} />
    </div>
  )
}

export const ProcessLists: React.FC<Props> = ({ processes }) => (
  <>
    {processes.map((pro) => (
      <Section key={pro.id} className="mt-16" isGray>
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
            <ImageList key={index} imageUrl={imageUrl} />
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
