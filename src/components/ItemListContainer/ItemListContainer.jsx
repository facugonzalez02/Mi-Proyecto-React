import { useEffect, useState } from "react";
import NavLink from "react-bootstrap/esm/NavLink";
import { getFetch } from "../../helpers/getFetch";
import ItemCount from "../ItemCount/ItemCount";


import ItemList from "../ItemList/ItemList";



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
          <ItemList productos={productos} />
        }
      
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer;
