import React from 'react'
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)

  const counter = () => setCount(count + 1)

  return (
    <div>
      {count}
      <button onClick={counter}>+1</button>
    </div>
  )
}

export default App