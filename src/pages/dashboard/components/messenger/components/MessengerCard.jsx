import { socket } from '../../../../../socket'
import { useContext, useEffect, useState } from 'react'
import './MessengerCard.scss'
import SendIcon from '@mui/icons-material/Send'
import { UserContext } from '../../../../../App'

export const MessengerCard = () => {
  const { userInfo, activeParty, messages, setMessages } =
    useContext(UserContext)
  const [message, setMessage] = useState('')
  const partyId = activeParty?.id
  const userId = userInfo?.id
  const chatId = activeParty?.Chat.id

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const sendMessage = (e) => {
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
    if (!messages) {
      const messageArray = [newMessage]
      setMessages(messageArray)
      return
    }

    const messageArray = [...messages]
    messageArray.push(newMessage)
    setMessages(messageArray)
  })

  useEffect(() => {}, [messages])

  return (
    <div className="messenger-card">
      <div className="message-display">
        {messages &&
          messages.map((message) => (
            <div
              key={message.id}
              className={
                message.UserId === userId
                  ? 'sent chat-bubble'
                  : 'received chat-bubble'
              }
            >
              <p>{message.message}</p>
            </div>
          ))}
      </div>
      <form className="message-input" onSubmit={sendMessage}>
        <input
          className="input"
          placeholder="Message"
          value={message}
          onChange={handleChange}
        />
        <button className="send-btn" type="submit">
          <SendIcon className="send-icon" />
        </button>
      </form>
    </div>
  )
}
