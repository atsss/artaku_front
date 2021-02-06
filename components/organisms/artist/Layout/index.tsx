import Head from 'next/head'
import style from './style.module.sass'
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
  <>
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
    <div className="flex">
      <aside className="w-1/4 p-6">
        <Navigation user={user} />
      </aside>
      <main className={[style.main, 'w-3/4', 'p-6'].join(' ')}>{children}</main>
    </div>
  </>
)
