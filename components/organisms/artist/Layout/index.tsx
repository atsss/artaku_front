import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  description?: string
  keywords?: string[]
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({description, keywords, children}) => {
  const router = useRouter()
  const { userId } = router.query

  return (
    <>
      <Head>
        <title>Artaku</title>
        <link rel="icon" href="/favicon.ico" />
        { description && (<meta name="description" content={description} />) }
        { keywords && (<meta name="keywords" content={keywords.join(', ')} />) }
      </Head>
      <aside>
        <h1>{userId}</h1>
        <nav>
          <Link href={`/artist/${userId}`}>Home</Link>
          <Link href={`/artist/${userId}/works`}>Works</Link>
          <Link href={`/artist/${userId}/about`}>About</Link>
          <Link href={`/artist/${userId}/events`}>Events</Link>
          <Link href={`/artist/${userId}/contact`}>Contact</Link>
        </nav>
      </aside>
      <main>{children}</main>
    </>
  )
}
