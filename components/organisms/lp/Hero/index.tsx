import { useRouter } from 'next/router'
import { i18n } from '../../../../public/i18n'
import style from './style.module.sass'
import { Section } from '../../../atoms/Section'

export const Hero = (): JSX.Element => {
  const router = useRouter()
  const { locale, pathname } = router
  const isArtist = pathname.includes('artist')
  const texts = isArtist ? i18n[locale].artist.hero : i18n[locale].user.hero

  return (
    <main className={style.body}>
      <Section image="/img/hero02.jpg">
        <div className={style.block}>
          <h1 className="text-right">
            {texts.map((text: string, index: number) => (
              <p key={index}>{text}</p>
            ))}
          </h1>
        </div>
      </Section>
    </main>
  )
}
