import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const CartContainer = () => {
  const {cartList,vaciarCart,quitProduct} = useContext(CartContext)
 
  const quitarProducto = (product)=>{
    quitProduct(product.id)
  }

  return (
    <div>
        {cartList.map(product =>{
            return(
              <div className='container card' key={product.id}>
                <h2>{product.name}</h2>
                <img src={product.foto} alt="" />
                <h3>{product.price}</h3>
                <p>Categoria: {product.categoria}</p>
                <h3>Cantidad: {product.quantity}</h3>
                <button className='btn' onClick={()=>quitarProducto(product)}> Quitar del carrito 🗑</button>
              </div>

              )
        })}
        <button className='btn container' onClick={vaciarCart}>Vaciar Carrito</button>
    </div>
  )
}

export default CartContainer