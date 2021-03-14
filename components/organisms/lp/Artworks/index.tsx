import style from './style.module.sass'
import { Section } from '../../../atoms/Section'
import { Button } from '../../../atoms/Button'

export const Artworks = (): JSX.Element => (
  <Section isGray>
    <div className={style.block}>
      <p className={style.text}>Our artwork </p>
      <Button
        href="https://www.instagram.com/artaku.art/"
        size="l"
        className="m-auto mt-10"
      >
        See all
      </Button>
    </div>
  </Section>
)
