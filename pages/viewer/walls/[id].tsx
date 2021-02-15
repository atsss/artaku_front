import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { Loading } from '../../../components/atoms/Loading'
import { Section } from '../../../components/atoms/Section'
import { GET_WALL } from '../../../graphqls/queries'

const WallShow = (): JSX.Element => {
  const router = useRouter()
  const { id } = router.query

  const socketUrl = process.env.NEXT_PUBLIC_WEBSOCKET_URL
  const subscribeParams = {
    command: 'subscribe',
    identifier: `{"channel":"WallsChannel", "id": ${id}}`,
  }
  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl)

  const { loading, error, data, updateQuery } = useQuery(GET_WALL, {
    variables: { id },
  })

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState]

  useEffect(() => id && sendJsonMessage(subscribeParams), [id])
  useEffect(() => {
    const json = lastMessage ? JSON.parse(lastMessage.data) : null
    if (json && json.identifier && json.message) {
      updateQuery((prev) => ({
        wall: { ...prev.wall, contentUrl: json.message.content_url },
      }))
    }
  }, [lastMessage])

  if (loading || connectionStatus == 'Connecting') return <Loading />
  if (error) return <div>Error</div>

  const { wall } = data

  return (
    <div className="h-screen">
      <Section image={wall.contentUrl} />
    </div>
  )
}

export default WallShow
