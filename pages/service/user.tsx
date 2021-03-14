import Head from 'next/head'
import { useRouter } from 'next/router'
import { i18n } from '../../public/i18n'
import { FadeInOut } from '../../components/atoms/FadeInOut'
import { Footer } from '../../components/organisms/Footer'
import { Header } from '../../components/organisms/Header'
import { Hero } from '../../components/organisms/Hero'
import { Artworks } from '../../components/organisms/lp/Artworks'
import { TwoColumn } from '../../components/molecules/TwoColumn'

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
      <TwoColumn
        src="/img/block04.jpg"
        title={i18n[locale].user.sections[0].title}
        values={i18n[locale].user.sections[0].values}
        isReversed
        className="mt-16"
      />
      <TwoColumn
        src="/img/block05.jpg"
        title={i18n[locale].user.sections[1].title}
        values={i18n[locale].user.sections[1].values}
        className="mt-16"
      />
      <TwoColumn
        src="/img/block06.jpg"
        title={i18n[locale].user.sections[2].title}
        values={i18n[locale].user.sections[2].values}
        isReversed
        className="mt-16 mb-16"
      />
      <Artworks />
      <Footer />
    </FadeInOut>
  )
}

export default User
