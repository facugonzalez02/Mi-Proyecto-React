import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ producto }) => {
  const [isCount, setIsCount] = useState(true)

  const {agregarCarrito, cartList} = useCartContext ()


  const onAdd = (cant) => {
    console.log(`la cantidad es: ${cant}`)
    agregarCarrito( {...producto, cantidad: cant})
    setIsCount(false)
  }
console.log(cartList)


  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={producto.foto} />
      <Card.Body>
        <Card.Title>{producto.categoria} - {producto.marca}</Card.Title>
        <Card.Text>Cantidad por porción: {producto.cantidad}</Card.Text>
        <Card.Text>30 Servicios</Card.Text>
        <Card.Text>Proteina de suero de leche</Card.Text>
        <Card.Text>Precio: ${producto.precio}</Card.Text>      
        <div>
          {isCount?
          <ItemCount initial={1} stock={10} onAdd={onAdd} />
            :
            <>
            <Link to={'/cart'}>
                <button className="btn btn-outline-success" >Terminar Compra</button>
            </Link>
            <Link to={'/'}>
                <button className="btn btn-outline-primary" >Seguir Comprando</button>
            </Link>
            </>

          }
        </div>
      </Card.Body>

    </Card>
  )

}



export default ItemDetail