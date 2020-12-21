import { useRouter } from 'next/router'
import { i18n } from '../../../public/i18n'
import style from './style.module.sass'
import { Section } from '../../atoms/Section'
import { Button } from '../../atoms/Button'

export const Header = (): JSX.Element => {
  const router = useRouter()
  const { locale } = router

  return (
    <header className={style.body}>
      <Section>
        <div className={style.block}>
          <div className={style.title}>Cocchi</div>
          <Button href={i18n[locale].form}>Apply now</Button>
        </div>
      </Section>
    </header>
  )
}
