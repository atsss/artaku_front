import Image from 'next/image'
import { Txt, SubTxt } from '../../atoms/Txt'

export interface Props {
  src: string
  title: string
  completedDate: string
}

export const WorkList: React.FC<Props> = ({ src, title, completedDate }) => (
  <>
    <Image src={src} width={1600} height={900} />
    <Txt size="s" font="sans">
      {title}
    </Txt>
    <SubTxt size="s" font="sans">
      {completedDate}
    </SubTxt>
  </>
)
