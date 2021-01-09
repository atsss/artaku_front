import { useRouter } from 'next/router'
import { i18n } from '../../../public/i18n'
import style from './style.module.sass'
import { Section } from '../../atoms/Section'
import { Button } from '../../atoms/Button'

export const Footer = (): JSX.Element => {
  const router = useRouter()
  const { locale } = router

  return (
    <footer>
      <Section color="#F1F1F1">
        <div className={style.block}>
          <p className={style.text}>{i18n[locale].footer}</p>
          <Button href={i18n[locale].form} size="l" className="m-auto mt-10">Apply now</Button>
        </div>
      </Section>
    </footer>
  )
}
