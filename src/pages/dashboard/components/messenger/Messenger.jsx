import './Messenger.scss'
import { socket } from '../../../../socket'
import { useContext } from 'react'
import { UserContext } from '../../../../App'

export const Messenger = () => {
  const { activeParty } = useContext(UserContext)
  console.log(activeParty)
  const connect = () => {
    socket.connect()
  }

  const disconnect = () => {
    socket.disconnect()
  }
  return (
    <>
      {activeParty && <p>{activeParty.id}</p>}
      <p className="messenger">Messenger goes here!!!</p>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </>
  )
}
