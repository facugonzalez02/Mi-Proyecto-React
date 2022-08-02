import {useState} from 'react'

const estilos = {marginTop: ' 40px ' ,display:' flex ', justifyContent: ' center '} 

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const handleResta = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    
    const handleAddToCart = () => {
        if (count < stock) {
            onAdd(count)
            
        }
    }

  return (
    <div style={ estilos }>
        <div className="card w-50 ">
            <label>{ count }</label>
            <br />
            <button className='btn btn-outline-dark' onClick={handleAdd}> + </button>
            <button className='btn btn-outline-dark' onClick={handleResta}> - </button>
            <button className='btn btn-outline-primary' onClick={handleAddToCart}> Agregar al Carrito </button>
        </div>
    </div>
  )
}

export default ItemCount
