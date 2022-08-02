import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ producto }) => {
  const [toCart, setToCart] = useState(true)


  const onAdd = (cant) => {
    console.log(`La cantidad seleccionada es: ${cant}`);
    setToCart(false)
  }

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
          {toCart?
          <ItemCount initial={1} stock={10} onAdd={onAdd} />
            :
            <Link to='/cart'><button type="button" className='btn btn-primary'>Ir al Carrito</button></Link>
          }
        </div>
      </Card.Body>

    </Card>
  )

}



export default ItemDetail