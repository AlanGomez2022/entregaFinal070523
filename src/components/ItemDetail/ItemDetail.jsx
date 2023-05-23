import React, { useContext, useEffect, useState } from 'react'

import Counter from '../Counter/Counter'

import './itemDetail.css'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({product}) => {
  
  const {agregarAlCart, cartList} = useContext(CartContext)
  const onAdd = (cantidad)=>{
    agregarAlCart({...product, quantity: cantidad})
  }
  console.log(cartList)
  return (
    <div className='row'>
        <div className='col-6 contImgDetail'>
            <img src={product.foto} className='detailImg' alt="prodructo imagen" />
        </div>
        <div className='col-6'>
        <h3>PRODUCTO: {product.name}</h3>
            <h4>PRECIO: {product.price}</h4>
            <h4>CATEGORIA: {product.categoria}</h4>
            <p>Descripcion: {product.descripcion}</p>
            <Counter initial={1} max={4} min={1} onAdd={onAdd}/>
        </div>
      
    </div>
  )
}

export default ItemDetail