import { useRouter } from 'next/router'
import { i18n } from '../../../../public/i18n'
import style from './style.module.sass'
import { Txt } from '../../../atoms/Txt'
import { Section } from '../../../atoms/Section'

export const Footer = (): JSX.Element => {
  const router = useRouter()
  const { locale, pathname } = router
  const isArtist = pathname.includes('artist')

  return (
    <footer>
      <Section>
        <div className={style.block}>
          <Txt tag="h2" size="xl" weight="bold" font="sans" position="center">
            {isArtist ? i18n[locale].artist.footer : i18n[locale].user.footer}
          </Txt>
          <div className="flex justify-center">
            <iframe
              src={
                isArtist
                  ? i18n[locale].artist.embeddedForm.src
                  : i18n[locale].user.embeddedForm.src
              }
              width="640"
              height={
                isArtist
                  ? i18n[locale].artist.embeddedForm.height
                  : i18n[locale].user.embeddedForm.height
              }
            >
              Loading…
            </iframe>
          </div>
        </div>
      </Section>
    </footer>
  )
}
