import { createContext, useState, useContext } from "react";

 const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

 //Componente -> estados para producir renders y que se actualize

 const CartContextProvider = ({children}) => {
    //Aqui puedo declarar todos los estados y funciones globales

    const [cartList, setCartList] = useState ([])

    const  agregarCarrito = (prod) =>{
        const idx = cartList.findIndex(producto => producto.id === prod.id ) // <- 
        if (idx !== -1) {
            // existe el producto en el carrito
            // cartList[idx].cantidad +=   prod.cantidad    
            let cant = cartList[idx].cantidad
            cartList[idx].cantidad = cant + prod.cantidad

            setCartList( [ ...cartList ] ) 
        } else {
            // no existe el producto en el carrito
            setCartList([
                ...cartList,
                prod
            ])
        }
    }


    const vaciarCarrito = () => {
        setCartList([])
    }

    const eliminarProducto = (id) => {
        setCartList( cartList.filter(prod => prod.id !== id ) )
    }

    const precioTotal = ()=>{
        return cartList.reduce( (acumPrecio, prodObj) => acumPrecio = acumPrecio + (prodObj.precio * prodObj.cantidad) , 0)
    }

    const cantidadTotal = ()=>{
        return cartList.reduce((contador, produObject) => contador += produObject.cantidad , 0)
    }


    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            { children }
        </CartContext.Provider>


    )
}

export default CartContextProvider
