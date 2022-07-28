import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({prod}) => {
  return (
        <div className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`${prod.foto}`} />
                    <Card.Body>
                        <Card.Title>{`${prod.suplemento}`} {`${prod.marca}`}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Detalle</Button>
                    </Card.Body>
                    </Card>
        </div>
  )
}

export default Item

