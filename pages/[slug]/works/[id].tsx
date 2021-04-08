import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { Loading } from '../../../components/atoms/Loading'
import { Layout } from '../../../components/organisms/artist/Layout'
import { ProcessLists } from '../../../components/organisms/artist/ProcessLists'
import { WorkSummary } from '../../../components/organisms/artist/WorkSummary'
import { GET_ARTWORK } from '../../../graphqls/queries'

const WorkShow = () => {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(GET_ARTWORK, {
    variables: { id },
  })

  if (loading) return <Loading />
  if (error) return <div>Error</div>

  const work = data.artwork
  const user = work.author
  const processes = work.processes

  return (
    <Layout user={user} metaData={metaData(user, work)}>
      <WorkSummary work={work} />
      {processes && <ProcessLists processes={processes} />}
    </Layout>
  )
}

const metaData = (user, work) => {
  const description = `${user.name} | ${work.title}`
  const keywords = [user.name, work.title]

  return { description, keywords }
}

export default WorkShow
