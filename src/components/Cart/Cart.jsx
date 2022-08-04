import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext';

const Cart = () => {

  const{cartList, vaciarCarrito} = useCartContext
  
  return (
    <div>
      Cart
      <br />
      <Link to="/">
        <button type="button" className="btn btn-danger">
          Ir a Inicio
        </button>
      </Link>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  );
};
  

export default Cart
