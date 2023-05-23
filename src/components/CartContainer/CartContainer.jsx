import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartContainer = () => {
  const {cartList} = useContext(CartContext)
  return (
    <div>{cartList.map(product =>(
      <li>{product.name}</li>
    ))}</div>
  )
}

export default CartContainer