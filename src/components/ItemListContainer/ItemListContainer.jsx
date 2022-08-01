import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import ItemCount from "../ItemCount/ItemCount";


import ItemList from "../ItemList/ItemList";



const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()

  useEffect(() => {
    if (categoriaId) {
      getFetch() // mock de una consulta a una api
      .then(respuesta => setProductos(respuesta.filter(prod => prod.categoria === categoriaId))) 
      .catch( error => console.log(error))
      .finally(()=> setLoading(false))   

  } else {
      getFetch() // mock de una consulta a una api
      .then(respuesta => setProductos(respuesta)) 
      .catch( error => console.log(error))
      .finally(()=> setLoading(false))          
  }

}, [categoriaId])

  const onAdd = (cant) => {
    console.log(`La cantidad seleccionada es: ${cant}`);
  };
  console.log(categoriaId);

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
