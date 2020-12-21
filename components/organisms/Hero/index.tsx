import style from './style.module.sass'
import { Section } from '../../atoms/Section'

export const Hero = (): JSX.Element => (
  <main className={style.body}>
    <Section image="/img/hero.jpg">
      <div className={style.block}>
        <h1 className="text-right">
          <p>Your</p>
          <p>Unlimited</p>
          <p>Artworks</p>
          <p>Storage</p>
          <p>In New York</p>
        </h1>
      </div>
    </Section>
  </main>
)
