import { useState } from 'react'
import Header from '/src/Header'
import Meio from '/src/Meio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Meio />
    </>
  )
}

export default App
