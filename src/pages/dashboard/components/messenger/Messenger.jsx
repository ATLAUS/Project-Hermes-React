import './Messenger.scss'
import { socket } from '../../../../socket'

export const Messenger = () => {
  const connect = () => {
    socket.connect()
  }

  const disconnect = () => {
    socket.disconnect()
  }
  return (
    <>
      <p className="messenger">Messenger goes here!!!</p>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </>
  )
}
