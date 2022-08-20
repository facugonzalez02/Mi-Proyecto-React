import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { getFetch } from "../../helpers/getFetch";


import ItemList from "../ItemList/ItemList";



const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()

  //traer todos los productos de una categoria
  //useEffect(() =>{
  //const db = getFirestore()
  //const queryCollection = collection(db, 'items')
  //getDocs(queryCollection)
  //.then(resp => setProductos( resp.docs.map(prod => ({id: prod.id, ...prod.data() })) ))
  //.catch( error => console.log(error))
  //.finally(()=> setLoading(false))
  //},[])

  //TRAER TODOS LOS PRODUCTOS PERO FILTRADOS
  //useEffect(()=>{
    //const db = getFirestore()
    //const queryCollection = collection(db, 'items')
    //const queryFiltrada = query(queryCollection, where('precio','>', 10000))
    //getDocs(queryFiltrada)
    //.then(resp => setProductos( resp.docs.map(prod => ({id: prod.id, ...prod.data() })) ))
    //.catch( error => console.log(error))
    //.finally(()=> setLoading(false))
  //}, [])

  useEffect(()=>{
    if (categoriaId) {
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    const queryFiltrada = query(queryCollection, 
      where ('categoria','==', categoriaId),

      )
    getDocs(queryFiltrada)
    .then(response =>  setProductos( response.docs.map(productos=> ( { id: productos.id, ...productos.data() } ))))
    .catch( error => console.log(error))
    .finally(()=> setLoading(false)) 
  } else {
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    getDocs(queryCollection)
    .then(response =>  setProductos( response.docs.map(productos=> ( { id: productos.id, ...productos.data() } ))))
    .catch( error => console.log(error))
    .finally(()=> setLoading(false)) 
  }



}, [categoriaId])
  console.log(productos)

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
