import { useState } from "react";
import { Card } from "react-bootstrap"
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { Link } from "react-router-dom"
import { useCartContext } from '../../Context/CartContext';

const Cart = () => {
    const [id, setId] = useState('')
    const{cartList, vaciarCarrito, eliminarProducto, precioTotal} = useCartContext ()
    console.log(cartList);

    

  
  return (
    <>
        {cartList.length == 0 ? 

                

            <Card className="text-center mx-auto" style={{ width: '10rem', marginTop: '20px' }}>
            <CardHeader>Aun no tienes nada en tu carrito</CardHeader>
            <button><Link to="/" style={{  color: "black" }}>Ir a comprar</Link></button>
            </Card>
            
            :
        <div className="row">
            <h1>Carrito</h1>
                <div className="col-8">
                    <div className="w-100">                    
                            {cartList.map(item => (
                                <div key={item.id}>
                                    
                                    <img src={item.foto} alt="Foto de producto" style={{ width: 100 }} />
                                
                                    nombre: {item.categoria} - cantidad: {item.cantidad} - Precio: {item.precio} - Subtotal: {item.cantidad * item.precio}
                                    <button onClick={ () => eliminarProducto(item.id) }> X </button>
                                </div>
                            ))}
                        
                    </div>
                    <div>
                        <h6>  { precioTotal() !== 0 && `Precio Total: ${ precioTotal() }`}</h6>
                        
                        <button  onClick={vaciarCarrito}>Vaciar carrito</button>
                    </div>
                </div>
        </div>

        
        
}
    </>
)
}
  

export default Cart
