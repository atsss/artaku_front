// import style from './style.module.sass'
import Link from 'next/link'
import { Txt } from '../../../atoms/Txt'

interface Props { userId: number }

export const Navigation: React.FC<Props> = ({userId}) => (
  <>
    <h1>{userId}</h1>
    <nav className="flex flex-col">
      {/* <Txt size="s" font="sans"> */}
      {/*   <Link href={`/artist/${userId}`}>Home</Link> */}
      {/* </Txt> */}
      <Txt size="s" font="sans">
        <Link href={`/artist/${userId}/about`}>About</Link>
      </Txt>
      <Txt size="s" font="sans" className="mt-2">
        <Link href={`/artist/${userId}/works`}>Works</Link>
      </Txt>
      {/* <Txt size="s" font="sans" className="mt-2"> */}
      {/*   <Link href={`/artist/${userId}/events`}>Events</Link> */}
      {/* </Txt> */}
      {/* <Txt size="s" font="sans" className="mt-2"> */}
      {/*   <Link href={`/artist/${userId}/contact`}>Contact</Link> */}
      {/* </Txt> */}
    </nav>
  </>
)
