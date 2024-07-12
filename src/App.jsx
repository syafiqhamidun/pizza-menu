import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addNumber = () => {
    setCount(count + 1)
  }

  const clearNumber = () => {
    setCount(0)
  }

  return (
    <>
    <button onClick={addNumber}>Add 1</button>
    <button onClick={clearNumber}>clear</button>
      <div>Number {count}</div>
    </>
  )
}

export default App
