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

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCart,
            vaciarCart,
            quitProduct    
        }}>
            {children}
        </CartContext.Provider>
    )
}