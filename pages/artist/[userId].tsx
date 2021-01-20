import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Post = () => {
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
          <Link href="/">Home</Link>
          <Link href="/">Works</Link>
          <Link href="/">About</Link>
          <Link href="/">Events</Link>
          <Link href="/">Contact</Link>
        </nav>
      </section>
    </>
  )
}

export default Post
