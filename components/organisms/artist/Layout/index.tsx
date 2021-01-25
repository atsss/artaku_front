import Head from 'next/head'
import Link from 'next/link'
import style from './style.module.sass'

interface Props {
  user: any // FIXME
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({user, children}) => (
  <>
    <Head>
      <title>Artaku</title>
      <link rel="icon" href="/favicon.ico" />
      { user.description && (<meta name="description" content={user.description} />) }
      { user.keywords && (<meta name="keywords" content={user.keywords.join(', ')} />) }
    </Head>
    <div className="flex">
      <aside className="w-1/4 p-6">
        <h1>{user.userId}</h1>
        <nav className="flex flex-col">
          <Link href={`/artist/${user.userId}`}>Home</Link>
          <Link href={`/artist/${user.userId}/works`}>Works</Link>
          <Link href={`/artist/${user.userId}/about`}>About</Link>
          <Link href={`/artist/${user.userId}/events`}>Events</Link>
          <Link href={`/artist/${user.userId}/contact`}>Contact</Link>
        </nav>
      </aside>
      <main className={[style.main, "w-3/4", "p-6"].join(' ')}>{children}</main>
    </div>
  </>
)
