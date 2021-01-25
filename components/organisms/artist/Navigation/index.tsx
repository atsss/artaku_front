// import style from './style.module.sass'
import Link from 'next/link'

interface Props { userId: number }

export const Navigation: React.FC<Props> = ({userId}) => (
  <>
    <h1>{userId}</h1>
    <nav className="flex flex-col">
      {/* <Link href={`/artist/${userId}`}>Home</Link> */}
      <Link href={`/artist/${userId}/about`}>About</Link>
      <Link href={`/artist/${userId}/works`}>Works</Link>
      {/* <Link href={`/artist/${userId}/events`}>Events</Link> */}
      {/* <Link href={`/artist/${userId}/contact`}>Contact</Link> */}
    </nav>
  </>
)
