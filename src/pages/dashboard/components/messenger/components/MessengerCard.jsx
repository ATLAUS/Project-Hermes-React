import { socket } from '../../../../../socket'
import { useEffect, useState } from 'react'
import './MessengerCard.scss'
import SendIcon from '@mui/icons-material/Send'

export const MessengerCard = ({ messages, activeParty, user }) => {
  const [message, setMessage] = useState('')
  const [socketMessages, setSocketMessages] = useState([...messages])

  const partyId = activeParty?.id

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const sendMessage = (e) => {
    e.preventDefault()
    socket.volatile.emit('send-message', {
      message,
      to: partyId
    })
    setMessage('')
  }

  socket.on('return-message', ({ message }) => {
    let messageArr = [...socketMessages]
    messageArr.push(message)
    setSocketMessages(messageArr)
  })

  return (
    <div className="messenger-card">
      <div className="message-display">
        {socketMessages.length > 0
          ? socketMessages.map((msg, idx) => <div key={idx}>{msg}</div>)
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
