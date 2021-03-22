import style from './style.module.sass'
import Image from 'next/image'
import { SubButton } from '../../../atoms/Button'
import { Txt } from '../../../atoms/Txt'
import { Section } from '../../../atoms/Section'

export const Artworks = (): JSX.Element => (
  <Section isGray>
    <div className={style.block}>
      <Txt tag="h2" size="xl" weight="bold" font="sans" position="center">
        Our artworks
      </Txt>
      <ul className={[style.lists, 'mt-10'].join(' ')}>
        <li className={style.list}>
          <Image src="/img/artwork01.jpg" width={500} height={500} />
        </li>
        <li className={style.list}>
          <Image src="/img/artwork02.jpg" width={500} height={500} />
        </li>
        <li className={style.list}>
          <Image src="/img/artwork03.jpg" width={500} height={500} />
        </li>
      </ul>
      <SubButton
        href="https://www.instagram.com/artaku.art/"
        size="l"
        className="m-auto mt-10"
      >
        See all
      </SubButton>
    </div>
  </Section>
)
