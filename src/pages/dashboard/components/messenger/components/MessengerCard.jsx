import { socket } from '../../../../../socket'
import { useState } from 'react'
import './MessengerCard.scss'
import SendIcon from '@mui/icons-material/Send'

export const MessengerCard = ({ messages, activeParty, user }) => {
  const [message, setMessage] = useState('')

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

  return (
    <div className="messenger-card">
      <div className="message-display"></div>
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
