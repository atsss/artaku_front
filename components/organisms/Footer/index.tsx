import style from './style.module.sass'
import { Section } from '../../atoms/Section'
import { Button } from '../../atoms/Button'

export const Footer = (): JSX.Element => (
  <footer>
    <Section color="#F1F1F1">
      <div className={style.block}>
        <p className={style.text}>$200 per month</p>
        <Button href="https://tailwindcss.com/docs/vertical-align" size="l" className="m-auto mt-12">Apply now</Button>
      </div>
    </Section>
  </footer>
)
