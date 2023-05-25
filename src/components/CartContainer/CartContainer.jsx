import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import CartList from '../CartList/CartList'
import BuyDetail from '../BuyDetail/BuyDetail'


const CartContainer = () => {
  const {cartList,vaciarCart,precioTotal} = useContext(CartContext)
  const [compra,setCompra] = useState({})
  const [formData,setFormData] = useState({
    name:'',
    phone:'',
    email:''
  })
  console.log(formData)

  const handleOnChange = (event)=>{
    console.log(event.target.name)
    console.log(event.target.value)
    setFormData({
      ... formData,
      [event.target.name]: event.target.value
    })
  }
 
  

  const handleSubmit = (event) =>{
    event.preventDefault()
    const orden = {
      buyer:formData,
      items:cartList.map(product =>{
        return(
          { id:product.id,
            item:product.name,
            price:product.price  
          }
        )
      } ),
      total:precioTotal()
    }

    const db = getFirestore()

    const queryCollection = collection(db,'orders')
    addDoc(queryCollection, orden)
    .then(resp => setCompra(resp))
    .catch(err=>console.log(err))
    .finally(()=> console.log('termino la promesa'))

    console.log('enviando orden', orden)
    vaciarCart()
  }

  return (
    <>
    {compra.id && <BuyDetail formData={formData} compra={compra}/> }
    {cartList.length === 0 ?
    <div className='card container-fluid'>
      <h3>Carrito de compras vacio</h3>
      <Link to='/'> 
        <button className='btn btn-primary text-white'>Ir a ver productos</button>
      </Link>
    </div>
    :
    <div>
     
        <CartList cartList={cartList} />
       
        <div className="container text-center p-200">
          <br />
          <br />
          <h3 className='btn-info'>Precio total: $ {precioTotal()}</h3>
          <br />
          <button className='btn container btn-danger text-white text-center' onClick={vaciarCart}>⛔ Vaciar Carrito ⛔</button>
          <br /><br />
        </div>
        <div className='card container'>
          <br />
          <form onSubmit={handleSubmit} className='text-center'>
            <h2>Para finalizar la compra</h2>
            <h4>Ingrese sus datos personales</h4>
            <input className='w-100' type="text"
                   name="name"
                   placeholder='Ingrese su Nombre'
                   onChange={handleOnChange}
                   value={formData.name}
             />
             <br /><br />
             <input className='w-100' type="text"
                   name="phone"
                   placeholder='Ingrese su nro celular'
                   onChange={handleOnChange}
                   value={formData.phone}
             />
             <br /><br />
             <input className='w-100' type="text"
                   name="email"
                   placeholder='Ingrese su E-mail'
                   onChange={handleOnChange}
                   value={formData.email}
             /> <br /><br />
            <button className='btn container btn-success text-white'  >✅ Generar Orden ✅</button>
          </form>        
        </div>
    </div>}
    </>
  )
}

export default CartContainer