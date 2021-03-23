import { Txt } from '../../../atoms/Txt'
import { Section } from '../../../atoms/Section'
import { Youtube } from '../../../atoms/Youtube'

export const Concept = (): JSX.Element => (
  <Section isGray isPadding>
    <Txt tag="h2" size="xl" weight="bold" font="sans" position="center">
      Concept video
    </Txt>
    <Youtube id="eZPRo8yHKtk" className="mt-10 flex justify-center" />
  </Section>
)
