import { useAuth0 } from '@auth0/auth0-react'
import './Landing.scss'
import { LoginButton } from './components/login-button/LoginButton'
import { LogoutButton } from './components/logout-button/LogoutButton'

export const Landing = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()

  const testBackendRoute = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'http://localhost:3000/'
        }
      })

      const customUserHeader = {
        'X-User-Info': JSON.stringify({
          email: user.email,
          nickname: user.nickname,
          sub: user.sub
        })
      }

      const testEndpoint = 'http://localhost:3000/test'

      const testResponse = await fetch(testEndpoint, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          ...customUserHeader
        }
      })

      const response = await testResponse.json()

      console.log(response)
    } catch (e) {
      console.log(e.message)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <p className="landing">Landing Page!</p>
      <LoginButton />
      <LogoutButton />
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
          <button onClick={testBackendRoute}>Click me!</button>
        </div>
      )}
    </>
  )
}
