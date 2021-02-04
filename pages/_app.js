import '../styles/globals.sass'
import 'tailwindcss/tailwind.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import * as gatag from '../lib/gatag'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const apolloClient = useApollo(pageProps.initialApolloState)

  useEffect(() => {
    if (!gatag.existsGaId) return

    const handleRouteChange = (path) => gatag.pageview(path)

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
