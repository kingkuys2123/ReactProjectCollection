import { useState } from 'react'
import './App.css'
import JeepCodes from './components/JeepCodes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <JeepCodes></JeepCodes>
    </div>
  )
}

export default App
