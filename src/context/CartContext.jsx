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

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCart,
            vaciarCart    
        }}>
            {children}
        </CartContext.Provider>
    )
}