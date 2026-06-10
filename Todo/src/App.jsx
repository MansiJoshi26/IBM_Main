import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo List</h1>
      <div style={{height:'4px', width:'4px'}}>
      <img src="https://images.dog.ceo/breeds/labrador/n02099712_4530.jpg" alt="dog img" width="100%"/>
      </div>
    </>
  )
}

export default App
