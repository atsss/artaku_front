import { useRouter } from 'next/router'
import { i18n } from '../../../public/i18n'
import style from './style.module.sass'
import { Section } from '../../atoms/Section'
import { Button } from '../../atoms/Button'

export const Footer = (): JSX.Element => {
  const router = useRouter()
  const { locale, pathname } = router
  const isArtist = pathname.includes('artist')

  return (
    <footer>
      <Section color="#F1F1F1">
        <div className={style.block}>
          <p className={style.text}>
            {isArtist ? i18n[locale].artist.footer : i18n[locale].user.footer}
          </p>
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
          {/* <Button */}
          {/*   href={isArtist ? i18n[locale].artist.form : i18n[locale].user.form} */}
          {/*   size="l" */}
          {/*   className="m-auto mt-10" */}
          {/* > */}
          {/*   Apply now */}
          {/* </Button> */}
        </div>
      </Section>
    </footer>
  )
}
