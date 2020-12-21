import style from './style.module.sass'
import { Section } from '../../atoms/Section'
import { Button } from '../../atoms/Button'

export const Header = (): JSX.Element => (
  <header className={style.body}>
    <Section>
      <div className={style.block}>
        <div className={style.title}>Cocchi</div>
        <Button href="https://tailwindcss.com/docs/vertical-align">Apply now</Button>
      </div>
    </Section>
  </header>
)
