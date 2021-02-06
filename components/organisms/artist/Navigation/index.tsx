// import style from './style.module.sass'
import Link from 'next/link'
import { Txt } from '../../../atoms/Txt'
import { User } from '../../../../interfaces'

interface Props {
  user: User
}

export const Navigation: React.FC<Props> = ({ user }) => (
  <>
    <Txt tag="h1" size="l" font="sans">
      {user.name}
    </Txt>
    <nav className="flex flex-col">
      {/* <Txt size="s" font="sans" className="mt-2"> */}
      {/*   <Link href={`/artist/${user.slug}`}>Home</Link> */}
      {/* </Txt> */}
      <Txt size="s" font="sans" className="mt-2">
        <Link href={`/artist/${user.slug}/about`}>About</Link>
      </Txt>
      <Txt size="s" font="sans" className="mt-2">
        <Link href={`/artist/${user.slug}/works`}>Works</Link>
      </Txt>
      {/* <Txt size="s" font="sans" className="mt-2"> */}
      {/*   <Link href={`/artist/${user.slug}/events`}>Events</Link> */}
      {/* </Txt> */}
      {/* <Txt size="s" font="sans" className="mt-2"> */}
      {/*   <Link href={`/artist/${user.slug}/contact`}>Contact</Link> */}
      {/* </Txt> */}
    </nav>
  </>
)
