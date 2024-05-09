import { socket } from '../../../../../socket'
import { useContext, useState } from 'react'
import './MessengerCard.scss'
import SendIcon from '@mui/icons-material/Send'
import { UserContext } from '../../../../../App'

export const MessengerCard = ({ messages, activeParty }) => {
  const { userInfo } = useContext(UserContext)
  const [message, setMessage] = useState('')
  const [socketMessages, setSocketMessages] = useState([...messages])

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const sendMessage = (e) => {
    const partyId = activeParty?.id
    const userId = userInfo?.id
    const chatId = activeParty?.Chat.id

    e.preventDefault()
    socket.volatile.emit('send-message', {
      message,
      to: partyId,
      userId,
      chatId
    })
    setMessage('')
  }

  // TODO Verify useEffect is NOT needed here or if it is, how to
  // use it properly. Maybe useMemo?
  socket.on('return-message', ({ newMessage }) => {
    let messageArr = [...socketMessages]
    messageArr.push(newMessage)
    setSocketMessages(messageArr)
  })

  return (
    <div className="messenger-card">
      <div className="message-display">
        {socketMessages.length > 0
          ? socketMessages.map((message) => (
              <div key={message.id}>{message.message}</div>
            ))
          : null}
      </div>
      <form className="message-input" onSubmit={sendMessage}>
        <input
          className="input"
          placeholder="Message"
          value={message}
          onChange={handleChange}
        />
        <button className="send-btn" type="submit">
          <SendIcon />
        </button>
      </form>
    </div>
  )
}
