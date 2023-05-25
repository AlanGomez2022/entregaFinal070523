import { createContext, useState } from "react";

export  const CartContext = createContext([])

// componente para enmascarar el contexto
export const CartContextProvider = ({children}) =>{

    const [cartList,setCartList] = useState([])

    const agregarAlCart = (newProduct) => {
        //para evitar repetir productos
        const indexProduct = cartList.findIndex(product => product.id === newProduct.id) // retorna -1

        if (indexProduct === -1){
            setCartList([...cartList,
            newProduct])
        }else{
            cartList[indexProduct].quantity += newProduct.quantity
            setCartList([...cartList])
        }
    }

    const cantidadDeProductos = () => cartList.reduce((cantidadDeProductos, product) =>cantidadDeProductos= cantidadDeProductos + product.quantity ,0)//retorna un solo valor

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
            precioTotal,
            cantidadDeProductos    
        }}>
            {children}
        </CartContext.Provider>
    )
}