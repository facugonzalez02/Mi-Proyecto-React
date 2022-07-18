import {useState} from 'react'

const estilos = {marginTop: ' 40px ' ,display:' flex ', justifyContent: ' center '} 

const ItemCount = ({ initial=1, stock=10, onAdd }) => {
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
        onAdd(count)
    }
  return (
    <div style={ estilos }>
        <div className="card w-25 ">
        <label>{ count }</label>
        <br />
        <button className='btn btn-outline-danger' onClick={handleAdd}> + </button>
        <button className='btn btn-outline-danger' onClick={handleResta}> - </button>
        <button className='btn btn-outline-success' onClick={handleAddToCart}> Agregar Carrito </button>
        </div>
    </div>
  )
}

export default ItemCount
