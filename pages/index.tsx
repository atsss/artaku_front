import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from '../components/organisms/Footer'
import { Header } from '../components/organisms/Header'
import { Hero } from '../components/organisms/Hero'
import { TwoColumn } from '../components/molecules/TwoColumn'

export const Home = (): JSX.Element => {
  const router = useRouter()
  const { query, locale, locales, defaultLocale } = router

  console.log(query, locale, locales,defaultLocale);

  return (
    <>
      <Head>
        <title>Cocchi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <TwoColumn
        src="/img/block01.jpg"
        title="We will keep your countless art works instead of you"
        description="All you have to do is call us! Then we’ll take your art works and keep them instead of you. The number of art works is unlimited. Whenever you want to store your art works, you can call. That’s it! You don’t have to be worried about where to store them."
        isReversed
        className="mt-16"
      />
      <TwoColumn
        src="/img/block02.jpg"
        title="We will make your portfolio with professional photos of your art works"
        description="After we take your art works, we will take professional photos of them. Then we will make your personal page on Cocchi and upload them on it. You can use the personal page as your portfolio as well. You don’t have to spend time on making and updating your portfolio anymore!"
        className="mt-16"
      />
      <TwoColumn
        src="/img/block03.jpg"
        title="You can sell your art works through Cocchi"
        description="We can match your art works and art lovers in New York better with machine learning. Firstly we will rent your art works to the art lovers. Then if they like your art works, they buy them and we pay you for the art works. You don’t need galleries because you can sell your art works here!"
        isReversed
        className="mt-16 mb-16"
      />
      <Footer />
    </>
  )
}

export default Home
