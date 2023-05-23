import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const CartContainer = () => {
  const {cartList,vaciarCart} = useContext(CartContext)
 
  
  return (
    <div>
        {cartList.map(product =>{
            return(
              <div className='container card'>
                <h2>{product.name}</h2>
                <img src={product.foto} alt="" />
                <h3>{product.price}</h3>
                <p>Categoria: {product.categoria}</p>
                <h3>Cantidad: {product.quantity}</h3>
                <button className='btn'> Quitar del carrito 🗑</button>
              </div>

              )
        })}
        <button className='btn container' onClick={vaciarCart}>Vaciar Carrito</button>
    </div>
  )
}

export default CartContainer