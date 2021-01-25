import Head from 'next/head'
import style from './style.module.sass'
import { Navigation } from '../Navigation'

interface Props {
  user: any // FIXME
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ user, children }) => (
  <>
    <Head>
      <title>Artaku</title>
      <link rel="icon" href="/favicon.ico" />
      {user.description && (
        <meta name="description" content={user.description} />
      )}
      {user.keywords && (
        <meta name="keywords" content={user.keywords.join(', ')} />
      )}
    </Head>
    <div className="flex">
      <aside className="w-1/4 p-6">
        <Navigation user={user} />
      </aside>
      <main className={[style.main, 'w-3/4', 'p-6'].join(' ')}>{children}</main>
    </div>
  </>
)
