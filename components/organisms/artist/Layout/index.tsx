import Head from 'next/head'
import style from './style.module.sass'
import { FadeInOut } from '../../../atoms/FadeInOut'
import { Navigation } from '../Navigation'
import { User } from '../../../../interfaces'

interface Props {
  user: User
  metaData: {
    description?: string
    keywords?: string[]
  }
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ user, metaData, children }) => (
  <FadeInOut>
    <Head>
      <title>Artaku</title>
      <link rel="icon" href="/favicon.ico" />
      {metaData.description && (
        <meta name="description" content={metaData.description} />
      )}
      {metaData.keywords && (
        <meta name="keywords" content={metaData.keywords.join(', ')} />
      )}
    </Head>
    <div className="md:flex block">
      <aside className="md:w-1/4 w-full md:p-12 p-4">
        <Navigation user={user} />
      </aside>
      <main className={[style.main, 'md:w-3/4', 'w-full'].join(' ')}>
        <div className="md:p-12 md:pb-24 p-4 pb-12">{children}</div>
      </main>
    </div>
  </FadeInOut>
)
