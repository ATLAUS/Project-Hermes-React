import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? children : <Navigate to="/401" replace />
}
