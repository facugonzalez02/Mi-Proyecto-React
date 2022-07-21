import { useEffect, useState } from "react";
import NavLink from "react-bootstrap/esm/NavLink";
import { getFetch } from "../../helpers/getFetch";
import ItemCount from "../ItemCount/ItemCount";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getFetch() //mock de una consulta a una API
      .then((respuesta) => setProductos(respuesta))
      .catch( err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const onAdd = (cant) => {
    console.log(`La cantidad seleccionada es: ${cant}`);
  };
  console.log(productos);

  return (
    <div>
      {saludo}

        { loading ?  <h1>Cargando...</h1> 
          :
          productos?.map(producto =>
            <div className="d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${producto.foto}`} />
                  <Card.Body>
                    <Card.Title>{`${producto.suplemento}`} {`${producto.marca}`}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
            </div>
          )
        }
      
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer;
