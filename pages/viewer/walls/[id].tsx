import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { Loading } from '../../../components/atoms/Loading'

const WallShow = (): JSX.Element => {
  const [url, setUrl] = useState(null)
  const router = useRouter()
  const { id } = router.query

  const socketUrl = 'ws://localhost:50272/cable'
  const subscribeParams = {
    command: 'subscribe',
    identifier: `{"channel":"WallsChannel", "id": ${id}}`,
  }
  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl)

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
    if (json && json.identifier && json.message)
      setUrl(json.message.content_url)
  }, [lastMessage])

  if (connectionStatus == 'Connecting') return <Loading />

  return <p>{url}</p>
}

export default WallShow
