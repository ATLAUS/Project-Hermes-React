import './Landing.scss'
import { useEffect, useState } from 'react';

export const Landing = () => {

  const [user, setUser] = useState({})

  const fetchUserData = async () => {
    const response = await fetch('/api/users')
    const userData = await response.json()
    setUser(userData.user)
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  return (
    <>
      <p className="landing">Landing Page!</p>
      <button><a href="http://localhost:3000/">Login</a></button>
      <button onClick={fetchUserData}>Click</button>
      {user && <p>{user.userName}</p>}
    </>
  )
}
