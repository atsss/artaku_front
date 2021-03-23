import { i18n } from '../../../../public/i18n'
import { useRouter } from 'next/router'
import { Section } from '../../../atoms/Section'
import { Txt } from '../../../atoms/Txt'
import { TwoColumn } from '../../..//molecules/TwoColumn'

export const Features = (): JSX.Element => {
  const router = useRouter()
  const { locale } = router

  return (
    <Section isPadding>
      <Txt tag="h2" size="xl" weight="bold" font="sans" position="center">
        Why join Artaku
      </Txt>
      <TwoColumn
        src="/img/block04.jpg"
        title={i18n[locale].user.sections[0].title}
        values={i18n[locale].user.sections[0].values}
        isReversed
        className="mt-10"
      />
      <TwoColumn
        src="/img/block05.jpg"
        title={i18n[locale].user.sections[1].title}
        values={i18n[locale].user.sections[1].values}
        className="mt-16"
      />
      <TwoColumn
        src="/img/block06.jpg"
        title={i18n[locale].user.sections[2].title}
        values={i18n[locale].user.sections[2].values}
        isReversed
        className="mt-16 mb-16"
      />
    </Section>
  )
}
