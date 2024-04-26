import './App.scss'
import { Route, Routes } from 'react-router-dom'
import * as pages from './pages'

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<pages.Landing />}></Route>
        <Route path="/dashboard" element={<pages.Dashboard />}></Route>
        <Route path="/matcher-display" element={<pages.MatcherDisplay />}></Route>
      </Routes>
    </main>
  )
}

export default App
