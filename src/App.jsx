import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <header>
        <div>
          <NavBar />
        </div>
      </header>
      <ItemListContainer saludo={"Hola soy ItemListContainer"}></ItemListContainer>
    </div>
  )
}

export default App
