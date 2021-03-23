import { SubLink } from '../../../atoms/Link'
import { Section } from '../../../atoms/Section'
import { Txt, SubTxt } from '../../../atoms/Txt'
import { TwoColumn } from '../../..//molecules/TwoColumn'

export const Services = (): JSX.Element => {
  return (
    <Section isPadding>
      <Txt tag="h2" size="xl" weight="bold" font="sans" position="center">
        Join Artaku!
      </Txt>
      <TwoColumn src="/img/hero02.jpg" isReversed className="mt-10">
        <Txt tag="h3" size="l" weight="bold" font="sans">
          For art lovers
        </Txt>
        <SubTxt>
          Create your home gallery In NYC! We deliver different artworks to your
          home every week. All you have to do is just stay at your home and
          appreciate original artwork.
        </SubTxt>
        <SubLink href="/service/user" size="l" className="m-auto mt-10">
          See more
        </SubLink>
      </TwoColumn>
      <TwoColumn src="/img/hero01.jpg" className="mt-16">
        <Txt tag="h3" size="l" weight="bold" font="sans">
          For artists
        </Txt>
        <SubTxt>
          Expose your artworks in home gallery! We find better art lovers for
          you every week. At the same time, we optimize the matching between you
          and art lovers using machine learning. You will get more and better
          exposure here.
        </SubTxt>
        <SubLink href="/service/artist" size="l" className="m-auto mt-10">
          See more
        </SubLink>
      </TwoColumn>
    </Section>
  )
}
