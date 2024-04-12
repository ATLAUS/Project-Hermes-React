import './App.scss'
import { Route, Routes } from 'react-router-dom'
import * as pages from './pages'



const App = () => {
  return (
    <>
      <h1>Project Hermes</h1>
      <h2> Find your duo </h2>
      <Routes>
        <Route path="/" element={<pages.Landing />}></Route>
        <Route path="/dashboard" element={<pages.Dashboard />}></Route>
      </Routes>
    </>
  )
}

export default App
