import style from './style.module.sass'
import Image from 'next/image'
import { Section } from '../../atoms/Section'
import { Txt, SubTxt } from '../../atoms/Txt'

export interface Props {
  src: string
  children?: React.ReactNode
  title?: string
  values?: [string]
  isReversed?: boolean
  className?: string
}

export const DefaultTwoColumn: React.FC<Props> = ({
  src,
  title,
  values,
  isReversed,
  className,
}) => (
  <Section className={className}>
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 grid-flow-row-dense">
      <div className={isReversed ? style.reversed : ''}>
        <Image src={src} width={1600} height={900} />
      </div>
      <div>
        <Txt tag="h3" size="l" weight="bold" font="sans">
          {title}
        </Txt>
        {values.map((value, index) => (
          <List key={index}>{value}</List>
        ))}
      </div>
    </div>
  </Section>
)

const List = ({ children }) => (
  <div className="md:mt-4 mt-1">
    <span className="mr-2 text-gray-400 font-bold">･</span>
    <SubTxt tag="span">{children}</SubTxt>
  </div>
)

export const TwoColumn: React.FC<Props> = ({
  src,
  children,
  isReversed,
  className,
}) => {
  return (
    <Section className={className}>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 grid-flow-row-dense">
        <div className={isReversed ? style.reversed : ''}>
          <Image src={src} width={1600} height={900} />
        </div>
        <div>{children}</div>
      </div>
    </Section>
  )
}
