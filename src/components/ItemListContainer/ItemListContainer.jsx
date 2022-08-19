import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { getFetch } from "../../helpers/getFetch";


import ItemList from "../ItemList/ItemList";



const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()

  //traer un producto por id
  useEffect(() =>{
  const db = getFirestore()
  const queryCollection = collection(db, 'items')
  getDocs(queryCollection)
  .then(resp => console.log(resp))
  },[])

//    useEffect(() => {
//      if (categoriaId) {
//        getFetch() // mock de una consulta a una api
//        .then(respuesta => setProductos(respuesta.filter(prod => prod.categoria === categoriaId))) 
//        .catch( error => console.log(error))
//        .finally(()=> setLoading(false))   
//
//    } else {
//        getFetch() // mock de una consulta a una api
//        .then(respuesta => setProductos(respuesta)) 
//        .catch( error => console.log(error))
//        .finally(()=> setLoading(false))          
//    }
//
//  }, [categoriaId])

  return (
    <div>
      {saludo}

      {loading ? <h1>Cargando...</h1> : <ItemList productos={productos} />}
    </div>
  );
}

export default ItemListContainer;
