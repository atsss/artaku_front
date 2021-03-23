import { Section } from '../../../atoms/Section'
import { Txt } from '../../../atoms/Txt'
import { TwoColumn } from '../../..//molecules/TwoColumn'

export const Services = (): JSX.Element => {
  return (
    <Section isPadding>
      <Txt tag="h2" size="xl" weight="bold" font="sans" position="center">
        Join Artaku!
      </Txt>
      <TwoColumn src="/img/hero02.jpg" isReversed className="mt-10">
        <p>hello</p>
      </TwoColumn>
      <TwoColumn src="/img/hero01.jpg" className="mt-16">
        <p>hello</p>
      </TwoColumn>
    </Section>
  )
}
