import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {
  const {cantidadDeProductos} = useContext(CartContext)
  return (
    <div className="carrito">
        <span className="material-symbols-outlined">shopping_cart</span>
        <label className='contCompra'>{cantidadDeProductos()}</label>
    </div>
  )
}
