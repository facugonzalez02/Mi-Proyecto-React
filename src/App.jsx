import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <header>
        <div>
          <NavBar />
        </div>
      </header>
    </div>
  )
}

export default App
