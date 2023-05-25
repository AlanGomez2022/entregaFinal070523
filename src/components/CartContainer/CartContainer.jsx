import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartContainer = () => {
  const {cartList,vaciarCart,quitProduct,precioTotal} = useContext(CartContext)
 
  const quitarProducto = (product)=>{
    quitProduct(product.id)
  }

  const handleSubmit = () =>{
    const orden = {
      buyer:{name: 'Alan', phone:'1169581005', email:'alanagustingomez@gmail.com'},
      items:[cartList.map(product =>{
        return(
          { id:product.id,
            item:product.name,
            price:product.price  
          }
        )
      } )],
      total:precioTotal()
    }
    console.log('enviando orden', orden)
  }

  return (
    cartList.length === 0 ?
    <div className='card container-fluid'>
      <h3>No hay productos</h3>
      <Link to='/'> 
        <button className='btn btn-primary text-white'>Ir a ver productos</button>
      </Link>
    </div>
    :
    <div>
        {cartList.map(product =>{
            return(
              <>
              <br />
              <div className='container card' key={product.id}>
                
                <div className='card-body'>
                  <h2 className=''>{product.name}</h2>
                  <img src={product.foto} alt="" />
                  <h3 className='card-text'>${product.price}</h3>
                  <p>Categoria: {product.categoria}</p>
                  <h3>Cantidad: {product.quantity}</h3>
                </div>
                <button className='btn' onClick={()=>quitarProducto(product)}> Quitar del carrito 🗑</button>
                
              </div>
              <br />
              </>
              )
        })}
        <div className="container text-center p-200">
          <br />
          <br />
          <h3 className='btn-info'>Precio total: $ {precioTotal()}</h3>
          <br /><br />
        </div>
        <div className='card container'>
          <br />
          <button className='btn container btn-danger text-white' onClick={vaciarCart}>⛔ Vaciar Carrito ⛔</button>
          <br />
          <button className='btn container btn-success text-white' onClick={handleSubmit}>✅ Generar Orden ✅</button>
        </div>
    </div>
  )
}

export default CartContainer