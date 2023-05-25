import { createContext, useState } from "react";

export  const CartContext = createContext([])

// componente para enmascarar el contexto
export const CartContextProvider = ({children}) =>{

    const [cartList,setCartList] = useState([])

    const agregarAlCart = (newProduct) => {
        setCartList([...cartList,
        newProduct])
    }
    const vaciarCart = ()=>{
        setCartList([])
    }
    const quitProduct = (id) =>{
        const filtrado = cartList.filter(product => product.id !== id )
        setCartList(filtrado)

    }
    const precioTotal = ()=>{
        return cartList.reduce((totalPrice,objProducto)=>totalPrice = totalPrice + (objProducto.price*objProducto.quantity),0)
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCart,
            vaciarCart,
            quitProduct,
            precioTotal    
        }}>
            {children}
        </CartContext.Provider>
    )
}