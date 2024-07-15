import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='page-container'>
      <div className='content-wrap'>
    <Header />
      </div>
    <Footer />
    </div>
    </>
  )
}

export default App
