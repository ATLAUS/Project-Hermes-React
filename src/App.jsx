import './App.scss'
import * as pages from './pages'
import * as components from './components'
import { useAuth0 } from '@auth0/auth0-react'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

const App = () => {
  const [dbUser, setDbUser] = useState(null)
  const { isLoading } = useAuth0()

  if (isLoading) {
    // TODO replace with a loading component or something of the sort.
    return (
      <>
        <h1>Loading...</h1>
      </>
    )
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<pages.Landing />}></Route>
        {/* TODO If login page is not completed replace with 404 page
        OR condense the two. */}
        <Route path="/login" element={<pages.LoginPage />}></Route>
        <Route
          path="/unauthorized"
          element={<pages.UnauthorizedPage />}
        ></Route>
        <Route
          path="/dashboard"
          element={
            <components.ProtectedRoute>
              <pages.Dashboard dbUser={dbUser} setDbUser={setDbUser} />
            </components.ProtectedRoute>
          }
        ></Route>
        <Route
          path="/matcher-display"
          element={
            <components.ProtectedRoute>
              <pages.MatcherDisplay />
            </components.ProtectedRoute>
          }
        ></Route>
      </Routes>
    </main>
  )
}

export default App
