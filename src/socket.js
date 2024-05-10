import { io } from 'socket.io-client'

const socketAddress = import.meta.env.VITE_AUDIENCE
  ? 'https://project-hermes.onrender.com'
  : 'http://localhost:3000'

export const socket = io(socketAddress, {
  autoConnect: false
})
