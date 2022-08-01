import Card from 'react-bootstrap/Card';

const ItemDetail = ({ producto }) => {

  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={producto.foto} />
      <Card.Body>
        <Card.Title>{producto.categoria} - {producto.marca}</Card.Title>
        <Card.Text>Cantidad por porción: {producto.cantidad}</Card.Text>
        <Card.Text>30 Servicios</Card.Text>
        <Card.Text>Proteina de suero de leche</Card.Text>
        <Card.Text>Precio: ${producto.precio}</Card.Text>
      </Card.Body>
    </Card>
  )

}



export default ItemDetail