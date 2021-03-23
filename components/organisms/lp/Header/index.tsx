import Link from 'next/link'
import { useRouter } from 'next/router'
import { i18n } from '../../../../public/i18n'
import style from './style.module.sass'
import { Section } from '../../../atoms/Section'
import { ExternalLink } from '../../../atoms/Link'

export const Header = (): JSX.Element => {
  const router = useRouter()
  const { locale, pathname } = router
  const isArtist = pathname.includes('artist')

  return (
    <header className={style.body}>
      <Section>
        <div className={style.block}>
          <Link href="/">
            <a className={style.title}>Artaku</a>
          </Link>
          <ExternalLink
            href={isArtist ? i18n[locale].artist.form : i18n[locale].user.form}
          >
            Apply now
          </ExternalLink>
        </div>
      </Section>
    </header>
  )
}
