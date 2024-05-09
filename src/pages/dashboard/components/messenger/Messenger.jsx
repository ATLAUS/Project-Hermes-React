import './Messenger.scss'
import { socket } from '../../../../socket'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../../../App'
import { useAuth0 } from '@auth0/auth0-react'
import { MessengerCard } from './components/MessengerCard'

export const Messenger = () => {
  const { activeParty, setMessages } = useContext(UserContext)
  const { user, getAccessTokenSilently } = useAuth0()
  const userId = user?.sub.split('|')[1]
  const partyId = activeParty?.id
  const chatId = activeParty?.Chat.id

  const connect = () => {
    socket.auth = {
      userId: userId,
      partyId: partyId,
      chatId: chatId
    }
    socket.connect()
  }
  const disconnect = () => {
    socket.disconnect()
  }

  // TODO Needs to go in the services file.
  const fetchMessages = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'http://localhost:3000/'
        }
      })

      const customUserHeader = {
        'X-User-Info': JSON.stringify({
          email: user.email,
          nickname: user.nickname,
          sub: user.sub
        })
      }

      const getMessages = `http://localhost:3000/api/messages/${activeParty.id}`

      const getMessagesResponse = await fetch(getMessages, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          ...customUserHeader
        }
      })

      const response = await getMessagesResponse.json()
      if (response.messages.length > 0) {
        setMessages(response.messages)
      }
    } catch (e) {
      console.log(`Error: ${e}`)
    }
  }

  useEffect(() => {
    activeParty && (connect(), fetchMessages())

    return () => {
      disconnect()
    }
  }, [activeParty])

  return (
    <>
      <div className="messenger-container">
        {activeParty && <MessengerCard />}
      </div>
    </>
  )
}
