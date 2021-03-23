import Head from 'next/head'
import { useRouter } from 'next/router'
import { i18n } from '../../public/i18n'
import { FadeInOut } from '../../components/atoms/FadeInOut'
import { Footer } from '../../components/organisms/Footer'
import { Header } from '../../components/organisms/Header'
import { Hero } from '../../components/organisms/Hero'
import { Artworks } from '../../components/organisms/lp/Artworks'
import { Concept } from '../../components/organisms/lp/Concept'
import { Features } from '../../components/organisms/lp/Features'

export const User = (): JSX.Element => {
  const router = useRouter()
  const { locale } = router

  return (
    <FadeInOut>
      <Head>
        <title>Artaku</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={i18n[locale].description} />
        <meta name="keywords" content={i18n[locale].user.keywords.join(', ')} />
      </Head>
      <Header />
      <Hero />
      <Concept />
      <Features />
      <Artworks />
      <Footer />
    </FadeInOut>
  )
}

export default User
