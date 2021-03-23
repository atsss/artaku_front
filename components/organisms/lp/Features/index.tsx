import { i18n } from '../../../../public/i18n'
import { useRouter } from 'next/router'
import { Section } from '../../../atoms/Section'
import { Txt } from '../../../atoms/Txt'
import { DefaultTwoColumn } from '../../..//molecules/TwoColumn'

export const Features = (): JSX.Element => {
  const router = useRouter()
  const { locale, pathname } = router
  const isArtist = pathname.includes('artist')

  const baseNum = isArtist ? 1 : 4
  const category = isArtist ? 'artist' : 'user'
  const srcs = [0, 1, 2].map((element) => `/img/block0${baseNum + element}.jpg`)

  return (
    <Section isPadding>
      <Txt tag="h2" size="xl" weight="bold" font="sans" position="center">
        Why join Artaku
      </Txt>
      <DefaultTwoColumn
        src={srcs[0]}
        title={i18n[locale][category].sections[0].title}
        values={i18n[locale][category].sections[0].values}
        isReversed
        className="mt-10"
      />
      <DefaultTwoColumn
        src={srcs[1]}
        title={i18n[locale][category].sections[1].title}
        values={i18n[locale][category].sections[1].values}
        className="mt-16"
      />
      <DefaultTwoColumn
        src={srcs[2]}
        title={i18n[locale][category].sections[2].title}
        values={i18n[locale][category].sections[2].values}
        isReversed
        className="mt-16 mb-16"
      />
    </Section>
  )
}
