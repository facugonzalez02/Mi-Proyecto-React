import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({prod}) => {
  return (
        <div className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`${prod.foto}`} />
                    <Card.Body>
                        <Card.Title>{`${prod.categoria}`} {`${prod.marca}`}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Link to={`/detalle/${prod.id}`}>
                          <Button variant="primary">Detalle</Button>
                        </Link>
                    </Card.Body>
                    </Card>
        </div>
  )
}

export default Item

