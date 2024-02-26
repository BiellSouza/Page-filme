import { useState } from 'react'
import Header from '/src/Header'
import Meio from '/src/Meio'
import Footer from '/src/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Meio />
      <Footer />
    </>
  )
}

export default App
