import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const About = () => {
  const router = useRouter()
  const { userId } = router.query

  return (
    <>
      <Head>
        <title>Artaku</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={`${userId} portfolio | Home`} />
        <meta name="keywords" content={userId} />
      </Head>
      <section>
        <h1>{userId}</h1>
        <nav>
          <Link href={`/artist/${userId}`}>Home</Link>
          <Link href={`/artist/${userId}/works`}>Works</Link>
          <Link href={`/artist/${userId}/about`}>About</Link>
          <Link href={`/artist/${userId}/events`}>Events</Link>
          <Link href={`/artist/${userId}/contact`}>Contact</Link>
        </nav>
      </section>
      <main>
        <section>
          <div>About | {userId}</div>
        </section>
      </main>
    </>
  )
}

export default About
