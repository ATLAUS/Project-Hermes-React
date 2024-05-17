import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  const handleLogin = () => {
    loginWithRedirect()
  }
  return (
    <>
      <button className='bttn' onClick={handleLogin}>Login</button>
    </>
  )
}
