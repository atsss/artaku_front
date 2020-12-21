import { useRouter } from 'next/router'
import { i18n } from '../../../public/i18n'
import style from './style.module.sass'
import { Section } from '../../atoms/Section'

export const Hero = (): JSX.Element => {
  const router = useRouter()
  const { locale } = router

  return (
    <main className={style.body}>
      <Section image="/img/hero.jpg">
        <div className={style.block}>
          <h1 className="text-right">
            <p>Your</p>
            <p>Unlimited</p>
            <p>Artworks</p>
            <p>Storage</p>
            <p>{i18n[locale].hero}</p>
          </h1>
        </div>
      </Section>
    </main>
  )
}
