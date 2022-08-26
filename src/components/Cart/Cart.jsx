import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react";
import { Card } from "react-bootstrap"
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { Link } from "react-router-dom"
import { useCartContext } from '../../Context/CartContext';

const Cart = () => {
    const{cartList, vaciarCarrito, eliminarProducto, precioTotal} = useCartContext ()

    //Función para guardar la orden en la base de datos

  /// Setear la orden

  const guardarOrden = async (e) => {
    e.preventDefault()

    const order = {}
    order.buyer = {email: "facugonzalez0743@gmail.com", name: "Facundo", phone: "159753654"}

    order.items = cartList.map(prod => {
        return {
            product: prod.categoria,
            id: prod.id,
            price: prod.precio
        }
    })

    order.total = precioTotal()

    // console.log(order)

    //// Guardar la orden en la base de datos

    const db = getFirestore()
    const queryOrders = collection(db, "orders")
    addDoc(queryOrders, order)
    .then(resp => alert("Su orden ha sido generada con el identificador: " + resp.id )) 

    /// Actualizar documento

    // const queryUpdateDoc = doc(db, "items", )

  }

    

  
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
                    <div className="col checkout mt-5">
                        <button className="btn btn-success" onClick={guardarOrden}> Finalizar Compra </button>
                    </div>
                </div>
        </div>

        
        
}
    </>
)
}
  

export default Cart
