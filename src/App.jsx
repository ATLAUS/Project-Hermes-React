import './App.scss'
import * as pages from './pages'
import * as components from './components'
import { useAuth0 } from '@auth0/auth0-react'
import { Route, Routes } from 'react-router-dom'
import { useState, createContext } from 'react'

// Create UserContext
export const UserContext = createContext()

const App = () => {
  //Create UserInfo state
  const [userInfo, setUserInfo] = useState({})
  const [activeParty, setActiveParty] = useState(null)
  const [messages, setMessages] = useState(null)
  const [gameData, setGameData] = useState({})
  const [isMatching, setIsMatching] = useState(false)

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
      {/* Set userInfo state to be the value of UserContext */}
      <UserContext.Provider
        value={{
          userInfo,
          setUserInfo,
          activeParty,
          setActiveParty,
          messages,
          setMessages,
          gameData,
          setGameData,
          isMatching,
          setIsMatching
        }}
      >
        <Routes>
          <Route path="/" element={<pages.Landing />}></Route>
          <Route path="/401" element={<pages.UnauthorizedPage />}></Route>
          <Route
            path="/dashboard"
            element={
              <components.ProtectedRoute>
                <pages.Dashboard />
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
      </UserContext.Provider>
    </main>
  )
}

export default App
