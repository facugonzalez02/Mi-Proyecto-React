import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      Cart
      <br />
      <Link to="/">
        <button type="button" className="btn btn-danger">
          Ir a Inicio
        </button>
      </Link>
    </div>
  );
};
  

export default Cart
