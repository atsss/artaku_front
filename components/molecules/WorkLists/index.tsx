// import style from './style.module.sass'
import Image from 'next/image'
import { Section } from '../../atoms/Section'
import { Txt, SubTxt } from '../../atoms/Txt'

export interface Props {
  works: any // FIXME
}

const List = ({title, material, src}) => (
  <li>
    <Image src={src} width={500} height={500} />
    <Txt size="s" font="sans">{title}</Txt>
    <SubTxt size="s" font="sans">{material}</SubTxt>
  </li>
)

export const WorkLists: React.FC<Props> = ({ works }) => (
  <Section color="#FAFAFA">
    <ul className="grid grid-cols-4 gap-4">
      { works.map((work) => <List key={work.id} title={work.title} material={work.material} src={work.image} />) }
    </ul>
  </Section>
)
