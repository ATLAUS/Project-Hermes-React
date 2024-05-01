import { useAuth0 } from '@auth0/auth0-react'

// TODO Complete the implementation of this component.
export const LogoutButton = () => {
  const { logout } = useAuth0()
  return (
    <button
      onClick={() => {
        logout({ logoutParams: { returnTo: window.location.origin } })
      }}
    >
      Logout
    </button>
  )
}
