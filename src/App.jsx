import axios from 'axios'
import './App.css'

const App = () => {
  const onClick = async () => {
    const res = await axios.get('http://localhost:3000/users')
    console.log(res)
  }
  return (
    <>
      <h1>Project Hermes</h1>
      <h2> Find your duo </h2>
      <button>
        <a href="http://localhost:3000/login">Login</a>
      </button>
      <button onClick={onClick}>Get Users</button>
    </>
  )
}

export default App
