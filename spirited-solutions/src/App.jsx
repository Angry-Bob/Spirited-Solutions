import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaHeart } from 'react-icons/fa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Spirited Solutions</h1>
      <p>More than just a cocktail app</p> 

      <h2>Group Hackathon</h2>
        <FaHeart />
      <p>Hi Cuties</p>
    
      <p>Testing git push.</p>

    </>
  )
}

export default App
