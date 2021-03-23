import Head from 'next/head'
import { useRouter } from 'next/router'
import { i18n } from '../public/i18n'
import { FadeInOut } from '../components/atoms/FadeInOut'
import { Artworks } from '../components/organisms/lp/Artworks'
import { Concept } from '../components/organisms/lp/Concept'
import { Header } from '../components/organisms/lp/Header'
import { RootHero } from '../components/organisms/lp/Hero'
import { Services } from '../components/organisms/lp/Services'

export const Home = (): JSX.Element => {
  const router = useRouter()
  const { locale } = router

  return (
    <FadeInOut>
      <Head>
        <title>Artaku</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={i18n[locale].description} />
        <meta name="keywords" content={i18n[locale].user.keywords.join(', ')} />
        <meta
          name="google-site-verification"
          content="ie20WsfJ9Mu7IQr6MYFJv7PdHfN-wnq8dl0s8z4TIUw"
        />
      </Head>
      <Header />
      <RootHero />
      <Concept />
      <Services />
      <Artworks />
    </FadeInOut>
  )
}

export default Home
