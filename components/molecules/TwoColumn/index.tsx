import style from './style.module.sass'
import Image from 'next/image'
import { Section } from '../../atoms/Section'
import { Txt, SubTxt } from '../../atoms/Txt'

export interface Props {
  src: string
  title: string
  description: string
  isReversed?: boolean
  className?: string
}

export const TwoColumn: React.FC<Props> = ({ src, title, description, isReversed, className }) => (
  <Section className={className}>
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 grid-flow-row-dense">
      <div className={ isReversed ? style.reversed : "" }>
        <Image
          src={src}
          width={800}
          height={500}
        />
      </div>
      <div>
        <Txt tag="h2" weight="bold">{title}</Txt>
        <SubTxt size="s" className="mt-4">{description}</SubTxt>
      </div>
    </div>
  </Section>
)
