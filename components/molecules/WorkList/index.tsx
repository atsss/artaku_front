import Image from 'next/image'
import { Txt, SubTxt } from '../../atoms/Txt'

export interface Props {
  src: string
  title: string
  material: string
}

export const WorkList: React.FC<Props> = ({ src, title, material }) => (
  <>
    <Image src={src} width={600} height={400} />
    <Txt size="s" font="sans">
      {title}
    </Txt>
    <SubTxt size="s" font="sans">
      {material}
    </SubTxt>
  </>
)
