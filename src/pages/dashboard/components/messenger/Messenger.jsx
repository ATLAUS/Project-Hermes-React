import './Messenger.scss'
import { socket } from '../../../../socket'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../App'
import { useAuth0 } from '@auth0/auth0-react'
import { MessengerCard } from './components/MessengerCard'

export const Messenger = () => {
  const [messages, setMessages] = useState(null)
  const { activeParty } = useContext(UserContext)
  const { user, getAccessTokenSilently } = useAuth0()
  const userId = user.sub.split('|')[1]

  // TODO move these connection functions to a useEffect
  const connect = () => {
    socket.auth = { userId: userId, partyId: activeParty.id }
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

      console.log(response)
    } catch (e) {
      console.log(`Error: ${e}`)
    }
  }

  // TODO Implement useEffect function here
  // On render it should get all the messages for the party
  // and then connect to the socket.

  useEffect(() => {
    activeParty && (connect(), fetchMessages())

    return () => {
      disconnect()
    }
  })

  return (
    <>
      {activeParty && <p>{activeParty.id}</p>}
      <MessengerCard messages={messages} />
    </>
  )
}
