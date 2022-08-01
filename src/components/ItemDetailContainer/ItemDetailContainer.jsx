import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] =   useState({})
  const {detalleId} = useParams()
  console.log(detalleId);

  useEffect(()=>{
    getFetch(detalleId)
    .then(resp => setProducto(resp))
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

