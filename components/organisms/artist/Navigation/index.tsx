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
    <nav className="flex md:flex-col md:mt-4 flex-row mt-2">
      <Txt size="s" font="sans" className="mt-2">
        <Link href={`/${user.slug}`}>About</Link>
      </Txt>
      <Txt size="s" font="sans" className="mt-2 ml-6 md:ml-0">
        <Link href={`/${user.slug}/works`}>Works</Link>
      </Txt>
    </nav>
  </>
)
