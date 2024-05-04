import './Messenger.scss'
import { socket } from '../../../../socket'
import { useContext } from 'react'
import { UserContext } from '../../../../App'

export const Messenger = () => {
  const { parties } = useContext(UserContext)
  // console.log(parties)
  const connect = () => {
    socket.connect()
  }

  const disconnect = () => {
    socket.disconnect()
  }
  return (
    <>
      {parties && <p>Party Id: {parties[0].id}</p>}
      <p className="messenger">Messenger goes here!!!</p>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </>
  )
}
