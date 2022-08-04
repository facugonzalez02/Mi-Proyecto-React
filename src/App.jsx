import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react' 
import NavBar from './components/NavBar/NavBar'
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from "./Context/CartContext";




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <CartContextProvider>
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
        </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
