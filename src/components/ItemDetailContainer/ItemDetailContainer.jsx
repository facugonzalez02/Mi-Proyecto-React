import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] =   useState({})
  const {detalleId} = useParams()
  console.log(detalleId);

  useEffect(()=>{
    const db = getFirestore()
    const queryProducto = doc(db, 'items', 'MGbPUYXo2A8iiAAL0ePP')
    getDoc (queryProducto)
    .then(response => setProducto( { id: response.id, ...response.data() } ) )
  }, [])
  //console.log(producto);
  return (
    <div>
      ItemDetailContainer
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer

