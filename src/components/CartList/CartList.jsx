import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartList = ({cartList}) => {
    const {quitProduct} = useContext(CartContext)
   
    const quitarProducto = (product)=>{
    quitProduct(product.id)
  }

  return (
    <>
    {cartList.map(product =>{
            return(
              <>
              <br />
              <div className='container card' key={product.id}>
                
                <div className='card-body text-center'>
                  <h2 className=''>{product.name}</h2>
                  <img src={product.foto} alt="" />
                  <h3 className='card-text'>Valor Unitario: ${product.price}</h3>
                  {/* <p>Categoria: {product.categoria}</p> */}
                  <h3>Cantidad: {product.quantity}</h3>
                </div>
                <button className='btn' onClick={()=>quitarProducto(product)}> Quitar del carrito 🗑</button>
                
              </div>
              <br />
              </>
              )
        })}
        </>
  )
}

export default CartList