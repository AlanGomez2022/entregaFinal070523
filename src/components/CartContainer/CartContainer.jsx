import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartContainer = () => {
  const {cartList,vaciarCart,quitProduct,precioTotal} = useContext(CartContext)
 
  const quitarProducto = (product)=>{
    quitProduct(product.id)
  }

  return (
    cartList.length === 0 ?
    <div className='card container-fluid'>
      <h3>No hay productos</h3>
      <Link to='/'> 
        <button className='btn'>Ir a ver productos</button>
      </Link>
    </div>
    :
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
        <div className="container text-center p-200">
          <h3>Precio total: {precioTotal()}</h3>
        </div>
        <div className='card container'>
          <button className='btn container' onClick={vaciarCart}>Vaciar Carrito</button>
        </div>
    </div>
  )
}

export default CartContainer