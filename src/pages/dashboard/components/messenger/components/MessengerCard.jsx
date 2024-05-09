import { socket } from '../../../../../socket'
import { useContext, useState } from 'react'
import './MessengerCard.scss'
import SendIcon from '@mui/icons-material/Send'
import { UserContext } from '../../../../../App'

export const MessengerCard = () => {
  const { userInfo, activeParty, messages } = useContext(UserContext)
  const [message, setMessage] = useState('')
  // const [socketMessages, setSocketMessages] = useState(messages)

  // const handleChange = (e) => {
  //   setMessage(e.target.value)
  // }

  // const sendMessage = (e) => {
  // TODO MOVE THESE OUT THE FUNCTION LIKE IN THE MESSENGER.JSX
  //   const partyId = activeParty?.id
  //   const userId = userInfo?.id
  //   const chatId = activeParty?.Chat.id

  //   e.preventDefault()
  //   socket.volatile.emit('send-message', {
  //     message,
  //     to: partyId,
  //     userId,
  //     chatId
  //   })
  //   setMessage('')
  // }

  // TODO Verify useEffect is NOT needed here or if it is, how to
  // use it properly. Maybe useMemo?
  // socket.on('return-message', ({ newMessage }) => {
  //   let messageArr = [...socketMessages]
  //   messageArr.push(newMessage)
  //   setSocketMessages(messageArr)
  // })

  // TODO FINISH THIS DAMN ASS YEE YEE AHH BULL SHI //

  return (
    <div className="messenger-card">
      <div className="message-display">
        {messages &&
          messages.map((message) => (
            <div key={message.id}>{message.message}</div>
          ))}
      </div>
      <form className="message-input" /*onSubmit={sendMessage} */>
        <input
          className="input"
          placeholder="Message"
          value={message}
          // onChange={handleChange}
        />
        <button className="send-btn" type="submit">
          <SendIcon />
        </button>
      </form>
    </div>
  )
}
