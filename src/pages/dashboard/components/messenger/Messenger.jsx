import './Messenger.scss'
import { socket } from '../../../../socket'
import { useContext } from 'react'
import { UserContext } from '../../../../App'
import { useAuth0 } from '@auth0/auth0-react'
import { MessengerCard } from './components/MessengerCard'

export const Messenger = () => {
  const { activeParty } = useContext(UserContext)
  const { user } = useAuth0()
  const userId = user.sub.split('|')[1]

  // TODO move these connection functions to a useEffect
  const connect = () => {
    socket.auth = { userId: userId, partyId: activeParty.id }
    socket.connect()
  }
  const disconnect = () => {
    socket.disconnect()
  }

  // TODO Implement useEffect function here
  // On render it should get all the messages for the party
  // and then connect to the socket.

  return (
    <>
      {activeParty && <p>{activeParty.id}</p>}
      <MessengerCard />
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </>
  )
}
