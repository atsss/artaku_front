// import style from './style.module.sass'
import Link from 'next/link'
import { Txt } from '../../../atoms/Txt'

interface Props { user: any  } // FIXME

export const Navigation: React.FC<Props> = ({user}) => (
  <>
    <Txt tag="h1" size="l" font="sans">{user.name}</Txt>
    <nav className="flex flex-col">
      {/* <Txt size="s" font="sans" className="mt-2"> */}
      {/*   <Link href={`/artist/${user.userId}`}>Home</Link> */}
      {/* </Txt> */}
      <Txt size="s" font="sans" className="mt-2">
        <Link href={`/artist/${user.userId}/about`}>About</Link>
      </Txt>
      <Txt size="s" font="sans" className="mt-2">
        <Link href={`/artist/${user.userId}/works`}>Works</Link>
      </Txt>
      {/* <Txt size="s" font="sans" className="mt-2"> */}
      {/*   <Link href={`/artist/${user.userId}/events`}>Events</Link> */}
      {/* </Txt> */}
      {/* <Txt size="s" font="sans" className="mt-2"> */}
      {/*   <Link href={`/artist/${user.userId}/contact`}>Contact</Link> */}
      {/* </Txt> */}
    </nav>
  </>
)
