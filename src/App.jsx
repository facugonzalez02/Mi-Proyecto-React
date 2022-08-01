import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState } from 'react' 
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <div className="App"> 
          <NavBar />
          <Routes>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer /> } />
            <Route index path="/" element={<ItemListContainer></ItemListContainer>} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer /> } />
            <Route path='/cart' element={<Cart/>} /> 

            <Route path='*' element={ <Navigate to='/' />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
