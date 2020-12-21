import style from './style.module.sass'
import { Section } from '../../atoms/Section'

export const Hero = (): JSX.Element => (
  <main className={[style.body, "font-sans", "text-8xl", "leading-tight"].join(' ')}>
    <Section image="/img/hero.jpg">
      <div className={style.block}>
        <div className="text-right">
          <p>Your</p>
          <p>Unlimited</p>
          <p>Artworks</p>
          <p>Storage</p>
          <p>In New York</p>
        </div>
      </div>
    </Section>
  </main>
)
